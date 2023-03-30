import React, { useState , useEffect} from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import HomeHeader from './HomeHeader';
import leftarrow  from './../../images/leftarrow.png';
import HorshoeDeli from './EastCampus/HorshoeDeli';
import HumanitiesStarbucks from './EastCampus/HumanitiesStarbucks';
import VillageJuiceAndKitchen from './EastCampus/VillageJuiceAndKitchen';
import ColloquiumCafe from './EastCampus/ColloquiumCafe';


const buttonData = require('./../../data/EastCampus.json') 

const EastCampus = ({navigation}) => {

    const getimageSource = (id) => {
        switch (id) {
          case 1:
            return require('./../../images/EastCampus/ColloquimCafe.png');
          case 2:
            return require('./../../images/EastCampus/horshoeDeli.png');
          case 3:
            return require('./../../images/EastCampus/starbucksWelsh.png');
          case 4:
            return require('./../../images/EastCampus/village.png');
          default:
            return null;
        }
      };
      const handleButtonClick = (item) => {
        switch(item.id) {
            case 1:
                return navigation.navigate(ColloquiumCafe);
            case 2: 
                return navigation.navigate(HorshoeDeli);
            case 3:
                return navigation.navigate(HumanitiesStarbucks);
            case 4: 
                return navigation.navigate(VillageJuiceAndKitchen);
        } 
      };
      const renderItem = ({item}) => {
        const imageSource = getimageSource(item.id);
    
        return (
            <TouchableOpacity
              onPress={() => handleButtonClick(item)}
              style={{flex: 1, margin: 5}}>
              <View style={styles.item}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        };
      
        return (
          <View style= {styles.container}>
            <Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -30,
                    top: -45,
                    scaleX:-1}}>
                </Image>
                <HomeHeader navigation = {navigation}/>
                
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-40,
                    bottom:0}}>
                </Image>
            <FlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.list}
              numColumns = {2}
            />
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:15

                }} />
            </TouchableOpacity>
          </View>
        );
      };
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#B6B7E5',
        },
        item: {
          marginTop: 50,
          marginBottom: 50,
          alignItems: 'center',
          padding: 10,
          borderRadius: 10,
        },
        text: {
          fontSize: 20,
          marginTop:10,
          fontWeight: 'bold',
        },
        selectedIcon: {
          width: 15,
          height: 15,
        },
        list: {
          padding: 10,
        },
        image: {
            width: 110,
            height: 110,
            borderRadius:15,

        }
      });

export default EastCampus;
    
