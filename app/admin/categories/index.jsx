import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../components/Input'
import CustomButton from '../../../components/CustomButton'
import InputError from '../../../components/InputError'
import axios from "../../../lib/axios"
import { router } from 'expo-router'

const Index = () => {

    const [designation, setDesignation] = useState();

    const [errors, setErrors] = useState();

    const creerCategorie = async () => {

        await axios.post('/api/v1/categories', {
            designation: designation,
        }).then((res) => {
            router.push('/dashboard/categories')
        }).catch((err) => {
            setErrors(err)
        })
    }
    return (
        <View className="h-full w-full flex items-center justify-center">
            <View className="w-[350px] bg-[#18B478] p-4 rounded-md">
                <Text className="mb-8 text-white text-2xl text-center">Créer une catégorie</Text>
                <Input
                    label="Désignation"
                    name="designation"
                    handleChange={setDesignation}
                />
                <InputError message={errors?.designation} />

                <View className="flex items-center mt-8">
                    <CustomButton
                        titre="Valider"
                        handlePress={creerCategorie}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index