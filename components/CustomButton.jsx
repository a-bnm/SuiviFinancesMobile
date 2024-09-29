import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ titre, handlePress }) => {
    return (
        <TouchableOpacity
            className="h-12 w-[300px]  bg-[#5EC2B7] rounded-md flex items-center justify-center"
            onPress={() => handlePress()}>
            <Text className="text-white font-bold text-xl">
                {titre}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton