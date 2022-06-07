import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const InputField = ({value}) => {
  return (
    <View >
        <TextInput style={styles.field} placeholder = {value} />
    </View > 
    )
}

const styles = StyleSheet.create({
    field: {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '10px',
        margin: '20px',
        width: '300px'
    }
  });

export default InputField;