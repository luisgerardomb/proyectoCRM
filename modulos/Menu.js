import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Registro from './Registro';
import Login from './Login';
import Screen from './Screen';
import HomeApp from './HomeApp';

export default class Menu extends React.Component {
    
    render() {
    
            return( 
                    <Router navigationBarStyle={{ backgroundColor: '#40C4FF' }}>
                        <Scene key="root"> 
                            <Scene key="HomeApp" component={HomeApp} hideNavBar={true}/>
                            <Scene key="Login" component={Login} hideNavBar={true}/> 
                            <Scene key="Registro" component={Registro} hideNavBar={true}/>
                            <Scene key="Screen" component={Screen} hideNavBar={true}/>
                        </Scene>
                    </Router>
                    )
        }
    }