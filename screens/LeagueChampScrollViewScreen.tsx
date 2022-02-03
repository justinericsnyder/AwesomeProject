import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import React, { useState, useEffect} from 'react'
import {getAllChampionsNames } from '../services/ddragon/api'
import _ from "lodash";
import { ChampionData } from "../services/ddragon/interfaces";
import { PageContainer } from "./styles";


export default function LeagueChampScrollViewScreen({navigation} : RootTabScreenProps < 'Champions' >) {
const [championData, setChampionData] = useState <Array<ChampionData>>([])

  useEffect(() => {
  const loadChampionData = async () => {
    const champData = await getAllChampionsNames();
    const champArray = _.values(champData.data);
    setChampionData(champArray);
    }
    loadChampionData()
  }, []) 
    

    return(
      <ScrollView contentContainerStyle={styles.container}>
      {championData.length > 0 &&
         championData.map((champion) => 
         <View key={champion.key} style={styles.row}>
          <View style={styles.detailContainer}>
            <Text style={styles.title}> {champion.id} </Text>
            <Text style={styles.description}>{champion.title.toString()} </Text>
           </View>
           <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"></View>
         </View>
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
    marginVertical: 10,
    height: 5,
    width: '100%',
 
  },
  championImage: {
    height:50,
    width:50,
  },
  row: {
    height: 100,
    
  },
  detailContainer: {
   paddingLeft:10,
   paddingTop:10,
   height:80,
    
  },
  description: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'normal',
    color: 'white',
    paddingLeft: 10,
  },
});
