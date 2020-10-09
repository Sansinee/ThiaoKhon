import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const FlatListBasics = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Name</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Mail</Text>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#eaeaea"
  },
  title: {
    // borderWidth: 4,
    // borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    // textAlign: "center",
    fontSize: 20,
    // fontWeight: "bold"
  }
});

export default FlatListBasics;
