import React, {useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import {homeStyles as styles} from '../styles';
import {useGetAllPokemon, useGetPokemon} from '../services';
import {GET_ALL_URL} from '../constants';

export default function Home() {
  const [tmp, setTmp] = useState('');
  const [search, setSearch] = useState(null);
  const {
    data: searchResult,
    isLoading: searchLoading,
    isFetching: searchFetching,
    error: searchError,
  } = useGetPokemon(search);

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    refetch,
    error,
  } = useGetAllPokemon();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title="Pokédex"
        description="Busca un pokémon usando su nombre o su número"
        tmp={tmp}
        setTmp={setTmp}
        setSearch={setSearch}
        showSearch
      />

      {!search && (
        <FlatList
          data={data?.pages.map(page => page.results).flat()}
          renderItem={({item}) => <Card pokemon={item} />}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          refreshControl={
            <RefreshControl refreshing={isLoading || isFetching} size="large" />
          }
          refreshing={isLoading || isFetching}
          onRefresh={refetch}
        />
      )}
      {searchResult && (
        <Card pokemon={{url: `${GET_ALL_URL}/${searchResult.id}`}} />
      )}
      {(searchLoading || searchFetching || isLoading || isFetching) && (
        <Text>Buscando...</Text>
      )}
      {searchError && <Text>Pokémon no encontrado...</Text>}
      {error && <Text>Ha ocurrido un error</Text>}
    </View>
  );
}
