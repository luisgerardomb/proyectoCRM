import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export default class Splash extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          progress: 0,
          indeterminate: true,
        };
    }

      componentDidMount() {
        this.animate();
      }


      animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          setInterval(() => {
            progress += Math.random() / 5;
            if (progress > 1) {
              progress = 1;
            }
            this.setState({ progress });
          }, 500);
        }, 1500);
      }


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../imagenes/logo.png')}  style={{width: 110, height: 110}}/> 
                <Progress.Bar
                    style={styles.progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                />
                    <Animatable.Text animation="fadeInDown">
                        <Text style={styles.title}>CRM</Text>
                    </Animatable.Text> 
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        paddingTop: 45,
        fontSize: 35
    },
    progress: {
        margin: 20,
        borderWidth:2
      },
})