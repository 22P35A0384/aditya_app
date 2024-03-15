import React, { useEffect, useRef, useState } from "react";
import Styles from '../styles/spotlightstyles.js';
import { Text, View,Image,Pressable, Button } from "react-native";
import { router } from "expo-router";
import { Camera,CameraType } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Entypo} from '@expo/vector-icons'
import Buttons from "./buttion.js";

const Spotlight=()=>{
    const [hasCamerapermission, sethasCemarapermission] = useState(null);
    const [image, setimage] = useState(null);
    const [type,setType] = useState(Camera.Constants.Type.back);
    const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(()=>{
        (async ()=>{
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            Camera.requestCameraPermissionsAsync()
            sethasCemarapermission(cameraStatus.status === 'granted');
        })();
    },[])

    const takePicture = async()=>{
        if(cameraRef){
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data)
                setimage(data.uri)
            }catch(err){
                console.log(err)
            }
        }
    }

    if(hasCamerapermission === false){
        return <Text>Camera Access Denied</Text>
    }
    return(
        <>
            <View style={Styles.container}>
                <View style={Styles.sub}>
                    <Text style={Styles.head}>ADITYA UNIVERSITY</Text>
                    <Image
                    source={require('../../public/logo.png')}
                    style={Styles.img1}
                    />
                </View>
                <View style={Styles.sub2}>
                    {/* <Text>Spotlight Block</Text> */}
                    <Camera
                        style={Styles.camera}
                        type={type}
                        flashMode={flash}
                        ref={cameraRef}
                    >
                        <Text></Text>
                    </Camera>
                </View>
                <View style={Styles.sub3}>
                    <Buttons tittle={'Get Student Details'} icon='camera' onPress={takePicture}/> 
                </View>
                <View style={Styles.sub4}>
                    {!image ? 
                    <></> 
                    :
                    <Image
                        source={{uri:image}}
                        style={{width:100,height:100}}
                    />   
                }
                </View>
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