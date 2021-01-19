import React,{useState,useEffect} from 'react';
import {Text,View,Button,TouchableOpacity} from "react-native"

const Details = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Other..."
          onPress={() => navigation.navigate('Other')}
        />
      </View>
    );
}

export default Details;