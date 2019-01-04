import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import logo from "./logo.png";
import TestComponent from "./TestComponent";
import Icon from "react-native-vector-icons/FontAwesome";

import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" }
    ]
  };

  render() {
    // <View style={styles.container}>
    //   <Animated.Image source={logo} style={[styles.logo]} />
    //   <Text style={styles.title}>Create React Native Web App</Text>
    //   <Text>Open up src/App.tsx to start working on your app!</Text>
    //   <Text>Changes you make will automatically reload.</Text>
    //   {Platform.OS !== "web" && (
    //     <Text>Shake your phone to open the developer menus.</Text>
    //   )}
    //   <TouchableHighlight style={styles.button} underlayColor={"#0A84D0"}>
    //     <Text style={styles.buttonText}>Rotate Logo</Text>
    //   </TouchableHighlight>
    //   <Icon.Button name="facebook" backgroundColor="#3b5998">
    //     Login with Facebook
    //   </Icon.Button>
    //   <TestComponent />
    // </View>
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute
        })}
        onIndexChange={(index: number) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: "#1B95E0"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  scene: {
    flex: 1,
    height: Dimensions.get("screen").height
  }
});

let hotWrapper = (module: any) => (App: any) => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
