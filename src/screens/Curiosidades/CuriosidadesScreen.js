import React from 'react';
import { View, FlatList, Text } from 'react-native';

import Navbar from '../../components/Navbar';
import CardCuriosidade from '../../components/CardCuriosidade';

import { curiosidades } from '../../data/DadosCuriosidades';

import styles from '../../styles/Styles';

export default function CuriosidadesScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <FlatList
        data={curiosidades}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120, 
        }}
        renderItem={({ item }) => (
          <CardCuriosidade curiosidade={item} />
        )}
      />

      <Navbar navigation={navigation} />

    </View>
  );
}