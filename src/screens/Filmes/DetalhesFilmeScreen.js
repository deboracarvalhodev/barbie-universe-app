import React, { useState, useContext, useLayoutEffect } from 'react';
import { FavoritosContext } from '../../context/FavoritosContext';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import styles from '../../styles/Styles.js';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function DetalhesFilmeScreen({ navigation, route }) {
  const { toggleFavorito, isFavorito } = useContext(FavoritosContext);

  const filme = route?.params?.filme;
  const favorito = filme ? isFavorito(filme.id) : false;

  useLayoutEffect(() => {
    if (!filme) return;

    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleFavorito(filme)}>
          <Ionicons
            name={favorito ? 'heart' : 'heart-outline'}
            size={24}
            color="#FFF"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#FFF',
      headerShadowVisible: false,
    });
  }, [navigation, favorito, filme, toggleFavorito]);

  if (!filme) {
    return (
      <View>
        <Text>Erro ao carregar filme</Text>
      </View>
    );
  }

  return (
    <View style={styles.detalhesContainer}>
      <ImageBackground
        source={require('../../assets/images/background-detalhes-filme.jpg')}
        style={styles.detalhesBackground}
      >
        <View style={styles.detalhesOverlay}>
          <View style={styles.detalhesBannerContainer}>
            <Image
              source={{ uri: filme.imagem }}
              style={styles.detalhesBannerImage}
            />
          </View>

          <BlurView
            tint="dark"
            intensity={60}
            style={styles.detalhesBlurContainer}
          >
            <View>
              <Text style={styles.detalhesTitulo}>
                {filme.titulo}
              </Text>

              <View style={styles.detalhesInfoContainer}>
                <View style={styles.detalhesInfoLeft}>
                  <Text style={[styles.detalhesFilmeText, { marginRight: 4 }]}>
                    {filme.ano} • 
                  </Text>

                  <AntDesign name="clock-circle" size={16} color="#FFFFFF" />

                  <Text style={styles.detalhesFilmeText}>
                    {' '}{filme.duracao}
                  </Text>
                </View>

                <View style={styles.detalhesInfoRight}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.detalhesFilmeText}>
                    {' '}{filme.avaliacao}/5
                  </Text>
                </View>
              </View>

              <ScrollView
                style={styles.detalhesDescricaoScroll}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.detalhesDescricaoText}>
                  {filme.descricao}
                </Text>
              </ScrollView>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
}