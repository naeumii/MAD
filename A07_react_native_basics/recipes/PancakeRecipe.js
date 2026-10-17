import { View, Text } from 'react-native';

function PancakeRecipe() {
  const minutes = 15;
  return (
    <View>
      <Text> Pancakes </Text>
      <Text> Flour, egg, milk </Text>
      <Text> {minutes * 3 } </Text>
    </View>
  );
}

export default PancakeRecipe;