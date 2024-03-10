import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const Logout=()=>{
    try {
        AsyncStorage.removeItem('user');
        console.log('Data removed successfully!');
    } catch (error) {
        console.log('Error removing data:', error);
    }
    router.push('/components/login')
}

export default Logout;