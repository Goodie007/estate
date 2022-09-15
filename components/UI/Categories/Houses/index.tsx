import { useNavigation } from "@react-navigation/native";
import { platform } from "os";
import React from "react";
import {View, Text, FlatList, Image, Pressable,
    ImageProps as DefaultImageProps,
  ImageURISource,
  ScrollView,
  useWindowDimensions,
  Dimensions,
  Platform,
} from 'react-native';
import { Button } from "../../Buttons/Button";

interface ItemsProps {
    name: string,
    uri: string,
    ratings: number | string,
    location: string,
}
type ImageProps = DefaultImageProps & {
    image: ImageURISource;
  };

const Items: Array<ItemsProps>  = [
    {
        name: '1500 Plk St',
        location: 'San Franscisco',
        uri: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
        ratings: 5,
    },
    {
        name: '1500 Pol St',
        location: 'San Franscisco',
        uri: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?',
        ratings: 3,
    },
    {
        name: '1500 Polk St',
        location: 'San Franscisco',
        uri: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600',
        ratings: 5
    },
    {
        name: '1500 Pok St',
        location: 'San Franscisco',
        uri: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600',
        ratings: 4,
    },
]

const HousesTypes = ({uri, name, location, ratings}: ItemsProps,) => {
    return (
        <View
            style={{
                marginBottom: 10,
                marginTop: 5,
                marginRight: 10,
                justifyContent: "center",
                
            }}
        >
            <Image
                source={{uri}}
                style={{
                    width: 165,
                    height: 100,
                    borderRadius: 3
                }}
             />
             <View
                style={{
                    // justifyContent: "center"
                }} 
             >
                <Text>{name}</Text>
                <Text>{location}</Text>
                <Text>{ratings}</Text>
             </View>
        </View>
    )
}


const Houses = () => {
    const navigation = useNavigation()
    const  height = Dimensions.get('window').height
    const width =  Dimensions.get('window').width
    return(
        <View>
            <View
                style={{
                    marginTop: 20,
                    height: height / 2,
                }}
            >
                <Text
                    style={{
                        fontWeight: '600'
                    }}
                >Houses</Text>
                 <FlatList
                    data={Items}
                    // horizontal={true}
                    numColumns={2}
                    renderItem={({ item, index,  }) => (
                        <Pressable
                            key={item.name}
                            onPress={() => {
                                navigation.navigate('HouseComponent')
                            }}
                        >
                            <HousesTypes uri={item.uri} name={item.name} ratings={item.ratings} location={item.location}    />
                        </Pressable>
                    )}
                    keyExtractor={ item => item?.name}
                 /> 
                 {/* <ScrollView key={i}>
                    {}
                 </ScrollView> */}
            </View>
            <Button 
                onPress={() => navigation.navigate('HouseComponent')} 
                labelStyle={{ 
                    color: "blue",
                    borderRadius: 5, 
                    borderWidth: 1, 
                    borderColor: "blue",
                    width: 320,
                    height: 40,
                    paddingTop: 10,
                    alignContent: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginRight: 5,
                    marginTop: 50,
                    }}  
                label="Show all"
            />
        </View>
    )
}

export { Houses }