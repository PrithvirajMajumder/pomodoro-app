import React, { Component } from "react";
import { connect } from 'react-redux';
import { actions as appActions } from "../../actions/AppActions";

import {
    Text,
    SafeAreaView,
    Button,
    View,
} from "react-native";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <Text>Home</Text>
                <Text>{this.props.user.name}</Text>
                <Text>{this.props.user.address}</Text>
                <View>
                    <Text>
                        Khanki pritam chadarmodg!
                    </Text>
                </View>

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


