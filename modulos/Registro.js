import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,TextInput, SafeAreaView, Keyboard,ScrollView,
        TouchableOpacity, KeyboardAvoidingView, Alert, Image} from 'react-native';
import {Autentication,firebaseDatabase} from './FireBase';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class Registro extends React.Component {
    state = {curpAdmin:'' ,nssAdmin:'' ,fechaNacimientoAdmin:'',areaTrabajoAdmin:'',nombreAdmin:'', direccionAdmin:'', telefonoAdmin:'', passwordAdmin:'', emailAdmin:''}
    
    
    constructor(){
        super();
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    
    verificar = () => {
        if(this.state.curpAdmin==""){
            alert("Inserte su CURP");
        }else if(this.state.nssAdmin==""){
            alert("Inserte su NSS");
        }else if(this.state.fechaNacimientoAdmin==""){
            alert("Inserte Fecha de nacimiento");
        }else if(this.state.areaTrabajoAdmin==""){
            alert("Inserte una Area de trabajo");
        }else if(this.state.nombreAdmin==""){
            alert("Inserte Nombre Completo");
        }else if(this.state.direccionAdmin==""){
            alert("Inserte un Domicilio");
        }else if(this.state.telefonoAdmin==""){
            alert("Inserte un numero Telefonico");
        }else if(this.state.passwordAdmin==""){
            alert("Inserte una Contraseño");
        }else if(this.state.emailAdmin==""){
            alert("Inserte un Correo Electronico");
        }else{
            this.send();
        }
    }
      
    send = () => {
        const curpAdmin = this.state.curpAdmin;
        const nssAdmin = this.state.nssAdmin;
        const fechaNacimientoAdmin = this.state.fechaNacimientoAdmin;
        const areaTrabajoAdmin = this.state.areaTrabajoAdmin;
        const nombreAdmin = this.state.nombreAdmin;
        const direccionAdmin = this.state.direccionAdmin;
        const telefonoAdmin = this.state.telefonoAdmin;
        const passwordAdmin = this.state.passwordAdmin;
        const emailAdmin = this.state.emailAdmin;

        Autentication.createUserWithEmailAndPassword(emailAdmin, passwordAdmin).then(function(accept){
            var admin = Autentication.currentUser;
            admin.updateProfile({
                displayName: admin,
            })
            const idAdmin = admin.uid;
            
            let infoAdmin = firebaseDatabase.ref('administrador/' + idAdmin);
            infoAdmin.set({
                nombreAdmin:nombreAdmin,
                areaTrabajoAdmin:areaTrabajoAdmin,
                direccionAdmin:direccionAdmin,
                curpAdmin:curpAdmin,
                nssAdmin:nssAdmin,
                fechaNacimientoAdmin:fechaNacimientoAdmin,
                telefonoAdmin:telefonoAdmin,
                emailAdmin:emailAdmin,
                Contraseña:passwordAdmin
            })

        }).catch(function(error) {
            Alert.alert(
                'INCORRECTO',
                String(error),
                [
                    {text: 'OK', onPress: () => console.log("OK")}
                ],
                { cancelable: false }
            )
      });
    }      

    render() {    
        return (
            
            <SafeAreaView style={styles.container}>
            
            <TouchableWithoutFeedback style={styles.container}
                                      onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Registro de Administrador</Text>
                </View>
                
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                
                <View  style={styles.infoContainer} >
                    <TextInput style={styles.input}
                       placeholder="Nombre"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(nombreAdmin)=>this.setState({nombreAdmin:nombreAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                    <TextInput style={styles.input}
                       placeholder="Area de trabajo"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(areaTrabajoAdmin)=>this.setState({areaTrabajoAdmin:areaTrabajoAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                   
                    <TextInput style={styles.input}
                       placeholder="Domicilio"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(direccionAdmin)=>this.setState({direccionAdmin:direccionAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                     <TextInput style={styles.input}
                       placeholder="CURP"
                       maxLength={18}
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(curpAdmin)=>this.setState({curpAdmin:curpAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                    <TextInput style={styles.input}
                       placeholder="NSS"
                       maxLength={13}
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(nssAdmin)=>this.setState({nssAdmin:nssAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                    <TextInput style={styles.input}
                       placeholder="Fecha de nacimiento"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       onChangeText={(fechaNacimientoAdmin)=>this.setState({fechaNacimientoAdmin:fechaNacimientoAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                    <TextInput style={styles.input}
                       placeholder="Telefono"
                       placeholderTextColor='rgba(255,255,255,0.8)'
                       keyboardType='go'
                       returnKeyType='next'
                       autoCorrect={false}
                       keyboardType='numeric'
                       onChangeText={(telefonoAdmin)=>this.setState({telefonoAdmin:telefonoAdmin})}
                       onSubmitEditing={() => this.refs.txtPassword.focus()}
                    />
                    <TextInput style={styles.input}
                       placeholder="Correo Electronico"
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
                    
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.verificar}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>                  
                        <Text style={styles.iniciar} onPress={()=>Actions.Login()}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    
                </View> 
                
                </KeyboardAvoidingView>
                
            </View> 
            </TouchableWithoutFeedback> 
            </SafeAreaView> 
              
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: -280
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5
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
        marginBottom:15,
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
    iniciar:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
});