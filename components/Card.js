import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FavoritesContext} from '../context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {cardStyles as styles} from '../styles';
import {colors} from '../constants';
import {useGetDetails} from '../services';

export default function Card({pokemon}) {
  const {favorites, addFavorite} = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const {data, isLoading, error} = useGetDetails(pokemon);

  useEffect(() => {
    async function getStatus() {
      const find = favorites.filter(elm => elm.name === pokemon.name);
      if (find.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
    getStatus();
  }, [favorites, pokemon.name]);

  if (error) {
    <View style={styles.container}>
      <Text>Ha ocurrido un error</Text>
    </View>;
  }

  if (isLoading) {
    <View style={styles.container}>
      <Text>Cargando...</Text>
    </View>;
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors[data?.types[0]?.type?.name]},
      ]}>
      <TouchableOpacity onPress={() => addFavorite(pokemon)}>
        {isFavorite && <Icon name="heart" size={40} color="#e04c50" />}
        {!isFavorite && <Icon name="heart-outline" size={40} color="#FFF" />}
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: data?.sprites?.other['official-artwork']?.front_default,
        }}
      />
      <Text style={styles.name}>{data?.name}</Text>
      <Text style={styles.number}>
        {data && (data?.id).toString().padStart(3, '0')}
      </Text>
    </View>
  );
}
