import React from 'react'
import { View, Text } from 'react-native'
import Listing from '../components/UI/Listing'
import ProfilePage from '../components/UI/ProfilePage'


export default function Profile() {
    return (
        <View>
            <ProfilePage />
            <Listing />
        </View>
    )
}