import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import colors from "./utility/colors";
import {MaterialIcons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Options from "./screens/Options";

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}}/>
)

const Stack = createStackNavigator()
const ContactScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {backgroundColor: 'tomato'},
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name='Contacts' component={Contacts}
                options={{title: "Contacts"}}/>
            <Stack.Screen name='Profile' component={Profile}
                options={({route}) =>{
                    const {contact} = route.params;
                    const {name} = contact;   
                    return {
                        title: name.split(' ')[0],
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.blue
                        }
                    }
            }}  
            />
        </Stack.Navigator>
    );
}

const FavoritesScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen name="Favorites" component={Favorites} options={{title: 'Favorites'}} />
            <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}} />
        </Stack.Navigator>
    );
}

const UserScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName=" User">
            <Stack.Screen name="User" component={User}
                options={{
                    headerTitle:'Me',
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: colors.blue},
                    headerRight: () => (
                        <MaterialIcons name="settings" size={24}
                            style={{color:' white', marginRight: 10}}
                            onPress={() => navigation.navigate('Options')}
                        />
                    ),
                }}    
            />
            <Stack.Screen name='Options' component={Options} options={{title: "Options"}}/>
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Contacts"
                barStyle ={{backgroundColor: colors.blue}}
                labeled={false}
                activeColor={colors.greyLight}
                inactiveColor={colors.greyDark}
            >
                <Tab.Screen name="Contacts" component={ContactScreens}
                 options={{ tabBarIcon: getTabBarIcon('list'), }} />
                <Tab.Screen name="Favorites" component={FavoritesScreens}
                 options={{ tabBarIcon: getTabBarIcon('star'), }} />
                 <Tab.Screen name="User" component={UserScreen}
                 options={{ tabBarIcon: getTabBarIcon('person'), }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator; 