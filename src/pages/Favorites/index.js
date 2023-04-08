import {Text, View, StyleSheet} from 'react-native';

export default function Favorites(){
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})