import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function AlreadyHaveAccount({ color, onPress }) {
    return (
        <View style={styles.footer}>
            <Text style={{ color: color || '#000' }}>Already have an account?</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlreadyHaveAccount

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    loginText: {
        color: '#ffa500',
        fontWeight: 'bold'
    },
})