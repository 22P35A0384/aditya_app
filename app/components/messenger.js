import React from "react";
import Styles from '../styles/messengerstylings.js';
import { Text, View,Image,Pressable } from "react-native";
import { router } from "expo-router";

const Messenger=()=>{
    return(
        <>
            <View style={Styles.container}>
                <Text>Messenger Page</Text>
            </View>
            <View style={Styles.sub1}>
                <Image
                    source={{ uri: 'https://space-club.onrender.com/img/22P35A0384.jpg' }}
                    style={Styles.img}
                />
                <Pressable
                    onPress={()=>{router.push('/components/spotlight')}}
                >
                    <Image
                    source={require('../../public/face.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/')}}
                >
                    <Image
                    source={require('../../public/home.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/messenger')}}
                    style={Styles.focus}
                >
                    <Image
                    source={require('../../public/msg.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/settings')}}
                >
                    <Image
                    source={require('../../public/settings.png')}
                    style={Styles.icon}
                    />
                </Pressable>
            </View>
        </>
    )
};

export default Messenger;