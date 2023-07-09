/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView,
StyleSheet,
useColorScheme
} from 'react-native';

function App(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
   <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello baby</Text>
    </View>
  );
}

const styles=StyleSheet.create(
  {
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },
    whiteText:{
      color:'#FFFFFF'
    },
    darkText:{
      color:'#00000'
    }
  });


export default App;
