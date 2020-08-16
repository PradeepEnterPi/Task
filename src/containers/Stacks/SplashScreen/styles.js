import { StyleSheet } from "react-native";
import { Colors} from "../../../themes";

export default StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    truckIcon:{
        width:200,
        height:200,
        resizeMode: 'contain'
    }
})