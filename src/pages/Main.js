import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AllFolder } from "../helper/AllFolder";
import { Adjektive } from "../helper/Adjective";
import { AllTag } from "../helper/AllTag";
import { Nomen } from "../helper/Nomen";
import { StarkeVerben } from "../helper/StarkeVerben";
import MainCard from "../components/MainCard";
import MainHeader from "../components/MainHeader";
import MainAddList from '../components/MainAddList'

const Main = (props) => {
    onPressCard = ({item}) => {
        console.log(item)
    props.navigation.navigate('WordList',{ data:item})
    
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024f94" }}>
      <MainHeader />
      <MainAddList/>
      <ScrollView>
        {AllFolder.map((e) => (
          <MainCard key = {e.id} name={e.name} isDone={e.isDone} onPressCard={() => onPressCard(e)}>
            {e.name}
          </MainCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
