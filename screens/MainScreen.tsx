import React from 'react'
import { View, StyleSheet, Text, ScrollView, Platform, StatusBar } from 'react-native';

interface Props {}

const MainScreen = (props: Props) => {
    return (
        <View style={styles.main}>
            <View style={styles.title}/>
            <View style={styles.slideshow}>
               <Text>TEST</Text>
            </View>
            <View style={styles.categories}/>
            <View style={styles.filter}/>
            <View style={styles.products}/>
        </View>
    )
}

const styles = StyleSheet.create({
   main: {
      minHeight: 1330,
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
      minHeight: 400,
      backgroundColor:"#b3f0ff",      
   },
});

export default MainScreen
