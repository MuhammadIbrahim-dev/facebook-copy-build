import React from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Posts } from '../Data'; // Adjust the path as needed

export default function Post() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.profileimage }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.postdate} · {item.posttime}</Text>
        </View>
      </View>
      <Text style={styles.text}>{item.posttext}</Text>
      {item.postimage && <Image source={{ uri: item.postimage }} style={styles.postImage} />}
      {item.postlink && (
        <Text style={styles.link} onPress={() => Linking.openURL(item.postlink)}>
          {item.postlink}
        </Text>
      )}
      <View style={styles.stats}>
        <Text>❤️ {item.likes}</Text>
        <Text>💬 {item.comments}</Text>
        <Text>🔄 {item.shares}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  text: {
    marginVertical: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginVertical: 5,
  },
  link: {
    color: 'blue',
    marginBottom: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
