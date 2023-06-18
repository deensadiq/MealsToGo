import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";

const RestaurantList = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};
export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue,
    padding: spacing.sm
  }
});
