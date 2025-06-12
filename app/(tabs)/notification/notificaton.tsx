import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function notification() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>notifications</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
