import { StyleSheet } from "react-native";
import { Colors, Fonts} from "../../../themes";
export default StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    imageContainer: {
        height:400
    },
    imageStyle:{
        width: '100%', 
        height: '100%'
    },
    artistContainer:{
        height: '50%', 
        padding: 10, 
        alignItems: 'flex-start'
    },
    textStyle:{
        marginTop: 20, 
        fontSize: Fonts.size.h5
    },
   
})