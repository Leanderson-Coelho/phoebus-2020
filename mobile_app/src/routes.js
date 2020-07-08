import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from './theme/colors';
import Products from './pages/products';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="green"
        initialRouteName="products"
        barStyle={{ backgroundColor: colors.backgroundBar }}>
        <Tab.Screen
          name="products"
          component={Products}
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
          name="cart"
          component={SettingsScreen}
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default Routes;
