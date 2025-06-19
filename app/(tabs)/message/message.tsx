import { messages } from "@/components/Data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function message() {
  const ListHeaderComponent = () => (
    <View>
         <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between',
        backgroundColor: "#fff",
        padding: 5,
        height: 100,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "700" }}>Messages</Text>
      <Ionicons name="search" size={30} style={{paddingRight:10}}/>
    </View>
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: " #f0f2f5",
      padding: 5,
      height: 50,
      overflowX: 'scroll',
      width: '100%',
      }}>
      <Text style={{ paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:20,backgroundColor:'#66c0ed'}}>inbox</Text>
      <Text>Comunity</Text>
      <Text>Requests</Text>
      <Text>Archived</Text>
      <Text>Spam</Text>
      <Text>More</Text>
    </View>
    <View>
      <Text style={{ paddingLeft: 10, fontWeight: "800", fontSize: 20 }}>
        Recent Chats
      </Text>
      <Text style={{ paddingLeft: 10, fontWeight: "500", fontSize: 15 }}>
        All messages
      </Text>
    </View>
    </View>
 
  );
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              height: 120,
            }}
          >
            <Image
              source={{ uri: item.profileimage }}
              style={{ width: 70, height: 70, borderRadius: 70 }}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "column",
                paddingLeft: 10,
                width: "100%",
              }}
            >
              <Text style={{ paddingLeft: 10, fontWeight: "800" }}>
                {item.name}
                <Text style={{ fontWeight: "400", fontSize: 10 }}>
                  {date} {time}
                </Text>
              </Text>
              <Text
                style={{ paddingLeft: 10, fontWeight: "500", width: "100%" }}
              >
                {item.message}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
