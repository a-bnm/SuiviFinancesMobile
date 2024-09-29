import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='comptes' options={{ headerShown: false }} />
            <Stack.Screen name='index' options={{ title: "Admin" }} />

        </Stack>
    );
}


export default Layout;