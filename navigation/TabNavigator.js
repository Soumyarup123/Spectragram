import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, Switch, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import PostCard from '../screens/PostCard';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=> {
  return (
      
        <Tab.Navigator 
          labeled={false}
          barStyle={styles.bottomTabStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName = focused
                        ? 'book'
                        : 'book-outline';
                } else if (route.name === 'CreatePost') {
                    iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} style={{width:30}} />;
            },
        })}
        tabBarOptions={{
            activeTintColor:'#9B59B6',
            inactiveTintColor:'gray',
        }}
        >
          <Tab.Screen name='Feed' component={Feed} />
          <Tab.Screen name='CreatePost' component={CreatePost} />
        </Tab.Navigator>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});

export default BottomTabNavigator;