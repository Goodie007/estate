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
                // onRequestClose={() => {
                //     close()
                // }}
               
            >
                <Pressable
                    onPress={close}
                >
                <View
                    style={{
                        width,
                        height,
                        backgroundColor: '#000',
                        opacity: 0.8,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingLeft: 70,
                    }}
                >
                  
                    <View
                        style={{
                            width: 200,
                            height: 120,
                            backgroundColor: '#ffffff',
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
                                    // borderBottomWidth: 1,
                                    paddingBottom: 10,
                                }}
                            >Do you want to remove this listing?</Text>
                            <View
                                style={{
                                    width: '100%',
                                    borderBottomWidth: 1,
                                    backgroundColor: 'grey'
                                    
                                }}
                            ></View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    paddingTop: 10,
                                    backgroundColor: '#d5e3f2',
                                    borderRadius: 5
                                   
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'red',
                                        fontWeight: '500',
                                    }}
                                >Yes</Text>
                                <View
                                    style={{
                                        height: 40,
                                        width: 1.5,
                                        backgroundColor: 'grey',
                                        marginTop: -10,
                                    }}
                                ></View>
                                <Text
                                    style={{
                                        color: '#5295e3',
                                        fontWeight: '500',
                                    }}
                                >No</Text>
                            </View>
                            </View>
                            </View>
                        </Pressable>            
            </Modal>
        </View>
    )
}