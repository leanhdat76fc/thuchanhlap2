import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Routes from './src/routes'
import Routes2 from './src/2/routes'
import Routes3 from './src/3/routes'
import DrawerNavigator from './src/4/routes';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});