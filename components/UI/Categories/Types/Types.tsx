import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, FlatList, Image, Pressable} from 'react-native';

interface Nav
{
  name: string;
  uri?: string;
//   navigation?: any;
//   style: object;
}

const Types = () => {
    const navigation  = useNavigation()
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
        
    ];

    const HouseTypes = ({ uri, name}: Nav) => {
        return (
            <View
                style={{
                    borderWidth: 1,
                    marginRight: 10,
                    borderRadius: 5,
                    borderColor: '#c0c4c2',
                }}
            >
                <Image
                    source={{uri}}
                    style={{
                        width: 100,
                        height: 50,
                        borderColor: '#c0c4c2'
                    }}
                 />
                 <Text
                    style={{
                        paddingTop: 5,
                        marginBottom: 15,
                        marginLeft: 10,
                    }}
                 >{name}</Text>
            </View>
        )
    }

    return (
        <View>
           <View
            style={{
                marginTop: 10,
                // marginLeft: 10,
            }}
           >
            <Text
                style={{
                    fontWeight: '600',
                    marginBottom: 10,
                }}
            >Categories</Text>
            <FlatList
                style={{
                    overflow: 'hidden',
                }}
                showsHorizontalScrollIndicator={false}
                 data={nav}
                 horizontal={true}
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

export { Types };