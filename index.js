import { AppRegistry } from 'react-native';
import App from './src/config/routes';
import { name as appName } from './app.json';


/***
 * FOR ENABLE TO VIEWING OF NETWOTKING REQUEST FORM CHROME DEV TOOLS
 * COMMENT BELOW CODE, IN CASE OF PRODUCTION
 */
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//     GLOBAL.originalXMLHttpRequest :
//     GLOBAL.XMLHttpRequest;

// global._fetch = fetch;
// global.fetch = function (uri, options, ...args) {
//   return global._fetch(uri, options, ...args).then((response) => {
//     console.log('Fetch', { request: { uri, options, ...args }, response });
//     return response;
//   });
// };


AppRegistry.registerComponent(appName, () => App);
