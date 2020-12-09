import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from  'react-native-vector-icons/FontAwesome'

import Main from '../pages/Main';
import WordList from '../pages/WordList'
import AllWords from '../pages/AllWords'
import { HeaderBackButton, HeaderBackground, HeaderTitle } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={Main} 
       
        options={{
            title:'',
            tabBarIcon:({color,size}) => (
                <Icon name = 'home' color = '#546e7a' size={30}/>
            ),
        }
    }
        
        />
        <Tab.Screen 
        name="WordList" 
        component={WordList} 
        options={{
            title:'',
            tabBarIcon:({color,size}) => (
                <Icon name = 'align-justify' color = '#546e7a' size={30}/>
            ),
        }
    }
        />
        <Tab.Screen 
        name="AllWords" 
        component={AllWords} 
        options={{
            title:'',
            tabBarIcon:({color,size}) => (
                <Icon name = 'gears' color = '#546e7a' size={30}  />
            ),
        }
    }
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// gear , home, align-justify, gears, thumbs-o-up,  check-square gamepad  bookmark  inbox