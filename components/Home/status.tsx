import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

const data = [
  { id: '1' ,
    profileimage: "https://picsum.photos/seed/ianfleming/600/400",
    itemimage:'https://picsum.photos/seed/island/600/400',
  },
  { id: '2' ,
    profileimage: "https://picsum.photos/seed/oscarwilde/600/400",
    itemimage: "https://picsum.photos/seed/volcano/600/400",
  },
  { id: '3' ,
    profileimage: "https://picsum.photos/seed/peterparker/600/400",
    itemimage: "https://picsum.photos/seed/bridge/600/400",
  },
  { id: '4' ,
    profileimage:'https://picsum.photos/seed/tarantinoquentin/600/400',
      itemimage:'https://picsum.photos/seed/cityscape2/600/400',
  },
  { id: '5',
     profileimage:'https://picsum.photos/seed/rachelgreen/600/400',
      itemimage:'https://picsum.photos/seed/waterfall/600/400',
   },
   {
    id: '6',
       profileimage: "https://picsum.photos/seed/samwinchester/600/400",
    itemimage: "https://picsum.photos/seed/desert2/600/400",
   }
  
];

const Status = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Image source={{uri: item.itemimage}} resizeMode='cover' style={{width:'100%', height:190, borderRadius: 10}}/>
            <Image source={{uri: item.profileimage}} resizeMode='cover' style={{width:50,height:50, borderRadius:50, borderWidth:2, borderColor:'#fff', position:'absolute', top: 10, left: 10}}/>
          </View>
        )}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  list: {
    justifyContent: 'space-between',
  },
  box: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 190,
    backgroundColor: '#2E8B57', // SeaGreen color
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
