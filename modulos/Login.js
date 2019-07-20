import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback,
    StatusBar, TextInput, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import {Autentication} from './FireBase'

export default class Login extends Component {
    state = {emailAdmin:'',passwordAdmin:''}

    Autenticar = () => {
        const emailAdmin= this.state.emailAdmin;
        const passwordAdmin = this.state.passwordAdmin;

        Autentication.signInWithEmailAndPassword(emailAdmin, passwordAdmin).then(function(accept) {

        }).catch(function(error){
            Alert.alert(
                'Incorrecto',
                String(error),
                [
                    {text: 'OK', onPress: () => alert()}
                ],
                { cancelable: false }
            );
        });

    }

    render() {
        return (
           <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../imagenes/logo.png')}  style={{width: 110, height: 110}}/>
                    <Text style={styles.title}>ComprApp</Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <View style={styles.infoContainer}>
                        <TextInput style={styles.input}
                           placeholder="Usuario"
                           placeholderTextColor='rgba(255,255,255,0.8)'
                           keyboardType='email-address'
                           returnKeyType='next'
                           autoCorrect={false}
                           onChangeText={(emailAdmin)=>this.setState({emailAdmin:emailAdmin})}
                           onSubmitEditing={() => this.refs.txtPassword.focus()}
                        />
                        <TextInput style={styles.input}
                           placeholder="Contraseña"   
                           placeholderTextColor='rgba(255,255,255,0.8)'
                           returnKeyType='go' 
                           secureTextEntry
                           autoCorrect={false}
                           onChangeText={(passwordAdmin)=>this.setState({passwordAdmin:passwordAdmin})}
                           ref={"txtPassword"}
                        />
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.Autenticar}>
                            <Text style={styles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>                  
                            <Text style={styles.register} onPress={()=>Actions.Registro()}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View> 
            </TouchableWithoutFeedback> 
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        marginBottom:10
    },
    infoContainer: {
        flex:1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20
    },
    input: {
        height: 45,
        width:300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom:20,
        paddingHorizontal: 10,
        borderRadius: 45
    },
    buttonContainer:{
        backgroundColor:'#f7c744',
        paddingVertical:15,
        borderRadius:40
    },
    buttonText:{
        textAlign:'center',
        color:'rgb(32,53,70)',
        fontWeight:'bold',
        fontSize:18
    },
    register:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
})