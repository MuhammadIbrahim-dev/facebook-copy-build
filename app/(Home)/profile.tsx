import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>profile</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
