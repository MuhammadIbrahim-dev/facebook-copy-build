import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import Friends from "./friends/friends";
import Home from "./index";
import Marketplace from "./marketplace/marketplace";
import Messanger from "./message/message";
import Notification from "./notification/notificaton";
import Watch from "./videos/video";

export default function _layout() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "video", title: "Watch", icon: "video" },
    { key: "friends", title: "Friends", icon: "user-friends" },
    { key: "marketplace", title: "Marketplace", icon: "store" },
    { key: "notification", title: "Notification", icon: "bell" },
    { key: "message", title: "Messanger", icon: "facebook-messenger" },
  ]);
  const renderScene = SceneMap({
    home: Home,
    video: Watch,
    friends: Friends,
    marketplace: Marketplace,
    notification: Notification,
    message: Messanger,
  });

  return (
    <View style={styles.container}>
      {/* Title bar (only on Home) */}
      {index === 0 && (
        <View style={styles.tittlebar}>
          <Image
            source={require("../../assets/images/facebooklogo.png")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 20 }}>
              <AntDesign name="pluscircle" size={25} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 20 }}>
              <FontAwesome5 name="search" size={25} solid />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <FontAwesome5 name="bars" size={25} solid />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Top Tab Bar */}
      <View style={styles.topTab}>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <FontAwesome5
              solid
              name={route.icon}
              size={24}
              color={i === index ? "#007AFF" : "gray"}
            />
          </TouchableOpacity>
        ))}
      </View>

    
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null} 
        style={styles.tabView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, 
    backgroundColor: "#fff",
  },
  tittlebar: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topTab: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  tabItem: {
    alignItems: "center",
  },
  tabView: {
    flex: 1,
  },
});
