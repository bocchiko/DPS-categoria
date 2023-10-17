import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatStack from './CatStack';
import DogStack from './DogStack';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="dog" component={DogStack} options={{
                title:"Dog",
                tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="dog" color={focused ? '#6987B7': 'black'} size={24} />
                    ), 
                }}
                />
            <Tab.Screen name="cat" component={CatStack} options={{
                title:"Cat",
                tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="cat" color={focused ? '#6987B7': 'black'} size={24} />
                    ), 
                }}/>
        </Tab.Navigator>
    );
}