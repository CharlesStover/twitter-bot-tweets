const fs = require('fs');
const path = require('path');

const indexes = ['AceQuisido'];

const MAX_TWEET_LENGTH = 280;
const URL = /https?:\/\/.+?\s/g;
const URL_LENGTH = 23;
const URL_PLACEHOLDER = '_'.repeat(URL_LENGTH);

const expectMatch = (obj, key, r) => {
  if (!r.test(obj[key])) {
    throw new Error(`Property ${key} is not formatted correctly.`);
  }
};

const expectString = (obj, key) => {
  if (typeof obj[key] !== 'string') {
    throw new Error(`Property "${key}" must be a string.`);
  }
};

const expectStyle = (obj, key) => {
  if (/'/.test(obj[key])) {
    throw new Error(`Property "${key}" contains ' instead of ’.\n${obj[key]}`);
  }
  if (/"/.test(obj[key])) {
    throw new Error(
      `Property "${key}" contains " instead of “ or ”.\n${obj[key]}`,
    );
  }
};

const expectUndefined = (obj, key) => {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    throw new Error(`Property "${key}" must not be defined.`);
  }
};

const testTweet = (user, tweet) => {
  // Retweet
  if (tweet.retweet) {
    expectUndefined(tweet, 'media');
    expectString(tweet, 'retweet');
    expectMatch(tweet, 'retweet', /^\d+$/);
    expectUndefined(tweet, 'status');
  }

  // Status
  else if (tweet.status) {
    expectUndefined(tweet, 'reweet');
    expectString(tweet, 'status');
    expectStyle(tweet, 'status');
    const TWEET_LENGTH = tweet.status.replace(URL, URL_PLACEHOLDER).length;
    if (TWEET_LENGTH > MAX_TWEET_LENGTH) {
      throw new Error(
        `Status length cannot be above ${MAX_TWEET_LENGTH} characters. Delete ${
          TWEET_LENGTH - MAX_TWEET_LENGTH
        } characters.\n${tweet.status}`,
      );
    }

    if (Object.prototype.hasOwnProperty.call(tweet, 'media')) {
      if (typeof tweet.media !== 'object') {
        throw new Error(
          'Tweet media must be an object in the form { alt_text: path }.',
        );
      }
      for (const entry of Object.entries(tweet.media)) {
        expectStyle(entry, 0);
        expectString(entry, 1);
        if (!fs.existsSync(path.join('src', user.toLowerCase(), entry[1]))) {
          throw new Error(
            `Media does not exist: ${user.toLowerCase()}/${entry[1]}`,
          );
        }
      }
    }
  }

  // Unknown
  else {
    throw new Error(
      `Tweet is not a retweet or a status:\n${JSON.stringify(tweet)}`,
    );
  }
};

describe('Tweet indexes', () => {
  for (const user of indexes) {
    const index = JSON.parse(fs.readFileSync(`./build/${user}/index.json`));
    describe(`@${user}`, () => {
      it('should have valid tweet index shape', () => {
        for (const tweet of Object.values(index)) {
          if (Array.isArray(tweet)) {
            for (const tweet2 of tweet) {
              testTweet(user, tweet2);
            }
          } else {
            testTweet(user, tweet);
          }
        }
      });
    });
  }
});
