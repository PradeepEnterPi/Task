import React from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../../themes';
import { Constant } from '../../utilities';
import styles from './style';

const Network = () => {

    return (
        <View style={styles.container}>
            <View style={styles.subStyle}>
                <View style={styles.imgViewStyle}>
                    <Image
                        resizeMode={'contain'}
                        source={Images.network}
                        style={styles.imgStyle} />
                </View>
                <View style={styles.textViewStyle}>
                    <Text style={styles.headerTextStyle}>{Constant.NetworkFailText}</Text>
                </View>
            </View>
        </View>
    )
}

export default Network