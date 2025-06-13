import { videos } from "@/components/Data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
export default function video() {
    const renderItem = ({ item }) => (
      <View style={styles.card}>

        <View style={styles.header}>
          <Image source={{ uri: item.profileimage }} style={styles.avatar} resizeMode="contain" />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.postdate} · {item.posttime}</Text>
          </View>
        </View>
        <Text style={styles.text}>{item.posttext}</Text>
        {item.videolink && 
        <WebView
  source={{ uri: item.videolink }}  
  style={{ height: 200, width: '100%', borderRadius: 8 }}
  autoPlay={true}
/>}
              <View style={styles.stats}>
          <Text>{item.likes}</Text>
          <Text>{item.comments}</Text>
          <Text>{item.send}</Text>
          <Text>{item.shares}</Text>
        </View>
        <View style={styles.stats}>
          <Ionicons name="thumbs-up-outline" size={20} color="black" />
          <Ionicons name="chatbubble-outline" size={20} color="black" />
          <Ionicons name="send-outline" size={20} color="black" />
          <Ionicons name="share-outline" size={20} color="black" />
          
        </View>
      </View>
    );
  
  
  return (
<SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // ListHeaderComponent={ListHeaderComponent}
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
