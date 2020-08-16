
import React from 'react';
import {
  SplashScreen,
  SongsListScreen,
  SongDetails
} from './containers';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as NetInfo from "@react-native-community/netinfo"
import { setIsConnected } from './stores/modules/network';
import { connect } from 'react-redux';
import {  Colors } from "./themes";
import { Constant } from './utilities';

const StackNavigatorOptions = {
  headerMode: "none"
};

const headerStyle = { backgroundColor: Colors.blue };
const headerTint = '#fff';

const AppLoadingStack = createStackNavigator({
  AppLoading: {
    screen: SplashScreen
  }
}, StackNavigatorOptions);


const SongsStack = createStackNavigator({
  SongsList:{
    screen: SongsListScreen, navigationOptions: { headerShown: false}
  },
  SongDetails: {
    screen: SongDetails, 
    navigationOptions: { headerTitle:Constant.SongsDetailTitle, headerStyle: headerStyle, headerTintColor: headerTint }
  }
},
);


const SwitchContainer = createSwitchNavigator(
  {
    AppLoading: {
      screen: AppLoadingStack,
    },
    songsList: {
      screen: SongsStack,
    },
  },
  {
    initialRouteName: 'AppLoading'
  });


const AppContainer = createAppContainer(SwitchContainer);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isConnected: "false" };
  }


  //----------------------------
  // Internet connectivity check
  //----------------------------

  componentDidMount() {
    const dispatchConnected = isConnected => this.props.networkCheck(isConnected);

    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
    });
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    networkCheck: (isConnected) => {
      dispatch(setIsConnected(isConnected))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
