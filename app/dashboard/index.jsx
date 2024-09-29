import { View, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios'
import CompteCard from '../../components/CompteCard'
import { router, Link } from 'expo-router'


const index = () => {
    const [comptes, setComptes] = useState();
    const [spin, setSpin] = useState(false);

    const getComptes = async () => {
        setSpin(true);
        await axios
            .get('/api/v1/comptes')
            .then((res) => {
                console.log(res.data.data)
                setComptes(res.data.data)
            })
            .catch((err) => {
                console.log(err)
                throw err
            })
        setSpin(false);
    }

    useEffect(() => {
        getComptes()
    }, []);

    return (
        <View className="p-4">
            {
                comptes ?
                    (
                        <SafeAreaView>
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
                        </SafeAreaView>
                    ) : (
                        <ActivityIndicator
                            animating={spin}
                            size="large"
                            color="#B040B0"
                        />
                    )

            }
        </View >
    )
}

export default index