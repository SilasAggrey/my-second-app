import React from 'react' ;
import {View, TextInput,StyleSheet,SafeAreaView} from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.SearchInput} placeholder='Search here...' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 8,
      justifyContent: "center",
      alignContent: "center",
    },
    SearchInput: {
      width: "100%",
      padding: 10,
      fontSize: 16,
      backgroundColor: 'white',
    },
  });

export default SearchBar;