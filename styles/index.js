import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('screen');
export const cardStyles = StyleSheet.create({
  container: {
    width: '45%',
    height: height * 0.35,
    backgroundColor: '#1b1b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: '5%',
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  number: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    marginRight: '5%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  search: {
    backgroundColor: '#ebf3f5',
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    color: '#000',
  },
});

export const favoritesStyles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 20,
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginTop: 20,
  },
});
