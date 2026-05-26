import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Filmes')}>
        <MaterialCommunityIcons name="movie-open" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Personagens')}>
        <Ionicons name="person" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.btnHome}>
          <Image source={require('../assets/icons/barbie-logo-icon.png')} style={styles.btnHomeIcon}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Curiosidades')}>
        <Ionicons name="sparkles" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
        <Ionicons name="heart" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
