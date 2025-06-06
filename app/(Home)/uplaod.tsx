import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function uplaod() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>uplaod</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
