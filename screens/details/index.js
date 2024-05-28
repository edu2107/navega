import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';


export default function Home() {
  return (
        
    <View style={estilo.container}>

<Text> Essa é a tela do amora o hugo gostosão</Text>

    </View>


  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});