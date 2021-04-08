import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCogs, faPlay } from '@fortawesome/free-solid-svg-icons';
import { cd } from './assets/cd';

import HomeScreen from './components/HomeScreen'

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="light-content"
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            color = focused ? cd.primaryColor : cd.secondaryColor;

            if (route.name === 'Home') {
              iconName = faHome;
              size = 16;

            } else if (route.name === 'Settings') {
              iconName = faCogs;
              size = 16;
            }
            else if (route.name === 'Play') {
              iconName = faPlay;
              size = 24;
            }
            return <FontAwesomeIcon icon={ iconName } color={ color } size={ size }/>
          },
        })}
        tabBarOptions={{
          activeTintColor: cd.primaryColor,
          inactiveTintColor: cd.secondaryColor,
          tabStyle: styles.tabBarItem,
          style: styles.footer,
          showLabel: false
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Play" component={HomeScreen} />
        <Tab.Screen name="Settings" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    color: 'white'
  }, 
  
  footer:{
    backgroundColor: '#151515',
    paddingBottom: 5
  },
});