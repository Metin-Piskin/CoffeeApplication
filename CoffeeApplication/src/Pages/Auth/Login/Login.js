import React from "react";
import { View, Text } from "react-native";
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import styles from './Login.style';

import Input from '../../../Component/LoginScreen/LoginInput';
import GButton from '../../../Component/LoginScreen/LoginGirişButton';
import KButton from '../../../Component/LoginScreen/LoginTextButton';

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

                        <GButton title="Giriş Yap" onPress={handleSubmit} />
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