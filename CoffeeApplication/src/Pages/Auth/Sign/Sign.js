import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import styles from './Sign.style';

import Input from '../../../Component/LoginScreen/LoginInput';
import KButton from '../../../Component/LoginScreen/LoginGirişButton';
import GButton from '../../../Component/LoginScreen/LoginTextButton';
import LottieSign from '../../../Component/Lottie/Sign';

const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
};

const Sign = ({ navigation }) => {
    const GirişYapPress = () => {
        navigation.goBack();
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });

    const handleFormSubmit = async (formValues) => {
        try {
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            navigation.navigate('Login');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.lottiecontainer}>
                <LottieSign />
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={LoginFormSchema}>
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
                                placeholder="E-postanızı giriniz..."
                                icon="email"
                                onType={handleChange('usermail')}
                                value={values.usermail}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                onBlur={handleBlur('usermail')}
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
                                placeholder="Şifrenizi giriniz..."
                                icon="onepassword"
                                onType={handleChange('password')}
                                value={values.password}
                                onBlur={handleBlur('password')}
                                isSecure
                            />
                        </View>
                        <View style={[
                            styles.input_container,
                            {
                                borderColor:
                                    1 > values.repassword || values.repassword.length > 5
                                        ? '#1E221E'
                                        : '#FF0000',
                            }
                        ]}>
                            <Input
                                placeholder="Şifrenizi tekrar giriniz..."
                                onType={handleChange('repassword')}
                                value={values.repassword}
                                icon="onepassword"
                                onBlur={handleBlur('repassword')}
                                isSecure
                            />
                        </View>
                        
                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <View style={stylis.container(isValid)}>
                            <Text style={stylis.title}>Kayıt Ol</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <View style={styles.signcontainer}>
                <Text style={styles.signtext}>Hesabınız yok mu?</Text>
                <GButton title="Giriş Yap" onPress={GirişYapPress} />
            </View>
        </View>
    )
}
export default Sign;

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
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0D181A'
    }
})