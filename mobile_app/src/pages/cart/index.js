import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import Style from './style';
import CartService from '../../services/cartService';

const Cart = () => {
  const [cartItens, setCartItens] = useState();

  useEffect(() => {
    loadAllItens();
  }, []);

  async function loadAllItens() {
    // setCartItens(await CartService.loadAll());
    const itens = await CartService.loadAll();
    console.log(itens);
    setCartItens(itens);
  }

  function remove() {
    CartService.removeAll();
  }

  async function update() {
    setCartItens(await CartService.loadAll());
  }

  return (
    <View style={Style.container}>
      <Text>Cart!</Text>
      <View style={Style.button}>
        <Button title="remove all" onPress={remove} />
      </View>
      <View style={Style.button}>
        <Button title="udpate list view" onPress={update} />
      </View>
      <FlatList
        data={cartItens}
        renderItem={({ item }) => (
          <Text>
            {item.title +
              ' quantity ' +
              item.quantity +
              ' subtotal ' +
              item.subtotal}
          </Text>
        )}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  );
};

export default Cart;
