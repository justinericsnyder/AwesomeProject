import React from 'react'
import { Text, View } from '../../components/Themed';
import { StyleSheet } from 'react-native';

interface DataLore {
    lore: string | undefined,
    hidden?: boolean | undefined
}

const Lore = (data: DataLore) => {
    return (
        <View>
            <Text >{data.lore}</Text>
        </View>
    )
}

export default Lore
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  