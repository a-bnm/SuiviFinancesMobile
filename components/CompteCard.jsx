import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const CompteCard = ({ compte }) => {
    return (
        <Link
            href={{
                pathname: '/dashboard/comptes/[id]',
                params: { id: compte.id },
            }}
            className="h-[70px] w-full my-2 p-4 rounded-md bg-[#5EC2B7] grid grid-cols-3"
        >


            <Text className="col-span-2 font-bold text-3xl ">
                {compte.designation}
            </Text>

            <Text className="col-span-1 font-bold text-xl text-end">
                Balance  {compte.montant.toLocaleString()} DA
            </Text>



        </Link>
    )
}

export default CompteCard