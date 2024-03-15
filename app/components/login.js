import React, { useState,useEffect } from "react";
import { TextInput,Button,View,Text,Image,Alert } from "react-native";
import Styles from '../styles/loginstyles'
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const Login=()=>{
    // useEffect(() => {
    //     const key = 'user'
    //     try {
    //         const value = AsyncStorage.getItem(key);
    //     if (value !== null) {
    //         router.push('/')
    //     }
    //     } catch (error) {
    //         console.log('Error retrieving data:', error);
    //     }
    //   }, []);
    // const [Logindata,Setlogindata] = useState({
    //     'username':'',
    //     'password':''
    // })
    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
          console.log('Data stored successfully!');
        } catch (error) {
          console.log('Error storing data:', error);
        }
      };
      
    const Handlelogin=(e)=>{
        if(Logindata.username===""){
            Alert.alert('Enter Your User Id')
        }else if(Logindata.password===""){
            Alert.alert('Enter Your Password!!')
        }else{
            e.preventDefault()
            axios.post('https://space-club.onrender.com/adityalogins',Logindata).then((res)=>{
                if(res.data){
                    storeData('user',Logindata.username)
                    // Alert.alert(Logindata.username)
                    router.push('/')
                }else{
                    Alert.alert('Login Failed')
                }
            })
        }
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.imgcontr}>
                <Image
                    source={require('../../public/logo.png')}
                    style={Styles.img}
                />
            </View>
            <View style={Styles.loginblock}>
                {/* <Text>Employee Login</Text> */}
                <TextInput
                    placeholder="USER NAME"
                    style={Styles.input}
                    onChangeText={(e)=>Setlogindata({...Logindata,username:e})}
                />
                <TextInput
                    placeholder="PASSWORD"
                    style={Styles.input}
                    onChangeText={(e)=>{Setlogindata({...Logindata,password:e})}}
                />
                <Button
                    title="LOGIN"
                    onPress={Handlelogin}
                />
            </View>
        </View>
    )
}

export default Login;