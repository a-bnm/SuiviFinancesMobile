import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../constants/images.js"
import CustomButton from '../components/CustomButton.jsx'

import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function App() {

    const accederApplication = () => {
        router.push('login')
        // SecureStore.getItemAsync('token').then((token) => {
        //     router.push('/dashboard')
        // }).catch(() => {
        //     router.push('login')
        // })
    }


    return (
        <SafeAreaView >
            <View className="h-full p-0 bg-[#048153] flex justify-center items-center m-0">
                <View className="">
                    <Image
                        source={images.main}
                        className="h-[350px] w-[350px]"
                        resizeMode='contain'
                    />
                    <Text className="text-center text-white text-2xl my-4">
                        Bienvenue!!
                    </Text>
                    <View className="flex items-center">
                        <CustomButton
                            titre="Accéder à l'application"
                            handlePress={accederApplication}
                        />
                    </View>


                </View>
            </View>

        </SafeAreaView>
    )
}