import React from "react";
import Home from './components/home';
import { View,Text,Image, Pressable } from "react-native";
import Styles from './styles/indexstyles';
import { router } from "expo-router";

const Index=()=>{
  return(
    <>
      <Home/>
      <View style={Styles.sub1}>
        <Pressable
            onPress={()=>{router.push('/components/profile')}}
        >
            <Image
            source={{ uri: 'https://space-club.onrender.com/img/22P35A0384.jpg' }}
            style={[Styles.img]}
            />
        </Pressable>
          <Pressable
            onPress={()=>{router.push('/components/spotlight')}}
          >
            <Image
              source={require('../public/face.png')}
              style={Styles.icon}
            />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/')}}
              style={Styles.focus}
          >
              <Image
              source={require('../public/home.png')}
              style={Styles.icon}
              />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/components/messenger')}}
          >
              <Image
              source={require('../public/msg.png')}
              style={Styles.icon}
              />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/components/settings')}}
          >
              <Image
              source={require('../public/settings.png')}
              style={Styles.icon}
              />
          </Pressable>
      </View>
    </>
  )
}

export default Index;