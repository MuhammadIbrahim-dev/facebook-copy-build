import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Home from '.'; // your Home component
import Friends from './friends';
import Message from './message';
import Notification from './notificaton';
import Video from './video';

export default function _layout() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home-outline' },
    { key: 'friends', title: 'Friends', icon: 'people-outline' },
   {key: 'message' ,title: 'Message',icon: "chatbubble-outline" },
    {key: 'video', title: 'Video', icon: 'tv-outline'},
    { key: 'notificaton', title: 'Notification', icon: 'notifications-outline' },
  ]);

  const renderScene = SceneMap({
    home: Home,
    friends: Friends,
    message : Message,
    notificaton : Notification,
    video: Video,
    
  });
  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null} // Hide top tab bar
      />
      <View style={styles.topTab}>
        <View></View>
        {routes.map((route, i) => (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
          >
                <Ionicons
              name={ route.icon}
              size={24}
              color={i === index ? '#007AFF' : 'gray'}
            />

 
            {/* <Text style={{ color: i === index ? '#007AFF' : 'gray' }}>
              {route.title}
            </Text> */}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topTab: {
    position:'absolute',
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
});
