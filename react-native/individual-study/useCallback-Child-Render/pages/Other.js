
import React,{useState,useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const Other = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Other Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Other;
