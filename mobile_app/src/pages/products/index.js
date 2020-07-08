import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import ComicsService from '../../services/comicsService';
import Style from './style';
import CardComic from '../../components/CardComic';

const Products = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    loadComics();
  }, []);

  async function loadComics() {
    try {
      setComics(await ComicsService.loadComics());
    } catch (err) {
      console.log('falhar ao carregar comics');
      console.error(err);
    }
  }

  return (
    <View style={Style.container}>
      <FlatList
        style={Style.list}
        data={comics}
        renderItem={({ item, index }) => (
          <CardComic comic={item} index={index} />
        )}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  );
};

export default Products;
