import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Navbar from '../../components/Navbar';
import CardPersonagem from '../../components/CardPersonagem';

import { personagens } from '../../data/DadosPersonagens';
import styles from '../../styles/Styles';

export default function PersonagensScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const personagensFiltrados = personagens.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, styles.personagensContainer]}>
      <View style={styles.personagensContent}>
        <Searchbar
          placeholder="Buscar personagens"
          onChangeText={setSearch}
          value={search}
          style={styles.searchbar}
          iconColor="#ff69b4"
          inputStyle={styles.searchbarInput}
        />

        <FlatList
          data={personagensFiltrados}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardPersonagem
              personagem={item}
              onPress={() => navigation.navigate('', { item })}
            />
          )}
        />
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
}