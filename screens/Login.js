import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
const Login = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/commune.png')} 
          resizeMode="center" 
          style={styles.image} />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{marginTop: 20}} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{width: '90%'}}>
          <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>
          Forgot Password ? </Text>
        </View>
        <Submit title="LOG IN" color="#0148a4"/>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>
            Dont' t Have an account 
          </Text>
          <Text style={[styles.textBody, {color:'blue'}]} onPress={() => props.navigation.navigate('SignUp')}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
   image:{
      width: 400,
      height: 250,
      marginVertical: 10
   },
   textTitle: {
     fontFamily: 'Foundation',
     fontSize: 40,
     marginVertical: 10,
   },
   textBody: {
     fontFamily: 'Foundation',
     fontSize: 16,
   }
});

export default Login;