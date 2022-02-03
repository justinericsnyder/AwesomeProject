import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import React, { useState, useEffect} from 'react'
import {getAllChampionsNames } from '../services/ddragon/api'
import _ from "lodash";


export default function LeagueChampScrollViewScreen({navigation} : RootTabScreenProps < 'Champions' >) {
const [championData, setChampionData] = useState <Array<string>>([])
const [activeState, setActiveState] = useState(false)
   
  const loadChampionData = async () => {
      const champData = await(await getAllChampionsNames()).data;
      const headers = _.keys(champData);
      setChampionData(headers);

  }
    loadChampionData().then(p =>{
      championData.forEach(function(element){
      
      })
    });
   
    

    return(
      <View style={styles.container}>
      {championData.length > 157 &&
         championData.map((key) => {
            <Text style={styles.title}> {key} </Text>
          })} 
      </View>
            
    );
    
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
