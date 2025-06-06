import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function shorts() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Shorts</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
