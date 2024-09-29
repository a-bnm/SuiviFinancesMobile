import React, { useState } from 'react';
import { Text, View, Platform } from 'react-native';
import Input from "../../components/Input"
import CustomButton from '../../components/CustomButton';
import * as SecureStore from 'expo-secure-store';
import axios from "../../lib/axios"


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setErrors] = useState([])

    const handleSubmit = async () => {
        await axios
            .post('/api/sanctum/token', {
                email: email,
                password: password,
                device_name: Platform.OS + ' ' + Platform.Version,
            })
            .then(async (token) => {
                //Stockage du token
                await SecureStore
                    .setItemAsync("token", token.data)
                    .then(() => {
                        router.push('/dashboard')
                    }).catch((err) => {
                        console.log(err)
                        setErrors(err)
                    })

            }).catch((error) => {
                console.log(error)
                return error
            })

    }

    return (
        <View className="h-full flex items-center justify-center">
            <View className="h-[350px] w-[350px] p-4 rounded-md bg-[#048153]">
                <View className="mb-8">
                    <Text className="font-bold text-2xl text-white text-center">Se connecter</Text>
                </View>
                <View>
                    <Input
                        label="E-mail"
                        name="email"
                        handleChange={setEmail}
                    />
                    <Input
                        label="Mot de passe"
                        name="password"
                        handleChange={setPassword}
                    />
                    <View className="mt-8 flex items-center">
                        <CustomButton
                            titre="Valider"
                            handlePress={handleSubmit}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;
