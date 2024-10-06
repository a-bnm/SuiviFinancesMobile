import { View, Text } from 'react-native'
import React from 'react'

const InputError = ({ message }) => {
    return (
        <View className="pt-2">
            <Text className="text-red-700">{message}</Text>
        </View>
    )
}

export default InputError