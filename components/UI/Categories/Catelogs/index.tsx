import React from "react";
import {View, Text, FlatList, Image, Pressable, ImageBackground} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

interface Nav
{
  name: string;
  uri?: string;
//   style: object;
}

const Catelogs = () => {
    const  navigation  = useNavigation()
    const nav: Array<Nav> = [
        {
          name: 'Houses',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
          name: 'Apartments',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
          name: 'Condos',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
            name: 'Lands',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
            name: 'Recently Sold',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
            name: 'Rentals',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
            name: 'Buildings',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
            name: 'Town Houses',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },

        
    ];

    const HouseTypes = ({ uri, name}: Nav) => {
        return (
            <ImageBackground
                source={{ uri }}
                style={{
                    borderWidth: 1,
                    // marginTop: 20,
                    marginRight: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                    borderColor: '#c0c4c2',
                    width: 339,
                    height: 100,
                    display: 'flex',
                    backgroundColor: '#141414',
                    opacity: 0.8,
                    
                }}
            >
                {/* <Image
                    source={{uri}}
                    style={{
                        width: 339,
                        height: 100,
                        borderColor: '#c0c4c2'
                    }}
                 /> */}
                 <View>
                  <Text
                    style={{
                        paddingTop: 40,
                        // marginBottom: 15,
                        // marginLeft: 10,
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: '400',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                 >{name}</Text> 
                 </View>
            </ImageBackground>
        )
    }

    return (
        <View>
           <View
            style={{
                marginTop: 0,
                // marginLeft: 10,
            }}
           >
            {/* <Text
                style={{
                    fontWeight: '600',
                    marginBottom: 10,
                }}
            >Categories</Text> */}
            <FlatList
                style={{
                    // overflow: 'scr',
                }}
                showsHorizontalScrollIndicator={false}
                 data={nav}
                 horizontal={false}
                 renderItem={({ item, index,  }) => (
                    <Pressable
                        key={item.name}
                        onPress={() => {
                            navigation.navigate('HouseComponent')
                        }}
                    >
                        <HouseTypes uri={item.uri} name={item.name}    />
                    </Pressable>
                )}
                keyExtractor={ item => item?.name}
             />
           </View>
        </View>
    )
}

export { Catelogs };