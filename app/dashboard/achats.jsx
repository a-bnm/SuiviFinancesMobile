import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import AchatCard from '../../components/AchatCard';
import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios';
import { router } from 'expo-router';

const Achats = () => {
    const [achats, setAchats] = useState();
    const [spin, setSpin] = useState(false);


    const getAchats = async () => {

        setSpin(true);
        await axios
            .get('/api/v1/achats')
            .then((res) => {
                setAchats(res.data.data)
            })
            .catch((err) => {
                throw err
            })
        setSpin(false);
    }

    useEffect(() => {
        getAchats()
    }, []);

    return (
        <View>
            {
                achats ?
                    (
                        <View className="p-4">
                            <View className="w-full flex flex-row border-b-2 border-gray-400 mb-4">
                                <View className="w-2/3">
                                    <Text className="text-2xl font-bold">
                                        Mes Achats
                                    </Text>
                                </View>
                                <View className="w-1/3 flex items-end">
                                    <TouchableOpacity
                                        onPress={() => {
                                            router.push('/admin/achats')
                                        }}
                                    >
                                        <Text>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <FlatList
                                data={achats}
                                renderItem={({ item }) => <AchatCard achat={item} />}
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

export default Achats