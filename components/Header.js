import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {headerStyles as styles} from '../styles';

export default function Header({
  showSearch,
  tmp,
  setTmp,
  setSearch,
  title,
  description,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {showSearch && (
        <TextInput
          placeholder="Busca un pokémon por nombre o número..."
          style={styles.search}
          value={tmp}
          onChangeText={text => setTmp(text)}
          onEndEditing={() => setSearch(tmp)}
        />
      )}
    </View>
  );
}
