import {Text, View, StyleSheet} from 'react-native';

export default function Home(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "green"
    }
})