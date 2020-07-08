import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Style from './style';
import ComicService from '../../services/comicsService';
import CartService from '../../services/cartService';
import { CartItem } from './../../model/CartItem';

const Detail = ({ route }) => {
  const { id } = route.params;
  const [comic, setComic] = useState();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState('0');

  useEffect(() => {
    findComic();
  }, [id]);

  async function findComic() {
    try {
      setComic(await ComicService.getComicId(id));
    } catch (err) {
      console.log(err);
      ToastAndroid.showWithGravity(
        'Falha ao carregar Item :(',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.goBack();
    }
  }

  function addItemToCart() {
    try {
      if (quantity > 0) {
        CartService.addItem(
          new CartItem(
            comic.id,
            comic.title,
            comic.thumbnail,
            comic.price,
            quantity,
            quantity * comic.price,
          ),
        );
        ToastAndroid.showWithGravity(
          'Item adicionado ao carrinho',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Adicione uma quantidade válida!',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }
    } catch (err) {
      console.log(err);
      ToastAndroid.showWithGravity(
        'Falha ao adicionar item :(',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  }

  return (
    // container
    <ScrollView style={Style.container}>
      <View style={Style.boxImage}>
        <Image
          style={Style.image}
          source={{
            uri: comic?.thumbnail,
          }}
        />
      </View>
      <View style={Style.boxDetails}>
        <View>
          <Text style={Style.title}>{comic?.title}</Text>
          <Text style={Style.price}>Por apenas ${comic?.price}</Text>
          <Text style={Style.textDetail}>{comic?.description}</Text>
        </View>
      </View>
      <View style={Style.boxRowButtons}>
        <View style={Style.boxButtons}>
          <View style={Style.button}>
            <TextInput
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
              style={Style.input}
              placeholder="Quantidade"
              keyboardType="numeric"
            />
          </View>
          <View style={Style.button}>
            <Button onPress={addItemToCart} title="Adicionar ao carrinho" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
