import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
  return (
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/commune.png')} 
          resizeMode="center" 
          style={styles.image} />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>Create an account to get all features</Text>
        <Inputs name="Full Name" icon="user" />
        <Inputs name="Email" icon="envelope" />
        <Inputs name="Phone" icon="phone" />
        <Inputs name="Password" icon="lock" pass={true} />
        <Inputs name="Confirm Password" icon="lock" pass={true} />
        <Submit title="CREATE" color="#0148a4"/>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>
            Dont' t Have an account 
          </Text>
          <Text style={[styles.textBody, {color: blue}, ]} onPress={() => props.navigation.navigate('Home')}>Login here</Text>
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

export default SignUp;