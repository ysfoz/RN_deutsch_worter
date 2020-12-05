
import { Dimensions, StyleSheet } from 'react-native'


export const WordListstyles = StyleSheet.create({
    verb:{
        fontSize:40,
        color:'crimson'
    },
    
    headercontainer:{
        borderBottomWidth:1,
        alignItems:'center',
        marginVertical:20,
    },
    container:{
        marginTop:20,
        height:Dimensions.get('screen').height * 0.5,
        width:Dimensions.get('screen').width * 0.8,
        backgroundColor:'#b2ebf2',
        borderWidth:2,
        borderRadius:10,
        marginLeft:50,
    },
   verbscontainer:{
    marginVertical:20,
    
    

   },
    text:{
        marginBottom:3,
        fontSize:20,
        marginHorizontal:5

    },
    bottomcontainer:{

    },
    backpage:{
        marginTop:20,
        height:Dimensions.get('screen').height * 0.5,
        width:Dimensions.get('screen').width * 0.8,
        backgroundColor:'#b2ebf2',
        borderWidth:2,
        borderRadius:10,
        marginLeft:50,
    }


})


{/*  <View style= {WordListstyles.container}>
                <Text style={WordListstyles.verb}>{verb}</Text>
                <View style={WordListstyles.verbscontainer}>
                <Text style={WordListstyles.text}>{prasens}</Text>
                <Text style={WordListstyles.text}>{perfect}</Text>
                <Text style={WordListstyles.text}>{prateritum}</Text>
                </View>
                <View style={WordListstyles.bottomcontainer}>
                    <Text style={WordListstyles.text}>{beispiel}</Text>
                    <Text style={WordListstyles.text}>{beispieltur}</Text>
                </View>
                <Text style={WordListstyles.text}>{turkisch}</Text>
            </View> */}