import React from 'react';
import {View, Text, } from 'react-native';

import style from './style';

const Card = ({titulo,titulo2, children,children2})=>{
    return(
    <View style={style.card}>
        <View style={style.topoCard}>
            <Text style={style.miniTitle}>{titulo}</Text>
             {children}            
        </View>
        <View style={style.bodyCard}>
            <Text style={style.miniTitle}>{titulo}</Text>
            {children2} 
        </View>
    </View>
    )
}

export default Card;