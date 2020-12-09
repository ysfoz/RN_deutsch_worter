import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome'
import FlipCard from "react-native-flip-card";
import Icon from "react-native-vector-icons/FontAwesome";

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
          <Icon
            name="plus"
            size={30}
            color="crimson"
            style={{ position: "absolute", right: 10, bottom: 5 }}
            // TODO: onPress={props.addComment} props olmaz parcalayip alacaz  ana sayfada  modal olarak input acilacak, bir tarafinda baslik bir tarafinda yorum olacak
          />
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
        <View>
          <Image
            source={require("../assets/1.jpg")}
            style={{
              height: Dimensions.get("screen").height * 0.3,
              width: Dimensions.get("screen").width * 0.9,
              resizeMode: "contain",
              margin: 5,
              alignSelf: "center",
            }}
          />
        </View>
        <Icon
          name="volume-up"
          size={50}
          color="crimson"
          onPress={() => console.log("denem")}
          style={{ marginLeft: 10, marginBottom: 10 }}
        />
        <Icon
          name="plus-circle"
          size={15}
          color="gray"
          onPress={() => console.log("denem")}
          style={{ position: "absolute", bottom: 45, left: 10 }}
        />
      </View>

      <View style={WordListstyles.backpage}>
        <Text style={WordListstyles.text}>{turkisch}</Text>
        <Icon
          name="play-circle-o"
          size={50}
          color="crimson"
          onPress={() => console.log("denem")}
          style={{ marginLeft: 10, marginBottom: 10 }}
        />
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
