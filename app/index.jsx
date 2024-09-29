import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../constants/images.js"
import CustomButton from '../components/CustomButton.jsx'

import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function App() {

    const accederApplication = () => {
        SecureStore.getItemAsync('token').then((token) => {
            router.push('/dashboard')
        }).catch(() => {
            router.push('login')
        })
    }


    return (
        <SafeAreaView >
            <View className="h-full bg-[#048153] flex justify-center items-center">
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