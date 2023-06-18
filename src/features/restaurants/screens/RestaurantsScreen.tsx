import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import Search from "../components/Search";
import RestaurantList from "../components/RestaurantList";

const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.list}>
          <RestaurantList />
        </View>
      </SafeAreaView>
    </>
  );
};
export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  search: {},
  list: {
    flex: 1
  }
});
