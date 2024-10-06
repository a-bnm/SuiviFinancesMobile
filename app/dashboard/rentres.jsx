import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import RentreCard from '../../components/RentreCard';
import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios';
import { router } from 'expo-router';

const Rentres = () => {
    const [rentres, setRentres] = useState();
    const [spin, setSpin] = useState(false);


    const getRentres = async () => {

        setSpin(true);
        await axios
            .get('/api/v1/rentres')
            .then((res) => {
                setRentres(res.data.data)
            })
            .catch((err) => {
                throw err
            })
        setSpin(false);
    }

    useEffect(() => {
        getRentres()
    }, []);

    return (
        <View>
            {
                rentres ?
                    (
                        <View className="p-4">
                            <View className="w-full flex flex-row border-b-2 border-gray-400 mb-4">
                                <View className="w-2/3">
                                    <Text className="text-2xl font-bold">
                                        Mes Rentrées d'argents
                                    </Text>
                                </View>
                                <View className="w-1/3 flex items-end">
                                    <TouchableOpacity
                                        onPress={() => {
                                            router.push('/admin/rentres')
                                        }}
                                    >
                                        <Text>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <FlatList
                                data={rentres}
                                renderItem={({ item }) => <RentreCard rentre={item} />}
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
        </View>
    )
}

export default Rentres