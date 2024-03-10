import React, { useState } from "react";
import { TextInput,Button,View,Text,Image,Alert } from "react-native";
import Styles from '../styles/login'
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login=()=>{
    const [Logindata,Setlogindata] = useState({
        'username':'',
        'password':''
    })
    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
          console.log('Data stored successfully!');
        } catch (error) {
          console.log('Error storing data:', error);
        }
      };
      
    const Handlelogin=(e)=>{
        e.preventDefault()
        storeData('user',Logindata.username)
        // Alert.alert(Logindata.username)
        router.push('/')
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.imgcontr}>
                <Image
                    source={{uri:'https://space-club.onrender.com/img/logo.png'}}
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