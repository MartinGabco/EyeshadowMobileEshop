import React from 'react';
import { View, StyleSheet, Text, ScrollView, Platform, StatusBar } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

import MainScreen from './MainScreen';

interface Props {}

const ProductsScreen: React.FC<Props> = props => {
   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.header}>
               <View style={styles.navigation}/>      
               <View style={styles.input}></View>        
            </View>
            <View style={styles.main_wrapper}>
               <MainScreen/>
            </View>
            <View style={styles.footer}/> 
         </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
   container: {
      width:"100%",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },
   header: {
      height: 135,
   },
   navigation: {
      height:'40%',
      backgroundColor: '#b3ffff' ,
   },
   input: {
      height: '60%',
      backgroundColor: '#00ffff',
   },
   main_wrapper: {
      minHeight: 1330,
      backgroundColor: '#ff6600',
   },
   footer: {
      minHeight: 350,
      backgroundColor:"#e6b3ff",      
   },   
});

export default ProductsScreen;