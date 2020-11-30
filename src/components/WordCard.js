import React from 'react';
import { SafeAreaView, View , Text} from 'react-native';

export default function WordCard(props) {
    return(
        <SafeAreaView>
            <View>
                <View>
                <Text>props.word</Text>
                <Text>props.plural,artikel,</Text>
                </View>
                <View>
                    <Text>props.beispiel</Text>
                </View>
            </View>
        </SafeAreaView>
    )
    
}
