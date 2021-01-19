import React,{useState,useEffect,memo} from 'react';
import {Text,View,Button,TouchableOpacity} from "react-native"

const Child =memo( ({updateCounter}) => {
    console.log("child render")
    return (
        <View>
            <Button 
            onPress={()=>updateCounter()}
            title="Sayıyı Artır"/>
        </View>
    );
})

export default Child;