import React, { Component } from "react";
import {
    Button, SafeAreaView, Text
} from "react-native";
import { connect } from 'react-redux';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    _onPressButton() {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <Text>Login</Text>

                <Button
                    onPress={this._onPressButton.bind(this)}
                    title="Go to Home"
                />

            </SafeAreaView>
        );
    }
}

export default connect(
    null,
)(SignIn);
