
import React, { useEffect } from 'react';
import {Button, SafeAreaView, Text } from 'react-native';
import Sqlite from 'react-native-sqlite-storage';



const sqlite = () => {

    


function dbrender() {
    const db = Sqlite.openDatabase({ name:'sqlite.db',location:'default'},
    () =>  console.log(console.log("Database OPENED")),
    (err) => console.log("SQL Error: " + err)).transaction(tx=>{
        tx.executeSql('SELECT * from Folders',[],(tx,results) => {
            console.log('tx',tx)
            console.log('res',results)
        })
    })
}
