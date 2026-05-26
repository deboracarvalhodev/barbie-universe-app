import React, { useLayoutEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import styles from '../../styles/Styles';

import Navbar from '../../components/Navbar';

import { Ionicons } from '@expo/vector-icons';

import { filmes } from '../../data/DadosFilmes';
import { personagens } from '../../data/DadosPersonagens';
import { curiosidades } from '../../data/DadosCuriosidades';

import CardFilme from '../../components/CardFilme';
import CardPersonagem from '../../components/CardPersonagem';
import CardCuriosidade from '../../components/CardCuriosidade';

export default function HomeScreen({ navigation }) {
  const nameUser = 'Débora';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderColor: '#ff69b4',
              borderWidth: 1,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      ),

      headerTitle: () => (
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hi, {nameUser}!</Text>

          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#ff69b4" />
            <Text style={styles.locationText}>São Paulo, Brasil</Text>
          </View>
        </View>
      ),

      headerRight: () => (
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={24}
              color="#ff69b4"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#ff69b4" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 20 }} />

        <View
          style={{
            margin: 16,
            top: 40,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../assets/images/banner-home.jpg')}
            style={{
              width: '100%',
              height: 180,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={{ height: 20 }} />

        <Text style={styles.sectionTitle}>Você sabia?</Text>

        <CardCuriosidade curiosidade={curiosidades[0]} />

        <Text style={styles.sectionTitle}>Filme em destaque</Text>

        <CardFilme filme={filmes[0]} onPress={() => navigation.navigate('DetalhesFilme', { filme: filmes[0] })} />

        <Text style={styles.sectionTitle}>Personagens</Text>

        <FlatList
          data={personagens.slice(0, 6)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardPersonagem personagem={item} />}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
}
