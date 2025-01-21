import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  
  function renderCategoryItem(itemData) { // to render individual item
    
    function pressHandler() { // Press handler for individual tile
      navigation.navigate('MealsOverview', { // passing to next screen
        categoryId: itemData.item.id,
      });
    }

    return (  // This is individual item/Tile UI
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;