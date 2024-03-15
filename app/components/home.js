import React, { useEffect } from 'react';
import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../styles/homestyles';
import { router } from 'expo-router';

const Home = () => {
  useEffect(() => {
    const retrieveData = async () => {
      const key = 'user'
      try {
        const value = await AsyncStorage.getItem(key);
        if (value === null) {
          router.push('/components/login')
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
        <Text style={Styles.head}>ADITYA UNIVERSITY</Text>
        <Image
          source={require('../../public/logo.png')}
          style={Styles.img}
        />
      </View>
      <ScrollView>
        <View>
          <Pressable
            onPress={()=>{router.push('/components/logout')}}
          >
            <Text>LOGOUT</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
