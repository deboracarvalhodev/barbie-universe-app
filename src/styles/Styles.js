import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: '#333',
  },

  // NAVBAR
  navbar: {
    position: 'absolute',
    bottom: 45,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#ff69b4',
    borderRadius: 35,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  navItem: {
    fontSize: 22,
  },
  navItemCenter: {
    fontSize: 28,
  },
  btnHomeContainer: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
  },
  btnHome: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    borderWidth: 4,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  btnHomeIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  // HEADER
  headerLeft: {
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'flex-start',
    marginLeft: 8,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff69b4',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#555',
  },

  headerRight: {
    flexDirection: 'row',
    marginRight: 15,
  },

  // TELA WELCOME
  welcomeContainer: {
    flex: 1,
  },

  welcomeBackground: {
    flex: 1,
  },

  welcomeOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },

  welcomeButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 18,
    margin: 20,
    bottom: 45,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  welcomeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },

  // TELA DA LISTA DE FILMES
  filmesContainer: {
    flex: 1,
  },

  filmesContent: {
    flex: 1,
  },

  filmesSearchbar: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    elevation: 3,
    margin: 10,
  },

  filmesSearchbarInput: {
    color: '#ff69b4',
  },

  filmesListContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  filmesCardWrapper: {
    marginLeft: 10,
  },

  // TELA DETALHES DO FILME
  detalhesContainer: {
    flex: 1,
  },

  detalhesBackground: {
    flex: 1,
  },

  detalhesOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  detalhesBannerContainer: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    zIndex: 2,
  },

  detalhesBannerImage: {
    width: 220,
    height: 300,
    borderRadius: 20,
  },

  detalhesBlurContainer: {
    flex: 1,
    marginTop: 350,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    overflow: 'hidden',
    padding: 20,
  },

  detalhesTitulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },

  detalhesInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },

  detalhesInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detalhesInfoRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  detalhesDescricaoScroll: {
    maxHeight: 220,
    marginTop: 20,
  },

  detalhesDescricaoText: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },

  detalhesFilmeText: {
    color: '#FFF',
  },

  // TELA DOS PERSONAGENS
  personagensContainer: {
    flex: 1,
  },

  personagensContent: {
    flex: 1,
    marginBottom: 120,
  },

  searchbar: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    elevation: 3,
    margin: 10,
  },

  searchbarInput: {
    color: '#ff69b4',
  },

  // CARD PERSONAGEM
  cardPersonagemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ff69b4',
    borderStyle: 'dashed',

    elevation: 3,
  },

  cardPersonagemImage: {
    width: 120,
    height: 100,
    borderRadius: 20,
    marginBottom: 5,
  },

  cardPersonagemNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff69b4',
  },

  cardPersonagemText: {
    fontSize: 14,
    color: '#777',
  },

  cardPersonagemBtn: {
    backgroundColor: '#ff69b4',
    paddingVertical: 6,
    paddingHorizontal: 15,
    width: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardPersonagemBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // CARD FILME
  cardFilmeContainer: {
    height: 530,
    backgroundColor: '#ffe4ec',
    borderRadius: 20,
    marginBottom: 50,
    alignItems: 'center',
    overflow: 'hidden',
  },

  cardFilmeBanner: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  cardFilmeTitulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
  },

  cardFilmeInfoContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },

  cardFilmeInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardFilmeInfoRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardFilmeAno: {
    fontSize: 14,
    color: '#444',
  },

  cardFilmeDuracao: {
    fontSize: 14,
    color: '#444',
  },

  cardFilmeAvaliacao: {
    fontSize: 14,
    marginLeft: 4,
    color: '#444',
  },

  cardFilmeBtn: {
    backgroundColor: '#ff69b4',
    width: '80%',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  cardFilmeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // CARD CURIOSIDADE
  cardCuriosidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,

    borderWidth: 1.5,
    borderColor: '#ff69b4',
    borderStyle: 'dashed',

    elevation: 3,
  },

  cardCuriosidadeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe4ec',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  cardCuriosidadeText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },

  // CARD FAVORITO
  cardFavoritoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  cardFavoritoHeartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,

    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe4ec',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardFavoritoImage: {
    width: 110,
    height: 150,
  },

  cardFavoritoContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',

    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ff69b4',
    borderStyle: 'dashed',
  },

  cardFavoritoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff69b4',
  },

  cardFavoritoInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardFavoritoDuracao: {
    fontSize: 13,
    color: '#444',
  },

  cardFavoritoAvaliacao: {
    marginLeft: 5,
    fontSize: 12,
    color: '#444',
  },

  cardFavoritoDescricao: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});
