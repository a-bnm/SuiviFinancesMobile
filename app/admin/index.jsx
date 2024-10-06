import React from 'react';
import { SafeAreaView, View } from 'react-native';
import NavCard from '../../components/NavCard';

const Index = () => {
    return (
        <SafeAreaView>
            <NavCard
                titre="Comptes"
                route="/admin/comptes"
            />
        </SafeAreaView>
    );
}


export default Index;
