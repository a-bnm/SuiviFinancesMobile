import { View, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios'
import CompteCard from '../../components/CompteCard'
import { router, Link } from 'expo-router'

import * as SecureStore from 'expo-secure-store';

const index = () => {
    const [comptes, setComptes] = useState();
    const [spin, setSpin] = useState(false);


    const getComptes = async () => {
        const token = SecureStore.getItem('token')

        setSpin(true);
        await axios
            .get('/api/v1/comptes', {

                headers: {
                    Authorization: `Bearer ${token}`,
                },

            })
            .then((res) => {
                setComptes(res.data.data)
            })
            .catch((err) => {
                throw err
            })
        setSpin(false);
    }

    useEffect(() => {
        getComptes()
    }, []);

    return (

        <SafeAreaView className="p-4">
            <View
                className="w-full h-10 bg-[#4B66AF] mb-4 rounded-md"

            >
                <Link href="/dashboard/categories" className="text-center py-2 text-white font-bold">
                    Catégories
                </Link>
            </View>
            <View
                className="w-full h-10 bg-[#4B66AF] mb-4 rounded-md"

            >
                <Link className="text-center py-2 text-white font-bold"
                    href="/dashboard/achats"
                >
                    Achats
                </Link>
            </View>
            <View
                className="w-full h-10 bg-[#4B66AF] mb-4 rounded-md"

            >
                <Link className="text-center py-2 text-white font-bold"
                    href="/dashboard/rentres"
                >
                    Rentres
                </Link>
            </View>
            {

                comptes ?
                    (
                        <View className="p-0">
                            <View className="w-full flex flex-row border-b-2 border-gray-400 mb-4">
                                <View className="w-2/3">
                                    <Text className="text-2xl font-bold">
                                        Mes comptes
                                    </Text>
                                </View>
                                <View className="w-1/3 flex items-end">
                                    <TouchableOpacity
                                        onPress={() => {
                                            router.push('/admin/comptes')
                                        }}
                                    >
                                        <Text>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <FlatList
                                data={comptes}
                                renderItem={({ item }) => <CompteCard compte={item} />}
                                keyExtractor={item => item.id}
                            />
                        </View >
                    ) : (
                        <ActivityIndicator
                            animating={spin}
                            size="large"
                            color="#B040B0"
                        />
                    )

            }

        </SafeAreaView >

    )
}

export default index