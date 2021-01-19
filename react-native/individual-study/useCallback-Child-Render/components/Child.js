import React, {useState, useEffect, memo,useCallback} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const Child = memo(() => {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [setCounter]);

  console.log('child render');
  return (
    <View>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20}}>{counter}</Text>
      </View>
      <Button onPress={handleClick} title="Sayıyı Artır" />
    </View>
  );
});

export default Child;
