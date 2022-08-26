import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Tabs from './Tabs';
const Stack = createStackNavigator();
function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login" 
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default Router;