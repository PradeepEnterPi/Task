import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Constant } from '../../../utilities';
import Styles from "./style";

class SongDetails extends Component {
    constructor(props) {
        super(props);
        this.details = this.props.navigation.getParam('data');
        this.artistUrl = this.details.artworkUrl60,
        this.trackName = this.details.artistName,
        this.collectionName = this.details.collectionName
        this.collectionPrice = this.details.collectionPrice,
        this.trackTime = this.details.trackTimeMillis
        console.log(this.collectionPrice)
    }

    render() {

        return (

            <SafeAreaView style={Styles.conatiner}>
                
                <ScrollView>
                    <View style={Styles.imageContainer}>
                        <Image style={Styles.imageStyle}
                            resizeMode="cover" source={{ uri: this.artistUrl }} />
                    </View>

                    <View style={Styles.artistContainer}>
                        <Text style={Styles.textStyle} >
                            {Constant.ArtistName + this.trackName}
                        </Text>

                        <Text style={Styles.textStyle}>
                            {Constant.CollectionName + this.collectionName}
                        </Text>


                        <Text style={Styles.textStyle}>
                            {Constant.price + this.collectionPrice + '$'}
                        </Text>

                        <Text style={Styles.textStyle}>
                            {Constant.trackTime + (this.trackTime / (1000 * 60)).toFixed(1) + "m"}
                        </Text>

                    </View>

                </ScrollView>
             </SafeAreaView>




        );
    }
}

export default SongDetails;