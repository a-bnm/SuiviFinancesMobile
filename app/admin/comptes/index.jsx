import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../components/Input'
import CustomButton from '../../../components/CustomButton'
import InputError from '../../../components/InputError'
import axios from "../../../lib/axios"
import { router } from 'expo-router'

const Index = () => {

    const [designation, setDesignation] = useState();
    const [description, setDescription] = useState();
    const [montant, setMontant] = useState();

    const [errors, setErrors] = useState();
    const [user, setUser] = useState();


    const getUser = () => {
        axios.get('/api/user')
            .then((res) => {
                setUser(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const creerCompte = async () => {

        await getUser();

        await axios.post('/api/v1/comptes', {
            user_id: user.id,
            designation: designation,
            description: description,
            montant: montant
        }).then((res) => {
            router.push('/dashboard')
        }).catch((err) => {
            console.log(err)
            setErrors(err)
        })
    }
    return (
        <View className="h-full w-full flex items-center justify-center">
            <View className="w-[350px] bg-[#18B478] p-4 rounded-md">
                <Text className="mb-8 text-white text-2xl text-center">Créer un compte</Text>
                <Input
                    label="Désignation"
                    name="designation"
                    handleChange={setDesignation}
                />
                <InputError message={errors?.designation} />
                <Input
                    label="Déscription"
                    name="description"
                    handleChange={setDescription}
                />
                <InputError message={errors?.description} />
                <Input
                    label="Montant"
                    name="montant"
                    handleChange={setMontant}
                />
                <InputError message={errors?.montant} />
                <View className="flex items-center mt-8">
                    <CustomButton
                        titre="Valider"
                        handlePress={creerCompte}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index