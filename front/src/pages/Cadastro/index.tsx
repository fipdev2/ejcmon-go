import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

import { StyleSheet } from 'react-native';

import {
    BackgroundCadastro, BotaoDeEntrar, ChamadaLogin,
    Formulario, LogoApp, Rodape, WelcomeText, InputForm,
    Button, TextButton, TextError
} from './style';
import { useNavigation } from '@react-navigation/native';

interface FormData {
    nome: string,
    email: string,
    cpf: string,
    senha: string,
    confirmarSenha: string
}

export default function Cadastro() {

    const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({ mode: "onTouched" });
    const navigation = useNavigation();
    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <BackgroundCadastro>

            <WelcomeText>Seja bem-vindo a</WelcomeText>
            <LogoApp source={require('../../assets/ejcmongo_logo.svg')}></LogoApp>

            <Formulario>
                <Controller
                    control={control}
                    name='nome'
                    defaultValue=''
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                            placeholder='Nome'
                            maxLength={35}
                        />
                    )}
                    rules={{
                        required: "Nome é obrigatório",
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/i,
                            message: 'Somente letras e números permitidos'
                        },
                    }}
                />
                {errors.nome && <TextError>{errors.nome.message}</TextError>}

                <Controller
                    control={control}
                    name='email'
                    defaultValue=''
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                            placeholder='Email'
                            maxLength={256}
                        />
                    )}
                    rules={{
                        required: "Email é obrigatório",
                        pattern: {
                            value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Formato de email inválido"
                        },
                    }}
                />
                {errors.email && <TextError>{errors.email.message}</TextError>}

                <Controller
                    control={control}
                    name='cpf'
                    defaultValue=''
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInputMask
                            style={styles.input}
                            type={"cpf"}
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                            placeholder='CPF'
                        />
                    )}
                    rules={{
                        required: "CPF é obrigatório",
                        minLength: {
                            value: 14,
                            message: 'CPF inválido'
                        },
                    }}
                />
                {errors.cpf && <TextError>{errors.cpf.message}</TextError>}

                <Controller
                    control={control}
                    name='senha'
                    defaultValue=''
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            secureTextEntry={true}
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                            placeholder='Senha'
                            maxLength={18}
                        />
                    )}
                    rules={{
                        required: "Senha é obrigatória",
                        minLength: {
                            value: 6,
                            message: 'Senha muito curta'
                        },
                    }}
                />
                {errors.senha && <TextError>{errors.senha.message}</TextError>}

                <Controller
                    control={control}
                    name='confirmarSenha'
                    defaultValue=''
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            secureTextEntry={true}
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                            placeholder='Confirme sua senha'
                            maxLength={18}
                        />
                    )}
                    rules={{
                        validate: {
                            confirmarSenha: (value) => {
                                const { senha } = getValues();
                                return senha === value || 'As senhas não coincidem';
                            }
                        }
                    }}
                />
                {errors.confirmarSenha && <TextError>{errors.confirmarSenha.message}</TextError>}

            </Formulario>

            <Button onPress={handleSubmit(onSubmit)}>
                <TextButton>Cadastrar-se</TextButton>
            </Button>

            <Rodape>
                <ChamadaLogin>Já possui uma conta?</ChamadaLogin>
                <BotaoDeEntrar
                    onPress={() => navigation.navigate('Login' as never)}>Login</BotaoDeEntrar>
            </Rodape>

        </BackgroundCadastro>
    )
}

const styles = StyleSheet.create({
    input: {
        placeholderTextColor: "white",
        backgroundColor: "#2B3151",
        width: 333,
        height: 51,
        borderRadius: 10,
        fontSize: 16,
        color: "white",
        paddingLeft: 32,
    }
})