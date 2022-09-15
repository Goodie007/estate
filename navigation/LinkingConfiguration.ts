/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Catelogs: {
            screens: {
              Catelog: 'Categories',
            }
          },
          Maps: {
            screens: {
              Maps: 'Maps'
            }
          }
        },
      },
      Modal: 'modal',
      ModalComponent: 'modal',
      NotFound: '*',
      
    },
  },
};

export default linking;
