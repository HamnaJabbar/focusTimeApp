import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import *as React from 'react';
import {Focus} from '../features/Focus';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Focus/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : Platform.OS === 'android'? StatusBar.currentHeight:0,
    backgroundColor: '#3A9BDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
});
