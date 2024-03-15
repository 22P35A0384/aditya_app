import React from "react";
import Styles from '../styles/settingstyles.js';
import { Text, View,Image,Pressable } from "react-native";
import { router } from "expo-router";

const Settings=()=>{
    return(
        <>
            <View style={Styles.container}>
                <Text>Settings Page</Text>
            </View>
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
                    style={Styles.focus}
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

export default Settings;