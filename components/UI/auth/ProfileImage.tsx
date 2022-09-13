import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import  ImagePicker  from 'react-native-image-crop-picker';

interface ProfileImageProps {
    props: any
}

const ProfileImage  = () => {
    // const {props } = prop
    // const [uri, setUri ] = useState(props.source?.uri || undefined)

//    const pickImage = () => {
//     ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true
//     }).then((image) => {
//         console.log(image);
//         props.onChange?.(image);
//     })
//    }
    return (
        <View>
            <TouchableOpacity 
                onPress={undefined}
            >
                <Image 
                    source={{ uri: 'https://res.cloudinary.com/easyshare-africa/image/upload/v1658481815/Frame_1388_8_g5gybe.svg'}}
                    style={{
                        height: 150,
                        width: 150,
                        backgroundColor: 'grey',
                        borderRadius: 75,
                        marginTop: 30,
                        marginLeft: 0,
                        alignSelf: 'center'
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export { ProfileImage };