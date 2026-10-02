import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Welcomescreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.header}>bear.</Text>
        <Text style={styles.bear}>Log in on bear :)</Text>
      </View>

      <View>
        <Image source={require('../assets/bear2.png')} style={styles.image}/> 

        <View style={styles.input}>
          <MaterialIcons name="email" size={18} color="#8b4513" style={styles.icon} />         
          <TextInput style={styles.inputText} placeholder="bear@gmail.com"/>
        </View>
        <View style={styles.input}> 
          <MaterialIcons name="key" size={20} color="#8b4513" style={styles.icon} />
          <TextInput style={styles.inputText} placeholder="******"/>
        </View>
        
        <TouchableOpacity style={styles.email}>
          <Text style={styles.text}>LOGIN WITH EMAIL</Text>
        </TouchableOpacity>          

      </View>

      <View style={styles.password}>
        <Text style={styles.plainText}>Forgot Password? </Text>
        <TouchableOpacity>
          <Text style={styles.clickable}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
    alignItems: 'center'
  },
  heading: {
    alignItems: 'center',
    marginTop: 45
  },
  header: {
    color: '#8b4513',
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 1
  },
  image: {
    height: 180,
    width: 180,
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 5
  },
  email: {
    height: 45,
    width: 300,
    borderRadius: 25,
    backgroundColor: '#8b4513',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  input: {
    height: 45,
    width: 300,
    borderRadius: 25,
    backgroundColor: '#ffefd5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5
  },
  plainText: {
    color: '#8b4513',
    fontSize: 15,
  },
  clickable: {
    fontWeight: 'bold',
    color: '#8b4513',
    fontSize: 15
  },
  password: {
    alignItems: 'center',
    marginTop: 10,
    gap: 3,
    flexDirection: 'row',
  },
  bear: {
    color: '#8b4513',
    fontSize: 20,
    paddingTop: 5
  },
  inputText: {
    height: '100%',
    width: '100%',
    color: '#340a10',
    paddingLeft: 48,
    paddingRight: 15,
    fontSize: 14,
      }
});