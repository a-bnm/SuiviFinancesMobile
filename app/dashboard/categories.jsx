import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import CategorieCard from '../../components/CategorieCard';
import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios';
import { router } from 'expo-router';

const Categories = () => {
    const [categories, setCategories] = useState();
    const [spin, setSpin] = useState(false);


    const getCategories = async () => {

        setSpin(true);
        await axios
            .get('/api/v1/categories')
            .then((res) => {
                console.log(res)
                setCategories(res.data.data)
            })
            .catch((err) => {
                console.log(err)
                throw err
            })
        setSpin(false);
    }

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <View>
            {
                categories ?
                    (
                        <View className="p-4">
                            <View className="w-full flex flex-row border-b-2 border-gray-400 mb-4">
                                <View className="w-2/3">
                                    <Text className="text-2xl font-bold">
                                        Mes Catégories
                                    </Text>
                                </View>
                                <View className="w-1/3 flex items-end">
                                    <TouchableOpacity
                                        onPress={() => {
                                            router.push('/admin/categories')
                                        }}
                                    >
                                        <Text>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <FlatList
                                data={categories}
                                renderItem={({ item }) => <CategorieCard categorie={item} />}
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

export default Categories