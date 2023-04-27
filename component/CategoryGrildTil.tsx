import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContanier: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

interface categoryGridTilProps {
  title: string;
  color: string;
  onPressFunction: () => void;
}
const CategoryGrildTil = ({
  title,
  color,
  onPressFunction,
}: categoryGridTilProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressFunction}
      >
        <View style={[styles.innerContanier, { backgroundColor: color }]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrildTil;
