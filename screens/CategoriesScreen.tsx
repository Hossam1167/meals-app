import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrildTil from "../component/CategoryGrildTil";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  MealsOverView: undefined;
};

type categoriesScreenProps = NativeStackScreenProps<RootStackParamList>;

const CategoriesScreen = ({ navigation }: categoriesScreenProps) => {
  const handelOnPress = () => {
    navigation.navigate("MealsOverView");
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={category => (
        <CategoryGrildTil
          title={category.item.title}
          color={category.item.color}
          onPressFunction={handelOnPress}
        />
      )}
    >
      <Text>CategoriesScreen</Text>
    </FlatList>
  );
};

export default CategoriesScreen;
