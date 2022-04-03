import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import 'react-native-gesture-handler';

const App = () => {
    useEffect(() => {
        const init = async () => {
            console.log('init');
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({ fade: true });
        });
    }, []);
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    );
}

export default App;