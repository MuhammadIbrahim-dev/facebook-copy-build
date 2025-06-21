  import { getpost } from '@/app/firebase/getpost';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';




  export const Createbar = () => {


    
    const [File ,setFile] = React.useState(null);
    const  expofilepiker = async () => {
      let result = await DocumentPicker.getDocumentAsync({type:'*/*'})

      if (result.type === 'success') {
        setFile(result);
        console.log("File selected:", result);
      } else {
        console.log("File selection cancelled or failed");
      }
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 ,borderBottomColor: '#ccc', borderBottomWidth: 1}}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/ianfleming/600/400' }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <TextInput
        placeholder="What's on your mind?" style={{width:
  '70%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10}
        }/>
        <Ionicons name="camera-outline" size={24} color="black" />
        <Ionicons name="image-outline" onPress={expofilepiker} size={24} color="black" style={{marginLeft: 10}} />

      </View>
    );
  }
  type PostProps = {
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  };

    


  export default function Post({ ListHeaderComponent }: PostProps) {

    const [postitem ,setPostitem]=useState([])
useEffect(()=>{
  const postdata = async ()=>{
    try{
      const fetchdata = await getpost();
      setPostitem(fetchdata);
    } catch(error){
    console.log('error data feching data ',error);}
  
  }
  postdata()
},[])

    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={{ uri: item.profileimage }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.username}</Text>
            <Text style={styles.date}>{item.date} · {item.time}</Text>
          </View>
        </View>
        <Text style={styles.text}>{item.username}</Text>
        {item.postimage && <Image source={{ uri: item.postimage }} style={styles.postImage} />}
              <View style={styles.stats}>
          <Text>{item.likes}</Text>
          <Text>{item.comments}</Text>
          <Text>{item.send}</Text>
          <Text>{item.share}</Text>
        </View>
        <View style={styles.stats}>
          <FontAwesome5 name="thumbs-up" size={25} color="black" />
          <FontAwesome5 name="comment" size={25} color="black" />
          <FontAwesome5 name="whatsapp" size={25} c olor="black" />
          <FontAwesome5 name="share" size={25} color="black" />
        </View>
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={postitem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={ListHeaderComponent}
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
