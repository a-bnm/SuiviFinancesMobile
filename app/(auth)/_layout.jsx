import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='index' />
            <Stack.Screen name='login' options={{ headerShown: false, title: "Login" }} />
        </Stack>
    );
}


export default Layout;
