import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Styles';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground
        source={require('../../assets/images/background-welcome.jpg')}
        style={styles.welcomeBackground}
        resizeMode="cover"
      >
        <View style={styles.welcomeOverlay}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.welcomeButton}
          >
            <Text style={styles.welcomeButtonText}>
              Hi, Barbie!
            </Text>

            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}