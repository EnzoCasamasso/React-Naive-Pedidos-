import { StyleSheet, TextInput } from 'react-native';

import { View } from '../components/Themed';

import Chat from '../components/ChatScreen';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Chat/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input : {
    backgroundColor: 'rgb(40, 42, 54)',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
