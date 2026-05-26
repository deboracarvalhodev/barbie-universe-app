import React, { useState } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Navbar from '../../components/Navbar';
import CardFilme from '../../components/CardFilme';

import { filmes } from '../../data/DadosFilmes.js';
import styles from '../../styles/Styles';

export default function FilmesScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filmesFiltrados = filmes.filter((item) => {
    if (!search) return true;

    return item.titulo.toLowerCase().includes(search.toLowerCase().trim());
  });

  const { width } = Dimensions.get('window');
  const CARD_WIDTH = width * 0.8;

  return (
    <View style={[styles.container, styles.filmesContainer]}>
      <View style={styles.filmesContent}>
        <Searchbar
          placeholder="Buscar filmes"
          onChangeText={setSearch}
          value={search}
          style={styles.filmesSearchbar}
          iconColor="#ff69b4"
          inputStyle={styles.filmesSearchbarInput}
        />

        <FlatList
          data={filmesFiltrados}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + 20}
          pagingEnabled={false}
          contentContainerStyle={styles.filmesListContent}
          renderItem={({ item }) => (
            <View style={[styles.filmesCardWrapper, { width: CARD_WIDTH }]}>
              <CardFilme
                filme={item}
                onPress={() =>
                  navigation.navigate('DetalhesFilme', { filme: item })
                }
              />
            </View>
          )}
        />
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
}