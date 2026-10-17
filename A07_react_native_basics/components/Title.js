import { StyleSheet, Text, View } from 'react-native';
import { BOOK_TITLE, AUTHOR } from '../constants';

function shout(text){
  return text.toUpperCase();
}

function Title() {
  return (
    <View>
      <Text style={styles.heading}>{BOOK_TITLE} by {AUTHOR}</Text>
      <Text> My Recipe Book </Text>
      <Text> Simple recipes, cooked simply</Text>      
      <Text> {shout('welcome to the kitchen!')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    color: '#b5651d',
    fontWeight: 'bold',
  },
});

export default Title;