import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

interface Props {}

const ProductsScreen: React.FC<Props> = props => {
   return (
      <ScrollView>
      <View style={styles.container}>
         <View style={styles.header}/>
         <View style={styles.main}/>
         <View style={styles.footer}/>
         <View style={styles.item}>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
         </View>
         <View style={styles.box}>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
            <Text>First</Text>
         </View>
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
   container: {
      width:"100%",
      backgroundColor: '#ffff00',
   },
   header: {
      width: "100%",
      minHeight: 200,
      backgroundColor:"#99ffff",
   },
   main: {
      width: "100%",
      minHeight: 200,
      backgroundColor:"#ffff80",
   },
   footer: {
      width: "100%",
      minHeight: 100,
      backgroundColor:"#9999ff",
   },
   item: {
      width: "100%",
      minHeight: 180,
      backgroundColor:"green",
   },
   box: {
      width: "100%",
      minHeight: 180,
      backgroundColor:"red",      
   }
});

export default ProductsScreen;