import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductDetail from './nestedRoute';
import Cart from './pages/cart';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="green" initialRouteName="products">
        <Tab.Screen
          name="products"
          component={ProductDetail}
          options={{
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="book-open-page-variant"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ddefora"
          component={Cart}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart-minus"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
