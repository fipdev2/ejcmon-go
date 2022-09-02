import * as React from 'react';
//navegação em stack
import { createStackNavigator } from '@react-navigation/stack';
//páginas
import Perfil from '../Perfil';
import EditarPerfil from '../EditarPerfil';
function PerfilStack() {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name='Editar Perfil'
                    component={EditarPerfil} />
            </Stack.Navigator>
        </>);
}

export default PerfilStack;