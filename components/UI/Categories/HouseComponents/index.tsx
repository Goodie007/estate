import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, FlatList, Image, Pressable, Dimensions, useWindowDimensions} from 'react-native';

interface Nav
{
  name: string;
  uri?: string;
  location?: string;
  price?: string;
  time?: string;
  navigation?: any;
//   style: object;
}

const HouseComponent = () => {
    const navigation = useNavigation()
    
    const nav: Array<Nav> = [
        {
          name: 'Houses',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
          location: 'Agbowo',
          time: '9.00am',
          price: 'N300,000'
        },
        {
          name: 'Apartments',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
          location: 'Agbowo',
          time: '9.00am',
          price: 'N300,000'
        },
        {
          name: 'Condos',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
          location: 'Agbowo',
          time: '9.00am',
          price: 'N300,000'
        },
        {
            name: 'Lands',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
            location: 'Agbowo',
            time: '9.00am',
            price: 'N300,000'
        },
        {
            name: 'Recently Sold',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
            location: 'Agbowo',
            time: '9.00am',
            price: 'N300,000'
        },
        {
            name: 'Rentals',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
            location: 'Agbowo',
            time: '9.00am',
            price: 'N300,000'
        },
        {
            name: 'Buildings',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
            location: 'Agbowo',
            time: '9.00am',
            price: 'N300,000'
        },
        {
            name: 'Town Houses',
            uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
            location: 'Agbowo',
            time: '9.00am',
            price: 'N300,000'
        },

        
    ];

    const HouseTypes = ({ uri, name, location, price, time,}: Nav) => {
        const { width } = useWindowDimensions()
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    paddingBottom: 10,
                    paddingTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 1,
                    minWidth: width ,
                    // width: '100%',
                }}
            >
                 <Image
                    source={{uri}}
                    style={{
                        width: 100,
                        height: 100,
                        borderColor: '#c0c4c2',
                        marginLeft: 10,
                        marginTop: 0,
                    }}
                 /> 
                 <View
                    style={{
                        paddingLeft: 10,
                       width: '65%',
                    }}
                 >
                    <View>
                        <Text>{name}</Text>
                        <Text
                            style={{
                                color: '#cfd1d1',
                                fontWeight: '400',
                            }} 
                        >{time}</Text>
                    </View>
                    <View
                        style={{
                            // width: 220,
                            display: 'flex',
                            flex: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'stretch',
                            marginTop: 30,
                        }}
                    >
                        <Text
                             style={{
                                color: '#cfd1d1',
                                fontWeight: '400',
                            }}
                        >{location}</Text>
                        <Text>{price}</Text>
                    </View>
                 </View>
            </View>
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
                            navigation.navigate('CategoryScreen')
                        }}
                    >
                        <HouseTypes uri={item.uri} name={item.name} location={item.location} price={item.price} time={item.time}    />
                    </Pressable>
                )}
                keyExtractor={ item => item?.name}
             />
           </View>
        </View>
    )
}

export { HouseComponent };