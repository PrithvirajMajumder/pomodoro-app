import React, { Component } from "react";
import {
    Button, SafeAreaView, Text, View
} from "react-native";
import { connect } from 'react-redux';
import { actions as appActions } from "../../actions/AppActions";
import TheAlarmConfig from "../../components/TheAlarmConfig";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: 'hola',
        };
    }

    render() {

        return (
            <SafeAreaView >
                <TheAlarmConfig />
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.app.userDetails
    };
}


const mapDispatchToProps = dispatch => ({
    setUserDetails: (data) => dispatch(appActions.setUserDetails(data))
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


