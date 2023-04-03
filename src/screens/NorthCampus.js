import React from 'react'; 
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import { useNavigation } from '@react-navigation/native';
import leftarrow  from './../../images/leftarrow.png';
import CounselorsCafe from './NorthCampus/CounselorsCafe';
import HamptonStCafe from './NorthCampus/HamptonStCafe';
import home from './../../images/home.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';

const buttonData = require('./../../data/NorthCampus.json');

const NorthCampus = () => {
  const navigation = useNavigation();

  const getimageSource = (id) => {
    switch (id) {
      case 1:
        return require('./../../images/NorthCampus/CounselorCafe.png');
      case 2:
        return require('./../../images/NorthCampus/Hamptons.png');
      default:
        return null;
    }
  };

  const handleButtonClick = (item) => {
    switch (item.id) {
      case 1:
        return navigation.navigate(CounselorsCafe);
      case 2: 
        return navigation.navigate(HamptonStCafe);
    } 
  };

  const renderItem = ({ item }) => {
    const imageSource = getimageSource(item.id);

    return (
      <TouchableOpacity
        onPress={() => handleButtonClick(item)}
        style={{ flex: 1, margin: 5 }}
      >
        <View style={styles.item}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={ellipsepink}
        style={{
          position: 'absolute',
          left: -30,
          top: -45,
          scaleX: -1
        }}
      />
      <Image
        source={ellipsegrey}
        style={{
          position: 'absolute',
          right: -40,
          bottom: 0
        }}/>

      <View style = {styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
            <Image source={home} 
                    style = {{ width:35, height:35,marginRight:360, top:5 }}>
                </Image>
                <View style={styles.profileNameContainer}>
                  <Text style={styles.nameText}>North Campus</Text>
                </View>
                </TouchableOpacity>              
        </View>

      <FlatList
        data={buttonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={1}
            />
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:25

                }} />
            </TouchableOpacity>
          </View>
        );
      };
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#B6B7E5',
          alignContent: 'center'
        },
        header:{
          flexDirection:'row',
          backgroundColor:'white',
          height: 45,
          borderRadius:10,
          justifyContent:'space-evenly',  
          zIndex: 0
      },
        item: {
          marginTop:60,
          marginBottom: 60,
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

        },
        nameText: {
          color: 'black',
          fontSize: 25,
          fontWeight: '900',
          top: -30,
          left: 115
        },
      });

export default NorthCampus;
    
