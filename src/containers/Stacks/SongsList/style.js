import { StyleSheet } from "react-native";
import { Colors, Fonts} from "../../../themes";
export default StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    loaderContainer: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    loaderText:{
        color:Colors.blue, 
        marginTop:15
    },
    songsContainer:{
        flex:1, 
        margin:5,
    },
    imageConatiner:{
        flex:0.2, 
        padding:20, 
        marginLeft:10,
        backgroundColor:Colors.seaBlue
    },
    singerImg:{
        width:50, 
        height:50, 
        padding:20, 
        alignSelf:'center'
    },
    songDetailsContainer:{
        flex:0.8, 
        paddingLeft:20, 
        justifyContent:'center', 
        },
        textStyle:{
            color:Colors.blue,
            fontSize:Fonts.size.medium,
        }
   
})