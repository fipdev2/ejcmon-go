import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pokédex from '../pages/Pokédex';
import MeusPokémons from '../pages/MeusPokémons';
import PerfilStack from './PerfilStack';
import { Image } from 'react-native'

function Tabs() {
    let icon: string;
    const Tab = createBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: 95 },
                    tabBarShowLabel: false
                }}>
                <Tab.Screen
                    name="Pokédex"
                    component={Pokédex}
                    options={{
                        tabBarIcon: ({ focused = true }: any) => {
                            icon = focused ? 'ActivePokedex' : 'OutlinePokedex'
                            return <Image source={require(`../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        },
                        headerShown: false

                    }} />
                <Tab.Screen
                    name="Meus Pokémons"
                    component={MeusPokémons}
                    options={{
                        tabBarIcon: ({ focused = true }: any) => {
                            icon = focused ? 'ActivePokeball' : 'OutlinePokeball'
                            return <Image source={require(`../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        },
                        headerShown: false

                    }} />
                <Tab.Screen
                    name='Perfil'
                    component={PerfilStack}
                    options={{
                        tabBarIcon: ({ focused = true }: any) => {
                            icon = focused ? 'ActiveUser' : 'OutlineUser'
                            return <Image source={require(`../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        },
                        headerShown: false

                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default Tabs;