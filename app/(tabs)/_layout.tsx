import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import Home from '.'; // your Home component
import Explore from './explore';
import Profile from './profile';
import Shorts from './Shorts';
import upload from './upload';

export default function SwipeTabsWithBottomBar() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home-outline' },
   {key: 'shorts' ,title: 'Shorts',icon: "play-circle-outline" },
    {key: 'uplaod', title: 'Uplaod', icon: 'cloud-upload'},
     { key: 'explore', title: 'Explore', icon: 'compass-outline' },
    { key: 'profile', title: 'Profile', icon: 'person-circle-outline' },
  ]);

  const renderScene = SceneMap({
    home: Home,
    explore: Explore,
    shorts: Shorts,
    profile: Profile,
    uplaod: upload,
    
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
      <View style={styles.bottomTab}>
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

 
            <Text style={{ color: i === index ? '#007AFF' : 'gray' }}>
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
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
