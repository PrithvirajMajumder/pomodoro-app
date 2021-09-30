import React, { Component } from "react";

import { createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation-stack';


import { Provider } from 'react-redux';

// import {
//     createReduxContainer,
//     createReactNavigationReduxMiddleware,
//     createNavigationReducer,
//   } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import storageMiddleware, { actions as storageActions } from '../middleware/storageMiddleware';


import { reducer as app } from '../reducers/AppReducer';

import AppContainer from "../screens/AppContainer";
import SplashScreen from "../screens/SplashScreen";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/SignIn";
import Home from "../screens/app/Home";



const logger = createLogger({
    collapsed: true,
    level: 'info',
});

const reducers = combineReducers({ app });
const rootReducer = (state, action) => {
    return reducers(state, action);
}

const middleware = applyMiddleware(thunk, storageMiddleware, logger);
const store = createStore(rootReducer, middleware);
store.dispatch(storageActions.appLoad());


console.disableYellowBox = true;

const SpashStack = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen
        },
    },
    {
        headerMode: "none",
        initialRouteName: 'SplashScreen'
    }
);

const AuthStack = createStackNavigator({
    SignUp: {
        screen: SignUp
    },
    SignIn: {
        screen: SignIn
    }
},
    {
        headerMode: "none",
        initialRouteName: 'SignIn'
    }
);


const AppStack = createStackNavigator({
    Home: {
        screen: Home
    }
},
    {
        headerMode: "none",
        initialRouteName: 'Home'
    }
);



let Navigation = createAppContainer(createSwitchNavigator(
    {
        Splash: SpashStack,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Splash'
    }
));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}