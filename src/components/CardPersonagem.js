import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

export default function CardPersonagem({ personagem, onPress }) {
  return (
    <View style={styles.cardPersonagemContainer}>

      <Image 
        source={{ uri: personagem.imagem }}
        style={styles.cardPersonagemImage}
      />

      <Text style={styles.cardPersonagemNome}>
        {personagem.nome}
      </Text>

      <Text style={styles.cardPersonagemText}>
        {personagem.filme}
      </Text>

      <Text style={styles.cardPersonagemText}>
        {personagem.ano}
      </Text>

      <TouchableOpacity 
        style={styles.cardPersonagemBtn}
        onPress={onPress}
      >
        <Text style={styles.cardPersonagemBtnText}>Ver mais</Text>
      </TouchableOpacity>

    </View>
  );
}