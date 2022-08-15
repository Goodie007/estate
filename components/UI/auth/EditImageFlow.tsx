import React from "react";
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';

enum Views {
    DEFAULT_VIEW = 1,
    IMAGE_VIEW = 2,
    REMOVE_PROFILE_PHOTO_VIEW = 3,
}


const EditImageFlow = () => {
    return (
        <View>
            <Modal
                transparent={true}
                visible={undefined}
            >
                <View></View>
            </Modal>
        </View>
    )
}

export { EditImageFlow };