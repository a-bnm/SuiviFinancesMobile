import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'


const Select = ({ data, handleChange, titre, selected }) => {

    return (
        <View>
            <Text className="text-white font-bold">{titre}</Text>
            <Picker
                onValueChange={handleChange}
                selectedValue={selected}
                style={{ backgroundColor: "white" }}
            >
                <Picker.Item label="Choisir un élément" enabled={false} />
                {data?.map((item) => {
                    return (
                        <Picker.Item key={item.id} label={item.designation} value={item.id} />
                    )
                })}

            </Picker>
        </View>
    )
}

export default Select