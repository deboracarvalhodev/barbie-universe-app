import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FavoritosProvider } from './src/context/FavoritosContext';

import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import FilmesScreen from './src/screens/Filmes/FilmesScreen';
import DetalhesFilmeScreen from './src/screens/Filmes/DetalhesFilmeScreen';
import PersonagensScreen from './src/screens/Personagens/PersonagensScreen';
import CuriosidadesScreen from './src/screens/Curiosidades/CuriosidadesScreen';
import FavoritosScreen from './src/screens/Favoritos/FavoritosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#ff69b4',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name="Filmes"
            component={FilmesScreen}
            options={{ title: 'Filmes e séries', headerTitleAlign: 'center' }}
          />

          <Stack.Screen
            name="DetalhesFilme"
            component={DetalhesFilmeScreen}
            options={{ title: 'Detalhes do filme', headerTitleAlign: 'center' }}
          />

          <Stack.Screen
            name="Personagens"
            component={PersonagensScreen}
            options={{ title: 'Personagens', headerTitleAlign: 'center' }}
          />

          <Stack.Screen
            name="Curiosidades"
            component={CuriosidadesScreen}
            options={{ title: 'Curiosidades', headerTitleAlign: 'center' }}
          />

          <Stack.Screen
            name="Favoritos"
            component={FavoritosScreen}
            options={{ title: 'Favoritos', headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}
