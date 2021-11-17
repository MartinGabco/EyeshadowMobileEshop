import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';

import ProductsScreen from './screens/ProductsScreens';

export default function App() {
  return (
      <SafeAreaView>
          <ProductsScreen/>
      </SafeAreaView>
  )
};
