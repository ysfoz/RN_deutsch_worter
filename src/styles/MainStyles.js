
import { Dimensions, StyleSheet} from 'react-native'



const MainCardStyles = StyleSheet.create({
    cardview:{
       alignItems:'center',
       justifyContent:'space-between',
       flexDirection:'row',
       width:Dimensions.get('screen').width * 0.9,
       backgroundColor:'#e2f1f8',
       marginTop:10,
       padding:15,
       borderRadius:10,
       alignSelf:'center'

    },
    iconcheck:{
        opacity:0.0
    },
    iconshare:{
        
    },
    text:{
        color:'#546e7a',
        fontSize:20,
        fontWeight:'bold',
    }
})

const MainHeaderStyles= StyleSheet.create({
    view:{
        alignSelf:'center',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
      
    },
    image:{
        // marginTop:50
    },
    textview:{
        textAlign:'center',
        marginVertical:15,
        borderBottomWidth:2,
        borderBottomColor:'#e0e0e0',

    },
    text:{
        fontSize:20,
        marginBottom:10,
        textAlign:'center',
        color: 'white',
        fontWeight:'bold'

    }

})

export {MainCardStyles,MainHeaderStyles} 
