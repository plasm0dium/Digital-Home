import React, {Component} from "react";
import {
    AsyncStorage,
    ActivityIndicator,
    StyleSheet,
    View
} from "react-native";

const HAS_LAUNCHED = "hasLaunched";

export default class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._isFirstTimeUser();
    }

    _isFirstTimeUser = async () => {
        const isFirstTimeUser = await AsyncStorage.getItem(HAS_LAUNCHED);
        console.log("this is firstTimeUser", isFirstTimeUser);
        this.props.navigation.navigate(!isFirstTimeUser ? "Login" : "Main");
    }

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="small" color="#008080" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })