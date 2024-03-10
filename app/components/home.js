import React, { useEffect } from 'react';
import { Text, View, Image, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../styles/home';
import { router } from 'expo-router';

const Home = () => {
  useEffect(() => {
    const retrieveData = async () => {
      const key = 'user'
      try {
        const value = await AsyncStorage.getItem(key);
        if (value === null) {
          router.push('/components/login')
          Alert.alert('Login Failed');
        }
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    retrieveData();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.sub1}>
        <Image
          source={{ uri: 'https://space-club.onrender.com/img/22P35A0384.jpg' }}
          style={Styles.img}
        />
        <Text style={Styles.head}>ADITYA</Text>
        <Image
          source={{ uri: 'https://space-club.onrender.com/img/msg.png' }}
          style={Styles.msg}
        />
        <Pressable onPress={() =>router.push('/components/logout')}>
          <Text>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
