import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(filme) {
    const existe = favoritos.find((f) => f.id === filme.id);

    if (existe) {
      setFavoritos(favoritos.filter((f) => f.id !== filme.id));
    } else {
      setFavoritos([...favoritos, filme]);
    }
  }

  function isFavorito(id) {
    return favoritos.some((f) => f.id === id);
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
