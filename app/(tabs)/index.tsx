<<<<<<< HEAD
import { StyleSheet, Text, } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
<SafeAreaProvider>
  <SafeAreaView>
    <Text>ibrahim</Text>
    <Text>ibrahim</Text>
  </SafeAreaView>
</SafeAreaProvider>
=======

import Post from '@/components/Home/Posts';
import Status from '@/components/Home/status';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
  <SafeAreaView>
    <View>
      <Status/>
      <Post/>
    </View>
  </SafeAreaView>
>>>>>>> ff14daf62092b4cf70eea46ddd1c04cfe2df0af5

    );
}

const styles = StyleSheet.create({

});
