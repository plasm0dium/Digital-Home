import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import firebase from "firebase";
import Expo from "expo";

const fireBaseConfig = {
    apiKey: "AIzaSyCLTDMAZ3adFFAM5KMNCYN83eszTj1QkuM",
    authDomain: "my-digital-home-f8104.firebaseapp.com",
    databaseURL: "https://my-digital-home-f8104.firebaseio.com",
    storageBucket: "my-digital-home-f8104.appspot.com"
}
firebase.initializeApp()

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.appId = "2241946426017234";
    }

    _handlePress = async () => {
        const response = await Expo.Facebook.logInWithReadPermissionsAsync(
            "288424861584897",
            { permissions: ['public_profile'] }
          );
        return response;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.header}
                        title="FB"
                        color="#841584"
                        onPress={this._handlePress}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        margin: 20
    },
    header: {
        color: "#488ee2",
        fontSize: 35,
        textAlign: "center"
    }
});
