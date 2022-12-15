import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  onButtonPress = () => {
    this.setState({ message: "love yourself" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center"
  }
});
