import { StyleSheet, TextInput, View, Text } from 'react-native';


export default function Chat() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Me pergunte algo'
            />
            <Text>App works!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})