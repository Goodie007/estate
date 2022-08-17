import React from 'react';
import { TouchableOpacity, View, Text, StyleProp } from 'react-native';


interface PlainButtonProps {
    children?: React.ReactNode
    label?: string
    onPress: any
    showLoading?: boolean
    labelStyle?: any;
}

const Button = ({ 
    children,
    label = '',
    onPress,
    labelStyle,
    ...props
}: PlainButtonProps) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                <Text 
                    style={{...labelStyle}}
                    {...props}
                >
                    {label}
                    {children ? children : null}
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export { Button };