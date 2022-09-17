import React from 'react'
import { View, Text, Image }  from 'react-native'
import { EvilIcons } from '@expo/vector-icons';


export default function ProfilePage() {
    return (
        <View
            style={{
                // justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
            }}
        >
          
            <Image
                source={{ uri: 'https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg'}}
                style={{
                    height: 120,
                    width: 120,
                    borderRadius: 120 / 2,
                }}
             />
             <View
                style={{
                    position: 'absolute',
                    backgroundColor: 'grey',
                    height: 30,
                    width: 30,
                    borderRadius: 30 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 105,
                    right: 120,
                    opacity: 0.6,
                }}
             >
                <EvilIcons name="camera" size={24} color="#fff" />
             </View>
             <Text
                style={{
                    paddingTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#545454'
                }}
             >Mark Kwain</Text>
        </View>
    )
}