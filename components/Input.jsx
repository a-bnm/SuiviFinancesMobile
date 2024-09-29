import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ label, name, handleChange }) => {
    return (
        <View className="mb-4">
            <Text className="font-bold text-white">
                {label}
            </Text>
            <TextInput
                name={name}
                onChangeText={handleChange}
                className="bg-white rounded-md p-2 h-10 w-full"
            />

        </View>
    )
}

export default Input