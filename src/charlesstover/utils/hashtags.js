const hashtagSets = require('./hashtag-sets');

module.exports = function hashtags(used, ...sets) {
  if (used === null) {
    return hashtags(new Set(), ...sets);
  }
  if (typeof used === 'string') {
    return hashtags(new Set([ used ]), ...sets);
  }
  if (Array.isArray(used)) {
    return hashtags(new Set(used), ...sets);
  }
  const tags = sets.reduce(
    (t, set) => {
      if (!Object.prototype.hasOwnProperty.call(hashtagSets, set)) {
        throw new Error(`Hashtag Set "${set}" doesn’t exist.`);
      }
      for (const tag of hashtagSets[set]) {
        if (!used.has(tag)) {
          t.add(`#${tag}`);
        }
      }
      return t;
    },
    new Set()
  );
  return [ ...tags ].join(' ');
};
