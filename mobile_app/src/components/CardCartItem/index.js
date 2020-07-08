import React from 'react';
import { View, Text } from 'react-native';

import Style from './style';

const CardCartItem = (props) => {
  const { item } = props;

  return (
    <View style={Style.container}>
      <Text style={[Style.title, Style.textColor]}>{item.title}</Text>
      <View style={Style.infoGroup}>
        <Text style={Style.textColor}>Por ${item.price.toFixed(2)}</Text>
        <Text style={Style.textColor}>
          Subtotal: {item.subtotal.toFixed(2)}
        </Text>
      </View>
      <View style={Style.infoGroup}>
        <Text style={Style.textColor}>Quantidade: {item.quantity}</Text>
        <Text style={Style.textColor}>Código: {item.id}</Text>
      </View>
    </View>
  );
};

export default CardCartItem;
