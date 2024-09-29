import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='comptes/[id]' options={{ title: "Informations du compte" }} />
            <Stack.Screen name='index' options={{ title: "Dashboard" }} />

        </Stack>
    );
}


export default Layout;
