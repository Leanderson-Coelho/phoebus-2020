import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ToastAndroid, ScrollView } from 'react-native';

import ComicsService from '../../services/comicsService';
import Style from './style';
import CardComic from '../../components/CardComic';

const Products = () => {
  const INITIAL_OFFSET = 10;
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offsetList, setOffsetList] = useState(INITIAL_OFFSET);
  const [loadingOffset, setLoadingOffset] = useState(false);

  useEffect(() => {
    loadComics();
  }, []);

  useEffect(() => {
    console.log(offsetList);
    if (offsetList > INITIAL_OFFSET) {
      loadComics();
    }
  }, [offsetList]);

  async function loadComics() {
    try {
      setLoading(true);
      setComics(await ComicsService.loadComics(offsetList));
      setLoading(false);
    } catch (err) {
      ToastAndroid.showWithGravity(
        'Falha ao atualizar dados.',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      setLoading(false);
      console.log('falhar ao carregar comics');
      console.error(err);
    }
  }

  function refresh() {
    setOffsetList(offsetList + 20);
  }

  return (
    <View style={Style.container}>
      <FlatList
        style={Style.list}
        data={comics}
        ListHeaderComponent={
          <Text style={Style.helpText}>
            Arrante para baixo para carregar mais...
          </Text>
        }
        onRefresh={refresh}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <CardComic comic={item} index={index} />
        )}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  );
};

export default Products;
