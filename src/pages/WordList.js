import React from 'react';
import { SafeAreaView, View, Text , FlatList} from 'react-native'

// import { AllFolder } from "../helper/AllFolder";
// import { Adjektive } from "../helper/Adjective";
// import { AllTag } from "../helper/AllTag";
// import { Nomen } from "../helper/Nomen";
// import { StarkeVerben } from "../helper/StarkeVerben";
import WordCard from '../components/WordCard'


const WordList = (props) => {
    const data = props.route.params.data
    console.log(data)

    function renderList({item}) {
        return(
        <WordCard 
        verb= {item.verb} 
        beispiel={item.beispiel} 
        turkisch= {item.turkisch} 
        perfect={item.perfect}/>
        )        
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <FlatList
            style={{flex:1}}
            keyExtractor={(_,index) => index.toString() }
            data = {data}
            renderItem={ renderList}
            />
            
        </SafeAreaView>
    )
}

export default WordList;

// ({item}) => console.log(item.verb)