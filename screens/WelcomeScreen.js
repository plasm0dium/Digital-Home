import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Platform} from "react-native";
import homeSuppliesImg from "../assets/images/home-supplies.png";

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Image style={styles.suppliesImg} source={homeSuppliesImg}></Image>
          <Text style={styles.welcomeText}>Welcome to Your Digital House</Text>
          <Text style={styles.descText}>An app designed to know your household inside and out</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(248, 205, 72, .90)",
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    })
  },
  carouselContainer: {
    top: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 15,
    overflow: "hidden",
    opacity: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 600,
    width: 300,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 6, width: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      }
    })
  },
  welcomeText: {
    color: "#488ee2",
    fontSize: 35,
    textAlign: 'center'
  },
  descText: {
    color: '#989998',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20
  },
  suppliesImg: {
    top: -38,
    width: 300,
    height: 350
  }
})