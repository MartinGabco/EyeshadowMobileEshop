import React from 'react';
import { View, StyleSheet, Text, ScrollView, Platform, StatusBar } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

interface Props {}

const ProductsScreen: React.FC<Props> = props => {

   return (
      <ScrollView>
      <View style={styles.container}>
         <View style={styles.header}>
               <Text>TEST</Text>        
         </View>
         <View style={styles.title}/>
         <View style={styles.slideshow}>
            <Text>TEST</Text>
         </View>
         <View style={styles.categories}/>
         <View style={styles.filter}/>
         <View style={styles.products}/>
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
      minHeight: 175,
      backgroundColor:"#99ffff",
   },
   title: {
      minHeight: 180,
      backgroundColor:"#ffff80",
   },
   slideshow: {
      minHeight: 365,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#9999ff",
   },
   categories: {
      minHeight: 240,
      backgroundColor:"#ffb3d1",
   },
   filter: {
      minHeight: 145,
      backgroundColor:"#b3ff99",      
   },
   products: {
      minHeight: 780,
      backgroundColor:"#b3f0ff",      
   },
   footer: {
      minHeight: 350,
      backgroundColor:"#e6b3ff",      
   },   
});

export default ProductsScreen;