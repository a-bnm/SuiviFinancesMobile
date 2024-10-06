import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input'
import CustomButton from '../../../components/CustomButton'
import InputError from '../../../components/InputError'
import Select from '../../../components/Select'
import { router } from 'expo-router'
import axios from "../../../lib/axios"



const Index = () => {

    const [comptes, setComptes] = useState();


    const [compte_id, setCompteId] = useState();
    const [montant, setMontant] = useState();
    const [source, setSource] = useState();

    const [errors, setErrors] = useState();


    const getComptes = async () => {

        await axios
            .get('/api/v1/comptes')
            .then((res) => {
                setComptes(res.data.data)
            })
            .catch((err) => {
                throw err
            })

    }

    useEffect(() => {
        getComptes();
    }, []);


    const creerRentre = async () => {

        await axios.post('/api/v1/rentres', {
            compte_id: compte_id,
            montant: montant,
            source: source
        }).then((res) => {
            router.push('/dashboard/rentres')
        }).catch((err) => {
            setErrors(err.data)
        })
    }
    return (
        <View className="h-full w-full flex items-center justify-center">
            <View className="w-[350px] bg-[#18B478] p-4 rounded-md">
                <Text className="mb-8 text-white text-2xl text-center">Ajouter une rentrée d'argent</Text>
                <Input
                    label="Source"
                    name="source"
                    handleChange={setSource}
                />
                <InputError message={errors?.source} />
                <Input
                    label="Montant"
                    name="montant"
                    handleChange={setMontant}
                />
                <InputError message={errors?.montant} />
                <Select
                    data={comptes}
                    titre="Compte"
                    handleChange={setCompteId}
                    selected={compte_id}
                />
                <InputError message={errors?.compte_id} />

                <View className="flex items-center mt-8">
                    <CustomButton
                        titre="Valider"
                        handlePress={creerRentre}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index