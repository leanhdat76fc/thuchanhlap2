import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import colors from "../utility/colors";
import {MaterialIcons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import Options from "../screens/Options";
import { createDrawerNavigator } from "@react-navigation/drawer";

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}}/>
)

const Stack = createStackNavigator()
const ContactScreens = () => {
        return (
            <Stack.Navigator initialRouteName="Contacts" screenOptions={
                {
                    headerShown: false
                }
            }
            >
                <Stack.Screen name='Contacts' component={Contacts}
                    options={{ title: "Contacts" }} />
                <Stack.Screen
                    name='Profile' component={Profile} options={({ route }) => {
                        const { contact } = route.params; const { name } = contact;
                        return {
                            title: name.split(' ')[0], headerTintColor: 'white', headerStyle: {
                                backgroundColor: colors.blue,
                            }
                        };
                    }
                    }
                />
            </Stack.Navigator>
        )
    }
    
    const FavoritesScreens = () => {
        return (
            <Stack.Navigator initialRouteName="Favorites" screenOptions={
                {
                    headerShown: false
                }
            }
            >
                <Stack.Screen name='Favorites' component={Favorites}
                    options={{ title: "Favorites" }} />
                <Stack.Screen name='Profile' component={Profile} options={{ title: "Profile" }} />
            </Stack.Navigator>
        );
    }
    
    const UserScreens = () => {
        return (
            <Stack.Navigator initialRouteName="User" screenOptions={
                {
                    headerShown: false
                }
            }
            >
                <Stack.Screen
                    name='User'
                    component={User}
                    options={{
                        headerTitle: "Me", headerTintColor: 'white', headerStyle: {
                            backgroundColor: colors.blue,
                        },
                        headerRight: () => (
                            <MaterialIcons name="settings" size={24}
                                style={{ color: 'white', marginRight: 10 }} onPress={() => navigation.navigate('Options')}
                            />
                        ),
                    }} />
                <Stack.Screen name='Options' component={Options} options={{ title: "Options" }} />
            </Stack.Navigator>
        );
    }
    
    
    const Drawer = createDrawerNavigator();
    
    const DrawerNavigator = () => {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='ContactsScreens'
                >
                    <Drawer.Screen name="ContactsScreens" component={ContactScreens} options={{
                        drawerIcon: getDrawerItemIcon('list'),
                    }}
                    />
                    <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens} options={{
                        drawerIcon: getDrawerItemIcon('star'),
                    }}
                    />
                    <Drawer.Screen name="UserScreens" component={UserScreens} options={{
                        drawerIcon: getDrawerItemIcon('person'),
                    }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }

export default DrawerNavigator; 