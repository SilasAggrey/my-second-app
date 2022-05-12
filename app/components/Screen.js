import { View, StyleSheet, StatusBar,Text, } from 'react-native'
import React from 'react'

const Screen = ({children}) => {
  return <View style={styles.container}>
  <Text style={{ fontSize: 50, fontWeight: "bold", color: 'white',textAlign: "center"}}>Google</Text>
  {children}
  </View>;
  
};

const styles = StyleSheet.create({
    container: {
        maginTop: StatusBar.currentHeight,
        paddingHorizontal: 30,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
});



export default Screen;