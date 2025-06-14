import { Friends } from '@/components/Data';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FriendsScreen() {
  const Frindslistheader = () => {
    return (  
      
      <View style={{ padding: 10, backgroundColor: '#f8f8f8' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Friends</Text>
        <Ionicons
          name="search"
          size={30}
          color="black"
          style={{ position: 'absolute', right: 20, top: 10 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={styles.TopBartext}>34.Online</Text>
          <Text  style={styles.TopBartext}>Friends Requests</Text>
          <Text  style={styles.TopBartext}>Your Frinds</Text>
        </View>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.profileimage }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
    
          <Text style={styles.mutual}>Mutual friends: {item.muatualFriends}</Text>
          <View style={styles.actions}>
            <Text style={styles.actionText}>Add Friend</Text>
            <Text style={[styles.actionText1, { marginLeft: 20 }]}>Remove</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={Friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={Frindslistheader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  mutual: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
    cursor: 'pointer',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 6,
    cursor: 'pointer',
  
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 25,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 25,
    backgroundColor: '#347deb',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',
  },
  actionText1: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 25,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 25,
    backgroundColor: '#bac3d1',
    color: '#000',
    borderRadius: 5,
    cursor: 'pointer',
  },
  TopBartext: {
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    color: '#000',
    backgroundColor: '#bac3d1',
    textAlign: 'center',
    cursor: 'pointer',
  },
});
