import React from 'react';
import { TouchableOpacity , Text } from 'react-native';

import {MainAddListStyles} from '../styles/MainStyles'

const MainAddList = (props) =>{
    return(
       <TouchableOpacity style={MainAddListStyles.container}>
           <Text style = {MainAddListStyles.text}>Add New List</Text>
       </TouchableOpacity>
    )
}

export default MainAddList;