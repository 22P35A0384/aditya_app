import React, { useEffect, useRef, useState } from "react";
import Styles from '../styles/spotlightstyles.js';
import { Text, View,Image,Pressable, Button, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Camera,CameraType } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
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

    const Setimagenull=()=>{
        setimage(null)
    }

    if(hasCamerapermission === false){
        useEffect(()=>{
            (async ()=>{
                MediaLibrary.requestPermissionsAsync();
                const cameraStatus = await Camera.requestCameraPermissionsAsync();
                Camera.requestCameraPermissionsAsync()
                sethasCemarapermission(cameraStatus.status === 'granted');
            })();
        },[])
        // return <Text>Camera Access Denied</Text>
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
                    {!image ?
                    <Camera
                        style={Styles.camera}
                        type={type}
                        flashMode={flash}
                        ref={cameraRef}
                    >
                        <Text></Text>
                    </Camera> 
                    :
                    <Image
                        source={{uri:image}}
                        style={Styles.camera}
                    />   
                }
                </View>
                {!image ? 
                    <View style={Styles.sub3}>
                        <Buttons icon='camera' onPress={takePicture}/> 
                    </View>
                    :
                    <View>
                        <TouchableOpacity style={Styles.get}>
                        <Text style={{color:'white'}}>Get Student Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.get} onPress={Setimagenull}>
                            <Text style={{color:'white'}}>Retake Picture</Text>
                        </TouchableOpacity>
                    </View>
                }
                {/* <View>
                    {!image ? 
                    <></> 
                    :
                        <View style={Styles.sub4}>
                            <Image
                                source={{uri:image}}
                                style={{width:200,height:250,borderRadius:20}}
                            /> 
                        </View>
                }
                </View> */}
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