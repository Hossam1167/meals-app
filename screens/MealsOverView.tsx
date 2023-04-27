import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MealsOverView = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverView Screen</Text>
    </View>
  );
};

export default MealsOverView;
