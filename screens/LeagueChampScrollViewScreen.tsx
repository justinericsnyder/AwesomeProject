import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

interface Champion {
  key: any;
  name: string;
  description: string;
  championThumbnail: string;
}
interface Champions extends Array<Champion> {}

const championArray: Champion[] = [
  {
    key: 0,
    name: "Urgot",
    description: "he is a crab",
    championThumbnail: "https://cdna.artstation.com/p/assets/covers/images/029/425/686/large/brahim-bensehoul-lol-thumbnail.jpg?",
  },
  {
    key: 1,
    name: "Sion",
    description: "he is ded man",
    championThumbnail: 'https://cdna.artstation.com/p/assets/covers/images/029/425/686/large/brahim-bensehoul-lol-thumbnail.jpg?1597505821',
  },
  {
    key: 2,
    name: "Kayn",
    description: "shitter",
    championThumbnail: 'https://cdna.artstation.com/p/assets/covers/images/029/425/686/large/brahim-bensehoul-lol-thumbnail.jpg?1597505821',
  },
];

export default function LeagueChampScrollView({
  navigation,
}: RootTabScreenProps<"Champions">) {


  function ChampionThumbnail({ championThumbnail }: { championThumbnail: any }) {
    return <Image style={styles.thumbnail}source={{uri: championThumbnail}}></Image>;
  }

  function ChampionTitle({ title }: { title: any }) {
    return <Text style={styles.title}>{title}</Text>;
  }

  function ChampionDescription({ description }: { description: string }) {
    return <Text style={styles.description}>{description}</Text>;
  }



  function ChampionRow({ champion }: { champion: Champion }) {
    return (
      <View style={styles.row}>
        <ChampionThumbnail championThumbnail={champion.championThumbnail}/>
        <ChampionTitle title={champion.name} />
        <ChampionDescription description={champion.description} />
      </View>
    );
  }

  interface ChampionListProps {
    champions: Champions;
  }

  function ChampionList({ champions }: ChampionListProps) {
    const listItems = champions.map((champion) => (
      <ChampionRow key={champion.key} champion={champion} />
    ));
    return <View>{listItems}</View>;
  }
  return <ChampionList champions={championArray} />;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:  "flex-start",
    paddingEnd: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:  "flex-start"
  },
  row: {
    height: 100,
    width: "100%",
    display:  "flex",
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  thumbnail: {
    height: 50,
    width: 50,
    alignSelf: "flex-start"
  }
});
