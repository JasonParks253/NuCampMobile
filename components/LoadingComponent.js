import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={sytles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text style={sytles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const sytles = StyleSheet.create({
    loadingView: {
        alginItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#5637DD',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
;
export default Loading;