import * as React from 'react';
import MapView from 'react-native-maps';
import { Text, View, Dimensions } from 'react-native';


export default function Maps() {
    return (
        <View>
            <MapView
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
             />
        </View>
    )
}
