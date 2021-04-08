import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ColorBox from './ColorBox';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ColorBox title={"Decks ansehen"} text={"Decks ansehen, bearbeiten und löschen."} backgroundColor={"#5b8a72"} textColor={"white"}></ColorBox>
        <ColorBox title={"Decks anlegen"} text={"Erstelle neue Decks und gestalte dein eigenes Partyspiel"} backgroundColor={"#56776c"} textColor={"white"}></ColorBox>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#151515',
      flex: 1,
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight + 10,
      paddingBottom: 10
    },
  
    text:{
      color: 'white'
    }, 
    
    footer:{
      backgroundColor: '#151515',
      paddingBottom: 5
    },
  });