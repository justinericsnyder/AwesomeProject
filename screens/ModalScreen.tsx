import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import {
    PageContainer, SearchContainer,
    SearchInput, ChampionImageContainer,
} from './styles'
import { getSplashArtUrlOf, getDetailOf } from '../services/ddragon/api'
import { ChampionData } from '../services/ddragon/interfaces'
import { FaSearch } from 'react-icons/fa'
import Lore from '../components/ChampDescription/index'

import { Text, View } from '../components/Themed';

export default function ModalScreen(champion) {
  const [championName, setChampionName] = useState<string>('')
  const [championData, setChampionData] = useState<ChampionData>()
  const [championImage, setChampionImage] = useState<string>('')
  

  useEffect(() => {
      const loadChampionData = async () => {
        const champData = (await getDetailOf(champion.route.params.name)).data
        setChampionData(champData);
        setChampionName(champData.name);
        const changeChampionImage = () => {
          setChampionImage(getSplashArtUrlOf(champion.route.params.name));
        }
        changeChampionImage();
    }
    loadChampionData();
    }, []);




  return (championImage.length > 0 &&
    <View style={styles.container}>
      <Image source={{uri: championImage}}style={styles.champImage}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{champion.route.params.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Lore lore={championData?.lore}  />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  champImage: {
    height: 300,
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
