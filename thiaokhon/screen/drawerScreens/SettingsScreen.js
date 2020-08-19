/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
// มึนเว้ย
//Import all required component
import {View, Text, Image} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 350}}>
      <Text style={{fontSize: 23, marginTop: 10}}>Personal information</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>
        Simple Login Registraction Example
      </Text>
      <Text style={{fontSize: 18, marginTop: 10}}>read more</Text>
    </View>
  );
};

export default SettingsScreen;
