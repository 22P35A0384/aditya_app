import React from "react";
import Styles from '../styles/spotlightstyles.js';
import { Text, View,Image,Pressable } from "react-native";
import { router } from "expo-router";

const Spotlight=()=>{
    return(
        <>
            <View style={Styles.container}>
                <Text>Spotlight Page</Text>
            </View>
            <View style={Styles.sub1}>
                <Image
                    source={{ uri: 'https://space-club.onrender.com/img/22P35A0384.jpg' }}
                    style={Styles.img}
                />
                <Pressable
                    onPress={()=>{router.push('/components/spotlight')}}
                    style={Styles.focus}
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

export default Spotlight;