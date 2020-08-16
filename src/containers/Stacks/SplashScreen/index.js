import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native'
import { Images } from '../../../themes';
import styles from "./styles";

const SplashScreen = (props) => {

    setTimeout(() => {
        props.navigation.navigate('SongsList');
    }, 3000)


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.conatiner}>
                <Image source={Images.logo}
                    style={styles.truckIcon} />
            </View>
        </SafeAreaView>
    );

}

export default SplashScreen;