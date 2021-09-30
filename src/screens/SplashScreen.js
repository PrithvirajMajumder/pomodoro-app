import React, { Component } from "react";

import {
    Text,
    SafeAreaView,
} from "react-native";

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        var that = this;
        setTimeout(() => {
            that.props.navigation.navigate('Auth');
        }, 2000);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                    <Text>SplashScreen</Text>

            </SafeAreaView>
        );
    }
}



