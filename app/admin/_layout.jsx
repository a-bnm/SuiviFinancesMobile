import React from 'react';
import { Stack } from "expo-router/stack";


const Layout = () => {
    return (
        <Stack >
            <Stack.Screen name='index' options={{ title: "Admin" }} />
            <Stack.Screen name='comptes' options={{ headerShown: false }} />
            <Stack.Screen name='categories' options={{ headerShown: false }} />
            <Stack.Screen name='achats' options={{ headerShown: false }} />
            <Stack.Screen name='rentres' options={{ headerShown: false }} />
        </Stack>
    );
}


export default Layout;