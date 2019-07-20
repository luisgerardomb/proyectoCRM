import React from 'react';
import {Autentication} from './modulos/FireBase';
import Menu from './modulos/Menu'; 
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {

    componentDidMount(){
        Autentication.onAuthStateChanged(function(user) {
            if (user) {
             Actions.Screen();
            } 
        });
    }

    render() {
        return (<Menu />);
    }
}   