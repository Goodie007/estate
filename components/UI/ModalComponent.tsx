import React, { useState } from 'react'
import { Modal, Pressable, Text, View, Dimensions } from 'react-native'

interface ModalProps {
    visible: boolean;
    close: () => void;
}

export default function ModalComponent({visible, close}: ModalProps) {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const [ showModal, setShowModal ] = useState(false)
    
    return (
        <View
            style={{
                
            }}
        >
            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    close()
                }}
               
            >
                <Pressable
                    onPress={close}
                >
                <View
                    style={{
                        width,
                        height,
                        backgroundColor: '#000',
                        opacity: 0.5,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingLeft: 70,
                    }}
                >
                  
                    <View
                        style={{
                            width: 200,
                            height: 120,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                           
                        
                        }}
                    >
                       
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    paddingLeft: 50,
                                    paddingTop: 10,
                                   
                                }}
                            >Delete listings</Text>
                            <Text
                                style={{
                                    paddingTop: 0,
                                    paddingLeft: 20,
                                    width: '99%',
                                    borderBottomWidth: 1,
                                    paddingBottom: 5,
                                }}
                            >Do you want to remove this listing?</Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    paddingTop: 10,
                                   
                                }}
                            >
                                <Text
                                    style={{
                                        borderEndWidth: 1,
                                    }}
                                >Yes</Text>
                                <Text>No</Text>
                            </View>
                            </View>
                            </View>
                        </Pressable>            
            </Modal>
        </View>
    )
}