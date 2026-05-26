import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from '../../styles/Styles';
import Navbar from '../../components/Navbar';

import { FontAwesome6  } from '@expo/vector-icons';

import { FavoritosContext } from '../../context/FavoritosContext';
import CardFavorito from '../../components/CardFavorito';

export default function FavoritosScreen({ navigation }) {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      {favoritos.length === 0 ? (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#444', marginTop: 30 }}>
            Você não favoritou nenhum filme ainda
          </Text>

          <FontAwesome6
            name='heart-crack'
            size={24}
            color="#444"
          />
        </View>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardFavorito
              filme={item}
              onPress={() =>
                navigation.navigate('DetalhesFilme', { filme: item })
              }
            />
          )}
        />
      )}

      <Navbar navigation={navigation} />
    </View>
  );
}
