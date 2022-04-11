/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './navigation/App';

// import {
//      Welcome,
//      Login,
//      Register,
//      FoodList,
//      ProductGridView,
//      Settings
// } from './screens/';
// import UITab from './navigation/UITab';

AppRegistry.registerComponent(appName,
     () => () => <App />);
