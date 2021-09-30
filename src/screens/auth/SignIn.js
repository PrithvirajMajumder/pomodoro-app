import React, { Component } from "react";

import {
    Text,
    SafeAreaView,
    Button
} from "react-native";
import { connect } from 'react-redux';
import { actions as appActions } from "../../actions/AppActions";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    _onPressButton() {
        this.props.setUserDetails({
            name: "Subhashis Routh",
            eligiblity: "nothing",
            address: "Garia"
        });
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





const mapDispatchToProps = dispatch => ({
    setUserDetails: (data) => dispatch(appActions.setUserDetails(data))
});



export default connect(
    null,
    mapDispatchToProps
)(SignIn);
