import React from "react";
import { View, Text,TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { MainCardStyles } from "../styles/MainStyles";

const MainCard = (props) => {
  return (
    <TouchableOpacity style={MainCardStyles.cardview} onPress={props.onPressCard}>
      <Icon
        name="check"
        size={30}
        color="#546e7a"
        style={props.isDone ? null : MainCardStyles.iconcheck}
      />
      <Text style={MainCardStyles.text}>{props.name}</Text>
      <Icon name="share" size={30} color="#546e7a" />
    </TouchableOpacity>
  );
};

export default MainCard;
