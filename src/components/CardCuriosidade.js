import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/Styles';

export default function CardCuriosidade({ curiosidade }) {
  return (
    <View style={styles.cardCuriosidadeContainer}>
      
      <View style={styles.cardCuriosidadeIconContainer}>
        <Ionicons name={curiosidade.icone} size={20} color="#ff69b4" />
      </View>

      <Text style={styles.cardCuriosidadeText}>
        {curiosidade.texto}
      </Text>

    </View>
  );
}