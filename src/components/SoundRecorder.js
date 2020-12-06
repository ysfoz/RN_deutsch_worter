import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import React,{useState} from 'react'
import { View, Text, Button } from 'react-native'

 const audioRecorderPlayer = new AudioRecorderPlayer();
const SoundRecorder = () => {
    const [sound,setSound] = useState([])

   const  onStartRecord = async () => {
        const result = await this.audioRecorderPlayer.startRecorder();
        this.audioRecorderPlayer.addRecordBackListener((e) => {
          this.setState({
            recordSecs: e.current_position,
            recordTime: this.audioRecorderPlayer.mmssss(
              Math.floor(e.current_position),
            ),
          });
          return;
        });
        console.log(result);
      };
      
      const onStopRecord = async () => {
        const result = await this.audioRecorderPlayer.stopRecorder();
        this.audioRecorderPlayer.removeRecordBackListener();
        this.setState({
          recordSecs: 0,
        });
        console.log(result);
      };
    return (
        <View>
            <Button title ='record' onPress={onStartRecord}
            //     async () => {
            //      await audioRecorderPlayer.startRecorder()
            //     audioRecorderPlayer.addRecordBackListener((e) =>{
            //         setSound({
            //             recordSecs:e.current_position,
            //             })
            //             console.log(sound)
            //     });
            // }}
                
                />
            <Text>sound</Text>
            <Button title ='play' onPress={onStopRecord}
            //     async ()=> {
            //     await audioRecorderPlayer.stopRecorder()
            // }}
            />
        </View>
    )
}

export default SoundRecorder



