import Status from '@/components/Home/status';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';

export default function Home() {
  return (
<SafeAreaProvider>
  <SafeAreaView>
    <View>
      <Status/>
    </View>
  </SafeAreaView>
</SafeAreaProvider>

    );
}

const styles = StyleSheet.create({

});
