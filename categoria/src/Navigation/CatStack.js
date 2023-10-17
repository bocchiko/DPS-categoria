import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cat from '../screens/Cat';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="cat" component={Cat} options={{headerShown: false}}/>
        </Stack.Navigator>
    );

}