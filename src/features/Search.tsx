import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../utils/sizes';
import { color } from '../utils/colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.searchBar}>Search</Text>
    </View>
  );
}
export default Search;

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    backgroundColor: color.green,
  },
  searchBar: {
    height: spacing.xl,
    textAlignVertical: "center",
  },
});