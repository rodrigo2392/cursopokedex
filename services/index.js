import {GET_ALL_URL} from '../constants';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';

const getAllPokemon = async ({pageParam = 1}) => {
  const res = await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`);
  return res.json();
};

const getPokemon = async ({queryKey}) => {
  const res = await fetch(`${GET_ALL_URL}/${queryKey[1]}`);
  return res.json();
};

const getDetails = async ({queryKey}) => {
  const res = await fetch(queryKey[1]);
  return res.json();
};

export function useGetDetails(pokemon) {
  return useQuery(['getPokemon', pokemon?.url], getDetails);
}

export function useGetPokemon(search) {
  return useQuery(['getPokemon', search], getPokemon, {
    enabled: !!search,
  });
}

export function useGetAllPokemon() {
  return useInfiniteQuery(['getAllPokemon'], getAllPokemon, {
    getNextPageParam: lastPage => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
      return lastPage;
    },
  });
}
