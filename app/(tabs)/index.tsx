import Post from '@/components/Home/Posts';
import Status from '@/components/Home/status';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
  <SafeAreaView style={{ flex: 1 }}>
      <Post ListHeaderComponent={<Status />} />
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
