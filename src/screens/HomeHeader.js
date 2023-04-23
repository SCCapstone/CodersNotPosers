import {View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import hamburger from './../../images/hamburger.png';
import search from './../../images/search.png';
import tune from './../../images/tune.png';
//Method used to present user with header navigation allowing them to toggle between potential choices we have presented to them
export default function HomeHeader({navigation}){
    return(
        <View style = {styles.header}>
            <TouchableOpacity
            onPress = {() => {navigation.toggleDrawer()}}>
            <Image source={hamburger} 
                    style = {{ width:36, height:32,marginRight:360, marginTop: 6}}>
                </Image>
                </TouchableOpacity>              
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'white',
        height: 45,
        borderRadius:10,
        justifyContent:'space-evenly'
    }
})