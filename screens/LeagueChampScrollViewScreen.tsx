import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import React, { useState, useEffect} from 'react'
import {getAllChampionsNames } from '../services/ddragon/api'
import _ from "lodash";


export default function LeagueChampScrollViewScreen({navigation} : RootTabScreenProps < 'Champions' >) {
const [championData, setChampionData] = useState <Array<string>>([])

  useEffect(() => {
  const loadChampionData = async () => {
    const champData = await getAllChampionsNames();
    const headers = _.keys(champData.data);
    
    setChampionData(headers);
    }
    loadChampionData()
  }, []) 
    

    return(
      <ScrollView contentContainerStyle={styles.container}>
      {championData.length > 0 &&
         championData.map((key) => <Text key={key} style={styles.title}> {key} </Text>
      )} 
      </ScrollView>
            
    );
    
}



const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  championImage: {
    height:50,
    width:50,
  },
});
