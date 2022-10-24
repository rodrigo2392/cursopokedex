import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {FavoritesContext} from '../context';
import {favoritesStyles as styles} from '../styles';

export default function Favorites() {
  const {favorites} = useContext(FavoritesContext);
  return (
    <View style={styles.container}>
      <Header title="Favoritos" description="Todos tus pokemon favoritos" />
      <FlatList
        data={favorites}
        renderItem={({item}) => <Card pokemon={item} />}
        numColumns={2}
      />
    </View>
  );
}
