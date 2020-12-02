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

const Main = (props) => {
    onPressCard = (listName) => {
       props.navigation.navigate('WordList')
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#01579b" }}>
      <MainHeader />
      <ScrollView>
        {AllFolder.map((e) => (
          <MainCard name={e.name} isDone={e.isDone} onPressCard={() => onPressCard(e.name)}>
            {e.name}
          </MainCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
