import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../styles/Styles';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { FavoritosContext } from '../context/FavoritosContext';

export default function CardFavorito({ filme, onPress }) {
  const { toggleFavorito } = useContext(FavoritosContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={styles.cardFavoritoContainer}
    >
      <TouchableOpacity
        onPress={() => toggleFavorito(filme)}
        style={styles.cardFavoritoHeartBtn}
      >
        <Ionicons name="heart" size={18} color="#ff69b4" />
      </TouchableOpacity>

      <Image
        source={{ uri: filme.imagem }}
        style={styles.cardFavoritoImage}
      />

      <View style={styles.cardFavoritoContent}>
        
        <Text
          style={styles.cardFavoritoTitulo}
          numberOfLines={2}
        >
          {filme.titulo}
        </Text>

        <View style={styles.cardFavoritoInfoRow}>
          <Text style={styles.cardFilmeAno}>{filme.ano} | </Text>
          <AntDesign name="clock-circle" size={16} color="#444444" />
          <Text style={styles.cardFavoritoDuracao}>
            {' '}{filme.duracao}
          </Text>
        </View>

        <View style={styles.cardFavoritoInfoRow}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.cardFavoritoAvaliacao}>
            {filme.avaliacao}/5
          </Text>
        </View>

        <Text
          style={styles.cardFavoritoDescricao}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {filme.descricao}
        </Text>

      </View>
    </TouchableOpacity>
  );
}