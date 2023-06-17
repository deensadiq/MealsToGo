import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Search from './src/features/Search';
import RestaurantList from './src/features/RestaurantList';
import { spacing } from './src/utils/sizes';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
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
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  search: {},
  list: {
    flex: 1,
  }
});
