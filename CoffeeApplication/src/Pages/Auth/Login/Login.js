import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import styles from './Login.style';

import Input from '../../../Component/LoginScreen/LoginInput';
import GButton from '../../../Component/LoginScreen/LoginGirişButton';
import KButton from '../../../Component/LoginScreen/LoginTextButton';
import LottieLogin from "../../../Component/Lottie/Login";

const initialFormValues = {
    usermail: '',
    password: '',
};


const Login = ({ navigation }) => {

    const KayıtOlPress = () => {
        navigation.navigate('Sign');
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
        } catch (error) {
            console.log(error.code)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.lottiecontainer}>
                <LottieLogin />
            </View>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
                    <>
                        <View style={[
                            styles.input_container,
                            {
                                borderColor:
                                    values.usermail < 1 || Validator.validate(values.usermail)
                                        ? '#1E221E'
                                        : '#FF0000',
                            }
                        ]}>
                            <Input
                                placeholder="E-Mail"
                                icon="email"
                                onType={handleChange('usermail')}
                                value={values.usermail}
                                onBlur={handleBlur('usermail')}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                        </View>
                        <View style={[
                            styles.input_container,
                            {
                                borderColor:
                                    1 > values.password || values.password.length > 5
                                        ? '#1E221E'
                                        : '#FF0000',
                            }
                        ]}>
                            <Input
                                placeholder="Password"
                                icon="onepassword"
                                onType={handleChange('password')}
                                value={values.password}
                                onBlur={handleBlur('password')}
                                textContentType={'password'}
                                isSecure
                            />
                        </View>

                        <View style={styles.gg}>
                            <KButton title="Şifreni mi Unuttun?" onPress={null} />
                        </View>


                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <View style={stylis.container(isValid)}>
                                <Text style={stylis.title}>Giriş Yap</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <View style={styles.signcontainer}>
                <Text style={styles.signtext}>Hesabınız yok mu?</Text>
                <KButton title="Kayıt Ol" onPress={KayıtOlPress} />
            </View>
        </View>
    )
}
export default Login;


const stylis = StyleSheet.create({
    container: isValid => ({
        backgroundColor: isValid ? "#D17742" : "#494F4E",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 10,
    }),
        title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D181A'
}
})