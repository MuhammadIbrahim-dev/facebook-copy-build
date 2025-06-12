
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

    );
}

const styles = StyleSheet.create({

});
