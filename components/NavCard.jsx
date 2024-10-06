import React from 'react';
import { TouchableHighlight } from 'react-native';
import { router } from 'expo-router';

const NavCard = ({ titre, route }) => {
    return (
        <TouchableHighlight
            className="bg-[#4B66AF] h-[80px] w-full"
            onPress={router.push(route)}
        >
            <Text>{titre}</Text>
        </TouchableHighlight>
    );
}

export default NavCard;
