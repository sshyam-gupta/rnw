import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import SafeAreaView from "react-native-safe-area-view";
const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    width: Dimensions.get("window").width
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  }
});
export default class TestComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </SafeAreaView>
    );
  }
}
