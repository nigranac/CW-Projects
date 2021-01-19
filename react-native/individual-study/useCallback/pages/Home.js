import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Button, TouchableOpacity, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Child from '../components/Child';

const Home = ({navigation}) => {
  const [counter, setCounter] = useState(0);
console.log("parent render")

  const handleClick =useCallback( () => {
    setCounter(counter=>counter+1)
  },[setCounter]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar hidden />
      <Text>Home</Text>
      <Text>{counter}</Text>
      <View style={{margin: 20}}>
        <Child updateCounter={handleClick} />
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

// import React, { useState, useEffect, useRef } from 'react';
// import {Text, View, Button,StatusBar} from 'react-native';

// const Home = ({ navigation }) => {
//   const [timer, setTimer] = useState(1);
//   const timerRef = useRef(null);

//   useEffect(()=>{
//     timerRef.current = setInterval(() => setTimer(timer => timer + 1), 2000)

//     return () => clearInterval(timerRef.current)
//   }, []); // <-- setup interval only once when component mounts
//   console.log('timer   :', timer);

//   console.log(timerRef.current)
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <StatusBar hidden/>
//       <Text>Home</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           navigation.navigate('Details');
//           clearInterval(timerRef.current); // <-- clear interval on navigation
//         }}
//       />
//     </View>
//   );
// };

export default Home;

// const [timer, setTimer] = useState(1);

// useFocusEffect(
//   useCallback(() => {
//     const unsubscribe = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 2000);

//     return () => clearInterval(unsubscribe);
//   }, [navigation]),
// );

// console.log('timer   :', timer);
