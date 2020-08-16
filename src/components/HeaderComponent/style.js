import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  headerStyle: {
    height: 48,
    backgroundColor: Colors.blue,
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomColor: 'transparent'
  },
  title: {
    color: Colors.white,
    fontSize: 18
  },
  leftIcon: {
    width: 25,
    height: 25,
    marginLeft: 5
  },
  bodyStyle:{
    flex: 3, 
    flexDirection:'row', 
    justifyContent:'center'}
})