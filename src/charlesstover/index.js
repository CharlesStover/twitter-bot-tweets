const hashtags = require('./utils/hashtags');

const github = 'https://github.com/CharlesStover/';
const medium = 'https://medium.com/@Charles_Stover/';
// const npmjs = 'https://npmjs.com/package/';

module.exports = {
  // Medium articles
  'A React hook for asynchronous state.': {
    status: `A #ReactJS hook can (with strong #TypeScript support) couple a component’s state with an async function. ${medium}a-react-hook-for-asynchronous-state-4dc24379be61 ${hashtags(
      ['ReactJS', 'TypeScript'],
      'js',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'Are you underqualified to apply to a software development position?': {
    status: `For any junior #developers overwhelmed by minimum requirements and unsure if they’re ready: ${medium}are-you-underqualified-to-apply-to-a-software-development-position-45c01079861a ${hashtags(
      ['developers'],
      'careers',
    )}`,
  },
  'Become the junior developer that companies want to hire.': [
    {
      status: `Thirty minutes of content on how to prepare physically and mentally for your interviews. https://charlesstover.com/become-the-junior-developer-that-companies-want-to-hire/ ${hashtags(
        [],
        'careers',
      )}`,
    },
    {
      status: `Thirty minutes of content on how to prepare physically and mentally for your interviews. ${medium}become-the-junior-developer-that-companies-want-to-hire-c539f4c236d8 ${hashtags(
        [],
        'careers',
      )}`,
    },
  ],
  'Boost Your Page Speed: Reduce File Size': {
    status: `Improve your page load speeds with these quick tips to reduce your file sizes. ${medium}boost-your-page-speed-reduce-file-size-470057090c29 ${hashtags(
      [],
      'frontend',
    )}`,
  },
  'Boost Your Page Speed: Reduce Parse Time': {
    status: `Improve your page load speed by allowing the browser to parse and display it faster. ${medium}boost-your-page-speed-reduce-parse-time-d2a380907de5 ${hashtags(
      [],
      'frontend',
    )}}`,
  },
  'Boost Your Page Speed: Reduce Server Calls': {
    status: `Improve your page load speed by decreasing unnecessary server calls. ${medium}boost-your-page-speed-reduce-server-calls-6b7384d38cb ${hashtags(
      [],
      'frontend',
    )}`,
  },
  'Cache your React event listeners to improve performance': {
    status: `A deep-dive into the performance benefits of memoizing #ReactJS props. ${medium}cache-your-react-event-listeners-to-improve-performance-14f635a62e15 ${hashtags(
      ['ReactJS'],
      'frontend',
      'js',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'The Fetch API and asynchronous Redux state': {
    status: `Understand the states of an API call and their relationship to a #Redux store ${medium}the-fetch-api-and-asynchronous-redux-state-203270a540d4 ${hashtags(
      ['Redux'],
      'frontend',
      'react',
      'reactnative',
      'redux',
      'typescript',
    )}`,
  },
  'Fixing React Native WebView’s postMessage for iOS': {
    status: `A #JavaScript-only solution to Expo’s postMessage problem on #iOS. ${medium}fixing-react-native-webviews-postmessage-for-ios-10e2320b2f14 ${hashtags(
      ['JavaScript'],
      'react',
      'reactnative',
    )}`,
  },
  'Fixing Volumes in Docker Toolbox': {
    status: `Volumes in #Docker Toolbox require you to configure Oracle Virtualbox to have access to your folders. ${medium}fixing-volumes-in-docker-toolbox-4ad5ace0e572`,
  },
  'How to convert withRouter to a React Hook': {
    status: `Converting react-router’s withRouter HOC to a #ReactJS Hook: A Tutorial ${medium}how-to-convert-withrouter-to-a-react-hook-19bb02a29ed6 ${hashtags(
      'ReactJS',
      'frontend',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'Implementing Quicksort in JavaScript': {
    status: `How to implement the Quicksort algorithm in #JavaScript ${medium}implementing-quicksort-in-javascript-8044a8e2bf39 ${hashtags(
      ['JavaScript'],
      'frontend',
      'js',
      'typescript',
    )}`,
  },
  'Manage global state with React hooks': {
    status: `ReactN offers a #ReactJS hook for accessing and managing global state. ${medium}manage-global-state-with-react-hooks-6065041b55b4 ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'Manage your customers’ clipboards with React Hooks.': {
    status: `Manage your customers’ clipboards with React Hooks. ${medium}manage-your-customers-clipboard-with-react-hooks-18486220d0d1 ${hashtags(
      ['ReactJS'],
      'js',
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  'No-boilerplate global state management in React': {
    status: `ReactN is an intuitive, boilerplate-free global state manager for #ReactJS. ${medium}no-boilerplate-global-state-management-in-react-41e905944eb7 ${hashtags(
      'ReactJS',
      'frontend',
      'react',
      'reactnative',
      'redux',
      'typescript',
    )}`,
  },
  'Optimal file structure for React applications': {
    status: `The #ReactJS community still struggles with file structure. It’s a lot of work to refactor, so I’ve published some tips I’ve learned along the way. ${medium}optimal-file-structure-for-react-applications-f3e35ad0a145 ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'React Suspense with the Fetch API': {
    status: `When Dan Abramov tells you Suspense is incompatible with a Fetch API #ReactJS Hook, prove him wrong ${medium}react-suspense-with-the-fetch-api-a1b7369b0469 ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'reactnative',
    )}`,
  },
  'Replacing Redux with ReactN to reduce complexity and bundle size': {
    status: `I convert a bare-bones #ReactJS/#Redux application to ReactN to showcase simpler code and a 15% reduction in bundle size. ${medium}replacing-redux-with-reactn-to-reduce-complexity-and-bundle-size-aa7009cd1209 ${hashtags(
      ['ReactJS', 'Redux'],
      'frontend',
      'react',
      'redux',
    )}`,
  },
  'Variable length currying in JavaScript': {
    status: `How to write a curried function in #JavaScript that can take any number of parameters. ${medium}variable-length-currying-in-javascript-7f7bb7bdad8b ${hashtags(
      ['JavaScript'],
      'frontend',
      'js',
    )}`,
  },

  // NPM packages
  '@charlesstover/hsl2rgb': {
    status: `Work with colors? Simplify your code base by using hsl2rgb to easily convert HSL to RGB values. ${github}hsl2rgb-js ${hashtags(
      [],
      'frontend',
      'js',
    )}`,
  },
  '@charlesstover/quicksort': {
    status: `You can sort your arrays using Quicksort in #JavaScript. ${github}quicksort-js ${hashtags(
      ['JavaScript'],
      'frontend',
      'js',
      'typescript',
    )}`,
  },
  'deep-proxy-polyfill': {
    status: `Deeply nest #JavaScript Proxy’s get and set property listeners, even in browsers that don’t support Proxies! ${github}deep-proxy-polyfill ${hashtags(
      ['JavaScript'],
      'frontend',
      'js',
      'typescript',
    )}`,
  },
  delimiter: {
    status: `Do you give a fRiCk about an #OxfordComma? You can automatically delimit your arrays with the delimiter NPM package. ${github}delimiter ${hashtags(
      [],
      'frontend',
      'js',
    )}`,
  },
  'fetch-action-creator': {
    status: `fetch-action-creator reduces boilerplate and errors by automating the process of writing #Redux actions for Fetch API requests. ${github}fetch-action-creator ${hashtags(
      ['Redux'],
      'frontend',
      'react',
      'redux',
      'typescript',
    )}`,
  },
  'fetch-suspense': {
    status: `fetch-suspense is a #ReactJS hook that supports the Suspense Component! ${github}fetch-suspense ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  konami: {
    status: `↑↑↓↓←→←→🅱🅰, now as a #JavaScript event listener https://github.com/GamingMedley/konami.js ${hashtags(
      ['JavaScript'],
      'js',
    )}`,
  },
  'mssql-query-builder': {
    status: `mssql-query-builder dynamically builds Microsoft SQL Server queries in #JavaScript! ${github}mssql-query-builder ${hashtags(
      ['JavaScript'],
      'js',
      'mssql',
      'typescript',
    )}`,
  },
  'number-format-react': {
    status: `You can format numbers using Intl.NumberFormat with a #ReactJS component and #TypeScript support. ${github}number-format-react ${hashtags(
      ['ReactJS', 'TypeScript'],
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  'rainbow-gradient': {
    status: `Use rainbow-gradient to easily generate an array of smoothly-transitioned RGB values for any length, saturation, or lightness. ${github}rainbow-gradient ${hashtags(
      [],
      'frontend',
      'js',
    )}`,
  },
  'react-innertext': {
    status: `The react-innertext package lets you access the innerText of #ReactJS components as if they were DOM nodes. ${github}react-innertext ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'react-mui-tooltip': {
    status: `Use #MaterialDesign tooltips to enhance the #UIUX your #ReactJS application. ${github}react-mui-tooltip ${hashtags(
      ['MaterialDesign', 'ReactJS', 'UIUX'],
      'frontend',
      'materialdesign',
      'react',
      'uiux',
    )}`,
  },
  'react-multi-context': {
    status: `Simplify #ReactJS’s Context API by managing multiple contexts with a single component. ${github}react-multi-context ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'react-object-prop': {
    status: `Easily improve #ReactJS performance by caching your object props with the react-object-prop package! ${github}react-object-prop ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'react-pluralsight-score': {
    media: {
      'Pluralsight IQ graph': 'react-pluralsight-score.png',
    },
    status: `Show off your Pluralsight IQ on your #ReactJS portfolio. ${github}react-pluralsight-score ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'react-quotes-carousel': {
    media: {
      'react-quotes-carousel: a Quotes Carousel Component for ReactJS':
        'react-quotes-carousel.gif',
    },
    status: `react-quotes-carousel is a dependency-free quotes carousel Component for #ReactJS! ${github}react-quotes-carousel ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  'react-rainbow-text': {
    media: {
      'This is an example sentence that is the color of the rainbow.':
        'react-rainbow-text.png',
    },
    status: `Beautifully rainbowify your text with the <RainbowText> #ReactJS Component. ${github}react-rainbow-text ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
    )}`,
  },
  reactn: {
    media: {
      'ReactN logo': 'reactn.png',
    },
    status: `ReactN is a extension of #ReactJS that includes global state management. ${github}reactn ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  'reactn-devtools': {
    status: `ReactN DevTools allow you to view your ReactN global state with your browser’s own Redux DevTools extension. ${hashtags(
      [],
      'frontend',
      'react',
      'redux',
      'typescript',
    )}`,
  },
  'rn-webview': {
    status: `The rn-webview package fixes #ReactNative’s postMessage for iOS. ${github}react-native-web-view ${hashtags(
      ['ReactNative'],
      'reactnative',
    )}`,
  },
  'use-async-function': {
    status: `useAsyncFunction couples your asynchronous function state to your #ReactJS component. ${github}use-async-function ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  'use-clippy': {
    status: `useClippy lets you manage your users’ clipboards with a #ReactJS hook. ${github}use-clippy ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'typescript',
    )}`,
  },
  'use-dimensions': {
    status: `#ReactNative’s Dimensions API is now accessible with hooks. ${github}use-dimensions ${hashtags(
      ['ReactNative'],
      'reactnative',
      'typescript',
    )}`,
  },
  'use-force-update': {
    status: `useForceUpdate is a #ReactJS hook that forces your functional component to re-render! ${github}use-force-update ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'use-react-router': {
    status: `useReactRouter is a #ReactJS hook that provides pub-sub behavior for react-router! ${github}use-react-router ${hashtags(
      ['ReactJS'],
      'frontend',
      'react',
      'reactnative',
      'typescript',
    )}`,
  },
  'with-router': {
    status: `Do you wish that withRouter would rerender your Component when your route changes? Now it can! ${github}with-router ${hashtags(
      [],
      'frontend',
      'react',
    )}`,
  },

  // Projects
  'Spritesheet to GIF Converter': {
    status:
      'Convert a sprite sheet to an animated GIF with the click of a button. https://charlesstover.com/spritesheet2gif #GIFs',
  },

  // Ace Quisido
  'Ace Quisido': [
    {
      media: {
        '“Brittany Welsh” by Ace Quisido (@AceQuisido)': 'brittany-welsh.jpg',
      },
      status:
        'Interested in more than web development? Follow @AceQuisido for beautiful art and design topics.',
    },
    {
      media: {
        '“Girl in the Red Dress” by Ace Quisido (@AceQuisido)':
          'girl-in-the-red-dress.jpg',
      },
      status:
        'Interested in more than web development? Follow @AceQuisido for beautiful art and design topics.',
    },
  ],
};
