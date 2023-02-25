import {View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import hamburger from './../../images/hamburger.png';
import search from './../../images/search.png';
import tune from './../../images/tune.png';

export default function HomeHeader({navigation}){
    return(
        <View style = {styles.header}>
            <TouchableOpacity
            onPress = {() => {navigation.toggleDrawer()}}>
            <Image source={hamburger} 
                    style = {{ width:35, height:35,marginRight:15 }}>
                </Image>
                </TouchableOpacity>
            <TouchableWithoutFeedback style = {{flexDirection:'row'}}>
              
            < Image source = {search} style= {{width :20,height:25,marginRight:5,marginTop:5}} />
            
            <Text style = {{fontSize:15,marginRight:120,marginTop:5}}>
                What are you looking for ?
            </Text>
            
            </TouchableWithoutFeedback>
           
                <TouchableOpacity>
                    <Image source = {tune}
                    style = {{width:35, height:35}}>
                 </Image>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'white',
        height: 40,
        borderRadius:10,
        justifyContent:'space-evenly'
    }
})