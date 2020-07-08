import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/products';
import Detail from './pages/detail';
import colors from './theme/colors';

const PorductAndDetailRoute = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Marvel Comics',
          headerStyle: {
            backgroundColor: colors.backgroundBar,
          },
        }}
        name="products"
        component={Products}
      />
      <Stack.Screen
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: colors.backgroundBar,
          },
        }}
        name="detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
};

export default PorductAndDetailRoute;
