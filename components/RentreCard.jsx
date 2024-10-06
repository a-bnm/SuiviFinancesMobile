import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import axios from '../lib/axios'

const RentreCard = ({ rentre }) => {
    const handleDelete = async () => {
        await axios.delete(`/api/v1/rentres/${rentre.id}`)
            .then((res) => {
                router.push('/dashboard/rentres')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View className="h-[100px] w-full my-2 p-4 rounded-md bg-[#5EC2B7] ">
            <View className="w-full flex flex-row justify-between">
                <View>
                    <Text className="col-span-2 font-bold text-3xl ">
                        {rentre.source}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={handleDelete}>
                        <Text>
                            Supprimer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="col-span-1 font-bold text-xl text-end mt-2">
                Montant  {rentre.montant.toLocaleString()} DA
            </Text>
        </View>
    )
}

export default RentreCard