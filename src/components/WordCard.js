import React from "react";
import { SafeAreaView, View, Text } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome'
import FlipCard from "react-native-flip-card";

import { WordListstyles } from "../styles/WordList";

export default function WordCard({
  verb,
  turkisch,
  beispiel,
  perfect,
  prasens,
  prateritum,
  beispieltur,
}) {
  return (
    <FlipCard>
      <View style={WordListstyles.container}>
        <View style={WordListstyles.headercontainer}>
          <Text style={WordListstyles.verb}>{verb}</Text>
        </View>
        <View style={WordListstyles.verbscontainer}>
          <Text style={WordListstyles.text}>{prasens}</Text>
          <Text style={WordListstyles.text}>{perfect}</Text>
          <Text style={WordListstyles.text}>{prateritum}</Text>
        </View>
        <View style={WordListstyles.bottomcontainer}>
          <Text style={WordListstyles.text}>{beispiel}</Text>
          <Text style={WordListstyles.text}>{beispieltur}</Text>
        </View>
      </View>
      <View style={WordListstyles.backpage}>

      <Text style={WordListstyles.text}>{turkisch}</Text>
      </View>
    </FlipCard>
  );
}

// verb= {item.verb}
// turkisch= {item.turkisch}
// perfect={item.Perfekt}
// prasens={item.Präsens}
// prateritum={item.Präteritum}
// beispiel={item.beispiel}
// beispieltur={item.beispieltur}
// others = {item.others}

// "id": 1,
//     "verb": "backen",
//     "Präsens": "bäckt",
//     "Präteritum": "buk",
//     "Perfekt": "gebacken",
//     "turkisch": "fırında pişirmek",
//     "beispiel":"momentan sind alle beispiel satze gleich",
//     "others":"man kan diese verb auch alltag sprache benutzen"
