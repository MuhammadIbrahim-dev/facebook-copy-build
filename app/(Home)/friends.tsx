import { StyleSheet, Text } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function friends() {
  return (
 <SafeAreaProvider>
  <SafeAreaView>
    <Text>Friends</Text>
  </SafeAreaView>
 </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});
