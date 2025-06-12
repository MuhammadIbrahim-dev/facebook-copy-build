import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function video() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>video</Text>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
