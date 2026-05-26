import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function CardFilme({ filme, onPress }) {
  return (
    <View style={styles.cardFilmeContainer}>
      <Image source={{ uri: filme.imagem }} style={styles.cardFilmeBanner} />

      <Text style={styles.cardFilmeTitulo}>{filme.titulo}</Text>

      <View style={styles.cardFilmeInfoContainer}>
        <View style={styles.cardFilmeInfoLeft}>
          <Text style={[styles.cardFilmeAno, { marginRight: 4 }]}>
            {filme.ano} •
          </Text>

          <AntDesign name="clock-circle" size={16} color="#444444" />

          <Text style={styles.cardFilmeDuracao}> {filme.duracao}</Text>
        </View>

        <View style={styles.cardFilmeInfoRight}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.cardFilmeAvaliacao}> {filme.avaliacao}/5</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.cardFilmeBtn} onPress={onPress}>
        <Text style={styles.cardFilmeBtnText}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}
