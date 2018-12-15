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
firebase.initializeApp(fireBaseConfig);

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.fbAppId = "288424861584897";
        this.googleConfig = {
            scopes: ["profile", "email"],
            iosClientId: "554453024024-61knohf2tjhtafqm798rhqj5oqq2c2n2.apps.googleusercontent.com"
        }
    }

    _handleFBLogin = async () => {
        try {
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
                this.fbAppId,
                { permissions: ['public_profile'] }
              );
            
            if (type === "success") {
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
    
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .catch(err => console.log("Log in error with firebase"));
            }
        } catch (err) {
            return {error: true};
        }
    }

    _handleGMLogin = async () => {
        try {
            const result = await Expo.Google.logInAsync(this.googleConfig);

            if (result.type === "success") {
                return result.accessToken; 
            } else {
                return {cancelled: true};
            }
        } catch (err) {
            return {error: true};
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.header}
                        title="Facebook"
                        color="#841584"
                        onPress={this._handleFBLogin}/>
                    <Button
                        style={styles.header}
                        title="Google"
                        color="#841584"
                        onPress={this._handleGMLogin}/>
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
