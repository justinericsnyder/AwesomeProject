import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

interface Champion {
  key: any;
  name: string;
  description: string;
}
interface Champions extends Array<Champion> {}

const championArray: Champion[] = [
  {
    key: 0,
    name: "Urgot",
    description: "he is a crab",
  },
  {
    key: 1,
    name: "Sion",
    description: "he is ded man",
  },
  {
    key: 2,
    name: "Kayn",
    description: "shitter",
  },
];

export default function LeagueChampScrollView({
  navigation,
}: RootTabScreenProps<"Champions">) {
  //const champions = [{key: 0, name: 'Urgot', description: 'he is a crab'},{key: 1, name: 'Sion', description: 'he is ded man'},{key: 2, name: 'Kayn', description: 'shitter'}];

  function ChampionTitle({ title }: { title: any }) {
    return <Text style={styles.title}>{title}</Text>;
  }

  function ChampionDescription({ description }: { description: string }) {
    return <Text style={styles.title}>{description}</Text>;
  }

  function ChampionRow({ champion }: { champion: Champion }) {
    return (
      <View style={styles.row}>
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
      <ChampionRow champion={champion} />
    ));
    return <View>{listItems}</View>;
  }
  return <ChampionList champions={championArray} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    height: 50,
    width: "100%",
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
});
