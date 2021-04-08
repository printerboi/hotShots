import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox(props) {
    const backGround = {backgroundColor: props.backgroundColor ? props.backgroundColor : "white"};
    const textColor = {color: props.textColor ? props.textColor : "black"};
    return (
        <View style={[styles.container, backGround]}>
            <View style={styles.header}>
                <Text style={[styles.text, {fontWeight: "bold"}, textColor]}>{props.title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={[styles.text, textColor]}>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '80%',
      height: '15%',
      borderRadius: 8,
      backgroundColor : 'white',
      marginBottom: 25
    },

    header:{
        padding: 10,
        borderColor: '#151515',
        borderBottomWidth: 2,
    },


    body:{
        padding: 10,
    },
  
    text:{
      color: 'black'
    }, 
  });