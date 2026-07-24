import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const AboutMe = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Image
          source={require('./assets/my-picture.png')} 
          style={styles.image}
        />

        <Text style={styles.name}>Naomi Zai C. Lazaro</Text>

        <Text style={styles.courseYear}>Associate in computer technology</Text>
        <Text style={styles.courseYear}>2nd Year</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fun Fact About Me:</Text>
          <Text style={styles.sectionText}>
            I like to eat  sweets whenever im stressed and while  im studying.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Reflection:</Text>
          <Text style={styles.reflectionText}>
            So far, i learned a lot from this subject. From the numbers of users of mobile phones. i also learned about the history of mobile phones and the  two OS. The git commands the importance of using the ssh key, and when are we going to use the private and public keys. I also learned the advantages of using the git instead of just uploaading it in you drive.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f9',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#142f40'
  },
  courseYear: {
    fontSize: 16,
    color: '#819fa7',
  },
  section: {
    width: '100%',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5b6e74',
  },
  sectionText: {
    fontSize: 14,
    color: '#0d0d0d',
    lineHeight: 20,
  },
  reflectionText: {
    fontSize: 14,
    color: '#0d0d0d',
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default AboutMe;