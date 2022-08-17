import React from "react";
import {View, Text, FlatList, Image, Pressable} from 'react-native';

interface Nav
{
  name: string;
  uri?: string;
//   style: object;
}

const Types = () => {
    const nav: Array<Nav> = [
        {
          name: 'Top Up',
          uri: 'https://i.pinimg.com/1200x/a5/c1/f4/a5c1f47f6b739053b9d4d7869c72f3f7.jpg',
        },
        {
          name: 'Send',
          uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1657680127/Frame_1388_1_r4idtw.svg',
        },
        {
          name: 'Recieve',
          uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1657680274/Frame_1388_2_zzfway.svg',
        },
        {
            name: 'Buy',
            uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1657680431/Frame_1388_3_xgg3gv.svg',
          },
        // {
        //   name: 'Sell',
        //   uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1658481778/Frame_1388_7_said6q.svg',
        // },
        // {
        //   name: 'Swap',
        //   uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1658481815/Frame_1388_8_g5gybe.svg',
        // },
        // {
        //   name: 'Withdraw',
        //   uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1658481842/Frame_1388_9_jigvmo.svg',
        // }
        
    ];

    const HouseTypes = ({ uri, name}) => {
        return (
            <View
                style={{
                    borderWidth: 1,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: 'grey',
                }}
            >
                <Image
                    source={uri}
                    style={{
                        width: 100,
                        height: 50,
                    }}
                 />
                 <Text
                    style={{
                        paddingTop: 10,
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
                    fontWeight: '600'
                }}
            >Categories</Text>
            <FlatList
                style={{
                    overflow: 'hidden',
                }}
                 data={nav}
                 horizontal={true}
                 renderItem={({ item, index,  }) => (
                    <Pressable
                        key={item.name}
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