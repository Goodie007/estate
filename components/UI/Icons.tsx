import React from 'react'
import {View, Text} from 'react-native'

interface IconProps {
    type: string,
    color?: string,
}

type SingleIcon = Omit<IconProps, "type">;

const List = ({ color}: SingleIcon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill="#fff" d="M0 0L0 512L512 512L512 0L0 0z" color={ color} />
        </svg>
    )
}


export default function Icons ({ color, type }: IconProps) {
    switch ( type ) {
        case 'list':
            return <List color={ color } />
    }
}