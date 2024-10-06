import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import axios from '../lib/axios'

const CategorieCard = ({ categorie }) => {
    const handleDelete = async () => {
        await axios.delete(`/api/v1/categories/${categorie.id}`)
            .then((res) => {
                router.push('/dashboard/categories')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View className="h-[80px] w-full my-2 p-4 rounded-md bg-[#5EC2B7] grid grid-cols-3">
            <Text className="col-span-2 font-bold text-3xl ">
                {categorie.designation}
            </Text>

            <TouchableOpacity onPress={handleDelete}>
                <Text>
                    Supprimer
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategorieCard