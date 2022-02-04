import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TextInput, Pressable} from "react-native";
import { Text, useThemeColor, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import React, { useState, useEffect} from 'react'
import {getAllChampionsNames } from '../services/ddragon/api'
import _ from "lodash";
import { ChampionData } from "../services/ddragon/interfaces";
import { PageContainer } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MyComponent from "../components/search";


export default function LeagueChampScrollViewScreen({navigation} : RootTabScreenProps < 'Champions' >) {
const [championData, setChampionData] = useState <Array<ChampionData>>([])

const filterItems = async (arr, query) => {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

  useEffect(() => {
  const loadChampionData = async () => {
    const champData = await getAllChampionsNames();
    const champArray = _.values(champData.data);
    setChampionData(champArray);
    }
    loadChampionData()
  }, []) 
    return(
      <>
      <MyComponent/>
      <ScrollView contentContainerStyle={styles.container}>
      {championData.length > 0 &&
         championData.map((champion) => 
        <View key={champion.key} style={styles.row}>
            <View style={styles.outerContainer}>
                <Image style={styles.champIcon}source={{uri: "http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" + champion.image.full}}/>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>
                        {champion.name}
                    </Text>
                    <Text style={styles.description}>{champion.title.toString()}
                    </Text>
                    <View style={styles.tagsDiv}>
                        <Text style={styles.tagsText}>{champion.tags.join(', ')}</Text>
                    </View>
                </View>
                <Pressable style={styles.selectContainer} onPress={() => navigation.navigate('Modal')} >
                    <AntDesign style={styles.selector} size={50} name="right" color={'#0984e3'}/>
                </Pressable>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"></View>
        </View>

      )} 
      </ScrollView></>
            
    );
    
}
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={styles.selector} {...props} />;
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
    width: '100%',
 
  },
  champIcon: {
    height: 100,
    width:100,
  },
  row: {
    display: 'flex',
    width: '100%',
    Height:120,
    
  },
  detailContainer: {
   marginLeft:10,
   paddingLeft: 10,
   display: 'flex',
   flexDirection: 'column',
   flexGrow:4,
   alignSelf:'center',

  },
  selectContainer: {
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',

  },
  selector: {
    alignSelf: 'center',
    marginRight: 10,
    cursor: 'pointer',

  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight:100,
  },
  description: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'normal',
    marginLeft: 5,
  },
  tagsDiv: {
    height: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#0984e3',
    borderRadius: 5,
    margin: 5,

  },
  tagsText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: 'white',
    height: 25,
    padding: 5,
  },
});
