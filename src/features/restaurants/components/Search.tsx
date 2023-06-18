import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/sizes";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm
  },
  searchBar: {
    textAlignVertical: "center"
  }
});
