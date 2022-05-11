import { View, StyleSheet, StatusBar,Text, } from 'react-native'
import React from 'react'

const Screen = ({children}) => {
  return <View style={styles.container}>{children}
  <Text style={{ fontSize: 50, fontWeight: "bold", color: 'white'}}>Google</Text>
  </View>;
  
};

const styles = StyleSheet.create({
    container: {
        maginTop: StatusBar.currentHeight,
        paddingHorizontal: 30,
        backgroundColor: 'black',
        flex: 1
    },
});



export default Screen;