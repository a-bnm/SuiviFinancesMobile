import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='index' />
            <Stack.Screen name='login' options={{ title: "Login" }} />
            <Stack.Screen name='register' options={{ headerShown: false }} />
        </Stack>
    );
}


export default Layout;
