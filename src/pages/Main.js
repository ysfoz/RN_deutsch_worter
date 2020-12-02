import React from 'react';
import { SafeAreaView, View, Text , ScrollView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {AllFolder} from '../helper/AllFolder';
import {Adjektive} from '../helper/Adjective';
import {AllTag} from '../helper/AllTag';
import {Nomen} from '../helper/Nomen';
import {StarkeVerben} from '../helper/StarkeVerben';
import MainCard from '../components/MainCard'
import MainHeader from '../components/MainHeader'



const Main = () => {


    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#03a9f4'}}>
           
            <MainHeader />
            <ScrollView>
    {AllFolder.map((e) => <MainCard name= {e.name} isDone = {e.isDone}>{e.name}</MainCard>)}
            </ScrollView>
            
           
        </SafeAreaView>
    )
}

export default Main;