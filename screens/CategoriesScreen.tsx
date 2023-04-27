import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrildTil from "../component/CategoryGrildTil";

const CategoriesScreen = () => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={category => (
        <CategoryGrildTil
          title={category.item.title}
          color={category.item.color}
        />
      )}
    >
      <Text>CategoriesScreen</Text>
    </FlatList>
  );
};

export default CategoriesScreen;
