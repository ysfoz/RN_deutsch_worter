import React from 'react';
import { SafeAreaView, View, Text , ScrollView } from 'react-native'


const Main = () => {

const lsit = ['liste1','liste2','liste3','liste4']
    return(
        <SafeAreaView style={{flex:1}}>
            <Text>ogrenilen Kelime:200</Text>
                   <Text>mevcut kelime sayisi: 400</Text>
                   <Text>kelime turlerine gore grafik koymayi dene</Text>
             <ScrollView >
        {lsit.map(e => <Text>{e}</Text>)}
                   </ScrollView>
            
        </SafeAreaView>
    )
}

export default Main;