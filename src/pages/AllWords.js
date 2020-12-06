import React from 'react';
import { SafeAreaView, View,Text } from 'react-native'

import SoundRecorder from '../components/SoundRecorder'

const AllWords = () => {
    return(
        <SafeAreaView>
            <View>
                <SoundRecorder/>
            </View>
        </SafeAreaView>
    )
}

export default AllWords;