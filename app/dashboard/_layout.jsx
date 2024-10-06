import React from 'react';
import { Stack } from "expo-router/stack";


const DashboardLayout = () => {
    return (
        <Stack >
            <Stack.Screen name='index' options={{ headerBackVisible: false, title: "Dashboard" }} />
            <Stack.Screen name='categories' options={{ title: "Catégories" }} />
            <Stack.Screen name='achats' options={{ title: "Achats" }} />
        </Stack>
    );
}


export default DashboardLayout;
