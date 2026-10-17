import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Welcomescreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.header}>bear.</Text>
      </View>

      <View>
        <Image source={require('../assets/bear.png')} style={styles.image}/> 

        <TouchableOpacity style={styles.email}>
          <MaterialIcons name="email" size={18} color="white" style={styles.icon} /> 
          <Text style={styles.text}>LOGIN WITH EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebook}>
          <MaterialIcons name="facebook" size={20} color="white" style={styles.icon} />
          <Text style={styles.text}>LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>

        <View style={styles.account}>
          <Text style={styles.plainText}>Didn't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.clickable}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.terms}>
        <Text style={styles.plainText}>By continuing you agree to our</Text>
        <TouchableOpacity>
          <Text style={styles.clickable}>Terms & Privacy Policy</Text>
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
    marginTop: 50
  },
  header: {
    color: '#8b4513',
    fontWeight: 'bold',
    fontSize: 42,
    letterSpacing: 1
  },
  image: {
    height: 250,
    width: 250,
    marginTop: 20,
    left: 10
  },
  email: {
    height: 48,
    width: 300,
    borderRadius: 25,
    backgroundColor: '#8b4513',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  facebook: {
    height: 48,
    width: 300,
    borderRadius: 25,
    backgroundColor: '#4169e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    position: 'absolute',
    left: 20
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  plainText: {
    color: '#696969',
    fontSize: 12
  },
  clickable: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 12
  },
  terms: {
    alignItems: 'center',
    marginTop: 230,
    gap: 3
  },
});