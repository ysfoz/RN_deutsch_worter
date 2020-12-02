import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {MainHeaderStyles} from '../styles/MainStyles'

const MainHeader = (props) => {
  return (
    <View >
        <View style= {MainHeaderStyles.view}>
      {/* <Icon name= 'rocket' size = {50} color='#e8d53a' /> */}
      <Image source={require('../helper/Logo.png')} style={MainHeaderStyles.image}/>
        </View>
        <View style={MainHeaderStyles.textview}>
      <Text style={MainHeaderStyles.text}>ogrenilen kelime : 1000</Text>
      <Text style={MainHeaderStyles.text}>mevcut kelime : 1000 </Text>

        </View>
    </View>
  );
};

export default MainHeader;
