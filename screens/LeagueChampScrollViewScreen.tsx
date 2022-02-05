//you know... just the standard wall of importa...
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Text, useThemeColor, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React, { useState, useEffect} from 'react'
import {getAllChampionsNames } from '../services/ddragon/api'
import _ from "lodash";
import { ChampionData } from "../services/ddragon/interfaces";
import { PageContainer } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { FaTags } from "react-icons/fa";

//Componsent being defined for the world to see. Tyler you too. 
export default function LeagueChampScrollViewScreen({navigation} : RootTabScreenProps < 'Champions' >) {

//yo what up here are the state declarations for this page
const [championData, setChampionData] = useState <Array<ChampionData>>([])
const [championDataFiltered, setChampionDataFiltered] = useState <Array<ChampionData>>([]);
const [searchQuery, setSearchQuery] = React.useState<string>('');
const onChangeSearch = (query: string)  => setSearchQuery(query);



//Load Initial Champ Data to List View
  useEffect(() => {
  const loadChampionData = async () => {
    const champData = await getAllChampionsNames();
    const champArray = _.values(champData.data);
    setChampionData(champArray);
    setChampionDataFiltered(champArray);
    }
    loadChampionData();
  }, []);

//Filter List when search bar updates
  useEffect(() => {
    setChampionDataFiltered(filterByValue(championData, searchQuery));
    }, [searchQuery]);

    return(
        <>
        {/* Search Box Duh this lets us update list view with useEffect on searchquery state update*/}
          <Searchbar style={styles.searchBox} inputStyle={styles.searchText}
            placeholder="Search anything your heart desires..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            autoComplete={false}
            autoFocus={true}
          /> 
          
          {/* Main List View Scroll Area - We Mapping Our Champions Data to Repeatable rows bayyyybe */}
          <ScrollView contentContainerStyle={styles.container}>
            {championDataFiltered.length > 0 &&
              championDataFiltered.map((champion) => 
              <View key={champion.key} style={styles.row}>
                  <View style={styles.outerContainer}>
                      <Image style={styles.champIcon}source={{uri: "http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" + champion.image.full}}/>
                      <View style={styles.detailContainer}>
                          <Text style={styles.title}>
                              {champion.name}
                          </Text>
                          <Text style={styles.description}>{champion.title.toString()}
                          </Text>
                          <View style={styles.tagsContainer}>
                              {champion.tags.length > 0 && champion.tags.map((tag) => 
                                <View key={tag} style={[styles.tagsDiv, {backgroundColor: getTagColor(tag)}]}>
                                  <Text style={styles.tagsText}>{tag}</Text>
                                </View>
                              )}
                          </View>
                      </View>
                      <Pressable   style={styles.abilitiesContainer} onPress={() => {navigation.navigate('Modal', champion)}} >
                          <FontAwesome label="Test" style={styles.selector} size={36} name="magic" color={'#0984e3'}/>
                          <Text style={styles.LoreLabel}>Abilities</Text>
                      </Pressable>
                      <Pressable   style={styles.selectContainer} onPress={() => {navigation.navigate('Modal', champion)}} >
                          <AntDesign label="Test" style={styles.selector} size={36} name="book" color={'#0984e3'}/>
                          <Text style={styles.LoreLabel}>Lore</Text>
                      </Pressable>
                  </View>
                  <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"></View>
              </View>
            )}
          </ScrollView>
        </>        
    );
    
}

function getTagColor(tag) {
  switch (tag) {
    case 'Fighter':
      return "#e74c3c";
    case 'Tank':
      return "#2c3e50";
      case 'Support':
        return "#2ecc71";
        case 'Marksman':
          return "#3498db";
          case 'Mage':
            return "#9b59b6";
            case 'Assassin':
              return "#e67e22";     
    default:
      return "#000000";
  }
}


function filterByValue(array: [], query: '') {
  return array.filter(o =>
      Object.keys(o).some(k => o[k].toString().toLowerCase().includes(query.toLowerCase())));
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    width: '100%',
 
  },
  searchBox: {
    borderRadius:0,
    height: 28,
  },
  searchText: {
    fontSize: 12
  },
  champIcon: {
    height: 48,
    width:48,
  },
  row: {
    display: 'flex',
    width: '100%',
    // height:80,
    
  },
  detailContainer: {
   marginLeft:5,
   paddingLeft: 2,
   display: 'flex',
   flexDirection: 'column',
   flexGrow:4,
   alignSelf:'center',

  },
  selectContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',

  },
  selector: {
    alignSelf: 'center',
    marginRight: 5,
  },
  LoreLabel: {
    fontSize: 8,
    alignSelf: "center",
    marginRight: 5,
  },

  abilitiesContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
      alignContent: 'center',
    marginRight: 10,
    alignSelf:"center",

  },
  abilitiesSelector: {
    alignSelf: 'center',
    marginRight: 5,
    flexGrow: 2,
  },
  abilitiesLabel: {
    fontSize: 8,
    marginRight: 5,
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    // minHeight:80,
  },
  description: {
    fontSize: 8,
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
  },

  tagsDiv: {
    height: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#0984e3',
    borderRadius: 5,
    display: 'flex',
    marginRight: 3,

  },
  tagsText: {
    fontSize: 6,
    fontWeight: 'normal',
    color: 'white',
    lineHeight: 6,
    padding: 3,
  },
});
