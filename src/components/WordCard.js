import React from 'react';
import { SafeAreaView, View , Text} from 'react-native';

export default function WordCard({verb,turkisch,beispiel,perfect}) {
    return(
        
            <View>
                <View>
                <Text>{verb}</Text>
                <Text>{turkisch}</Text>
                <Text>{perfect}</Text>
                </View>
                <View>
                    <Text>{beispiel}</Text>
                </View>
            </View>
       
    )
    
}

// "id": 1,
//     "verb": "backen",
//     "Präsens": "bäckt",
//     "Präteritum": "buk",
//     "Perfekt": "gebacken",
//     "turkisch": "fırında pişirmek",
//     "beispiel":"momentan sind alle beispiel satze gleich",
//     "others":"man kan diese verb auch alltag sprache benutzen"