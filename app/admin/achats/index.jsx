import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input'
import CustomButton from '../../../components/CustomButton'
import InputError from '../../../components/InputError'
import Select from '../../../components/Select'
import { router } from 'expo-router'
import axios from "../../../lib/axios"



const Index = () => {
    const [categories, setCategories] = useState();
    const [comptes, setComptes] = useState();
    const [categorie_id, setCategorieId] = useState();
    const [compte_id, setCompteId] = useState();
    const [montant, setMontant] = useState();
    const [libelle, setLibelle] = useState();

    const [errors, setErrors] = useState();

    const getCategories = async () => {
        await axios
            .get('/api/v1/categories')
            .then((res) => {
                setCategories(res.data.data)
            })
            .catch((err) => {
                throw err
            })
    }

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
        getCategories();
    }, []);


    const creerAchat = async () => {

        await axios.post('/api/v1/achats', {
            categorie_id: categorie_id,
            compte_id: compte_id,
            montant: montant,
            libelle: libelle
        }).then((res) => {
            router.push('/dashboard/achats')
        }).catch((err) => {
            setErrors(err.data)
        })
    }
    return (
        <View className="h-full w-full flex items-center justify-center">
            <View className="w-[350px] bg-[#18B478] p-4 rounded-md">
                <Text className="mb-8 text-white text-2xl text-center">Ajouter un achat</Text>
                <Input
                    label="Libellé"
                    name="libelle"
                    handleChange={setLibelle}
                />
                <InputError message={errors?.libelle} />
                <Input
                    label="Montant"
                    name="montant"
                    handleChange={setMontant}
                />
                <InputError message={errors?.montant} />
                <Select
                    data={categories}
                    titre="Catégorie"
                    handleChange={setCategorieId}
                    selected={categorie_id}
                />
                <InputError message={errors?.categorie_id} />

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
                        handlePress={creerAchat}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index