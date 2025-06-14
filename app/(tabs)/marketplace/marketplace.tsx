import { marketplace } from '@/components/Data';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function MarketplaceScreen() {
  const marketlistheader = () => {
    return (
      <View style={{ padding: 10, backgroundColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Marketplace</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.itemimage }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price:${item.price} <Text style={{fontSize:10}}> Off {item.off}</Text></Text>
        
        <Text style={styles.price}>{item.discription}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={marketplace}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        ListHeaderComponent={marketlistheader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between', 
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
