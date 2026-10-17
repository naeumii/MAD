import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style ={styles.container}>
      <View>
          <Image
          source={require('../assets/logo.png')} 
          style={styles.image}
        /> 
      </View>

      <View>
      <Text style ={styles.header}>Hello Again! </Text> 
      <Text style ={styles.header2}> Log into your account</Text>
      </View>

      <View style ={styles.input}>
        <View style={styles.icons}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <TextInput style ={styles.label} />
        </View>

        <View style={styles.icons}>
          <Ionicons name="lock-closed-outline" size={20} color="black"/>
          <TextInput style ={styles.label} />

          <TouchableOpacity>
          <Ionicons name="eye-outline" size={20} color="black"/>
        </TouchableOpacity>

        </View>

      </View>

      <TouchableOpacity>
        <Text style={styles.password}>Forgot Password? </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.login}>
        <Text style={styles.logintext}>Login</Text> 
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 90
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 7
  },
  header2: {
    textAlign: 'center',
    color: '#696969',
    fontSize: 12,
    marginTop: 5
  },
  image: {
    height: 90,
    width: 90,
    alignSelf:'center'
  },
  input: {
    marginTop: 50,
    alignItems: 'center'    
  },
  label: {
    flex: 1,
    height: '100%',
    color: '#000000',
    paddingHorizontal: 8,
    
  },
  password: {
    color: '#4169e1',
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: 40,
    fontSize: 11,
    paddingTop: 5,
  },
  login: {
    height: 35,
    width: 250,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 15,
    backgroundColor: '#cd5c5c'
  },
  logintext: {
    color: '#f5fffa'
  },
  icons: {
flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 350,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#808080',
    paddingHorizontal: 10,
    alignSelf: 'center',
  }
})