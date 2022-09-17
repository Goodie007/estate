import React, {useState, useEffect} from 'react'
import { View, Text, Image, Button }  from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// interface ImageProps {
//     uri: string;
// }


export default function ProfilePage() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
           setImage(result.uri);
        }
      };

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
                <EvilIcons name="camera" size={24} color="#fff" onPress={pickImage} />
             </View>
             <Text
                style={{
                    paddingTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#545454',
                    
                }}
             >Mark Kwain</Text>

            {/* <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: "red" }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                <Text>Hwllo</Text>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View> */}
        </View>
    )
}