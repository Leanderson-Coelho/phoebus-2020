import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, ToastAndroid } from 'react-native';

import Style from './style';
import CartService from '../../services/cartService';
import CardCartItem from '../../components/CardCartItem';
import HeaderList from '../../components/HeaderList';

const Cart = () => {
  const [cartItens, setCartItens] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllItens();
  }, []);

  async function loadAllItens() {
    setCartItens(await CartService.loadAll());
  }

  async function remove() {
    try {
      await CartService.removeAll();
      update();
      ToastAndroid.showWithGravity(
        'Carrinho limpo com sucesso!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } catch (err) {
      ToastAndroid.showWithGravity(
        'Falha ao limpar carrinho!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  }

  async function update() {
    try {
      setLoading(true);
      setCartItens(await CartService.loadAll());
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      ToastAndroid.showWithGravity(
        'Falha ao atualizar carrinho!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  }

  return (
    <View style={Style.container}>
      <FlatList
        ListHeaderComponent={
          <HeaderList
            loading={loading}
            text="Arraste para baixo para atualizar o carrinho..."
            textStyle={Style.helpText}
          />
        }
        onRefresh={update}
        refreshing={loading}
        data={cartItens}
        renderItem={({ item }) => <CardCartItem item={item} />}
        keyExtractor={(item) => item.id + ''}
      />
      <View style={Style.button}>
        <Button title="Apagar Carrinho" onPress={remove} />
      </View>
    </View>
  );
};

export default Cart;
