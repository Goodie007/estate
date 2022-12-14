/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { LoginPage } from '../components/UI/auth/LoginPage';
import { SignUpPage } from '../components/UI/auth/SignUpPage';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Home } from '../screens/Home';
import { Catelogs } from '../components/UI/Categories/Catelogs';
import { LoginScreen } from '../screens/LoginScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Profile from '../screens/Profile';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Maps from '../components/UI/Maps';
import { HouseComponent } from '../components/UI/Categories/HouseComponents';
import CategoryScreen from '../components/UI/Categories/CategoryScreen';
import Names from '../components/UI/ProfilePage/Names';
// import { MaterialIcons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SignUp" component={SignUpPage} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
      <Stack.Screen 
        name="CategoryScreen" 
        component={CategoryScreen} 
        options={{
          title: '',
        }}
       />
      <Stack.Screen name="HouseComponent" component={HouseComponent}
         options={{ 
          title: 'Houses',
          headerTitleAlign: 'center', 
          
      }} 
      />
      <Stack.Screen name="Names" component={Names} options={{title: 'Edit Profile', headerTitleAlign: 'center'}} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
      }}>
       <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation}: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="#0020be" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Catelogs"
        component={Catelogs}
        options={({ navigation}: RootTabScreenProps<'Catelogs'>) => ({
          title: 'Categories',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color="#0020be" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
       />
        <BottomTab.Screen
          name="Maps"
          component={Maps}
          options={({ navigation}: RootTabScreenProps<'Maps'>) => ({
            title: 'Maps',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color }) => <Entypo name="map" size={24} color="#0020be" />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      {/* <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color="#0020be" />,
          }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
