import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Network, HeaderComponent } from '../../../components';
import { Constant } from '../../../utilities';
import Styles from "./style";
import { songsList } from './../../../stores/modules/songs';
import { Colors } from "../../../themes";

class SongsListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { network } = this.props;
    if (!network) {
      return (
        <Network />
      )
    } else {
      return (
        <View style={Styles.conatiner}>
          {this.renderHeader()}
          {this.renderSongs()}
        </View>)
    }
  }

  componentDidMount() {
    this.callRestApi()
  }

  callRestApi() {
    let data = {
      term: Constant.songsApiEndpoint
    }
    this.props.getSongslist(data)
  }

  renderHeader() {
    return (<HeaderComponent
      title={Constant.SongsListTitle} />);
  }

  renderSongs() {
    const { songsData, isLoading } = this.props
    return (
      isLoading ? <View style={Styles.loaderContainer}>
        <ActivityIndicator color={Colors.blue} />
        <Text style={Styles.loaderText}>{Constant.loaderMessage}</Text>
      </View> :
        <View style={Styles.songsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            data={songsData}
            refreshing={isLoading}
            onRefresh={() => this._onRefresh()}
            renderItem={({ item }) => this.renderItem(item)}

          />
        </View>


    )
  }

  _onRefresh() {
    this.callRestApi()
  }

  gotoDetails(item){
    const { navigation } = this.props;
    navigation.navigate('SongDetails', {data: item});
  }

  renderItem(item) {
    var minutes = (item.trackTimeMillis / (1000 * 60)).toFixed(1);
    return (
      <TouchableOpacity 
      onPress={()=> this.gotoDetails(item)}
      >
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={Styles.imageConatiner}>
            <Image
              style={Styles.singerImg}
              resizeMode="contain"
              source={{ uri: item.artworkUrl30 }} />
          </View>

          <View style={Styles.songDetailsContainer}>
            <Text style={Styles.textStyle}>
              {item.trackName}
            </Text>
            <Text style={Styles.textStyle}>
              {'Artist Name:' + item.artistName}
            </Text>
            <Text style={Styles.textStyle}>
              {minutes + "m"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


}

const mapStateToProps = state => {
  return {
    network: state.network.isConnected,
    songsData: state.songs.songsData,
    isLoading: state.songs.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSongslist: (data) => { dispatch(songsList(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsListScreen);

