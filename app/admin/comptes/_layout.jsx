import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='index' options={{ title: "Formulaire compte" }} />

        </Stack>
    );
}


export default Layout;