import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import mapstyle from './../../assests/DriverHomestyle';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default function DriverHomePage({navigation}) {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 33.836082,
          longitude: -81.163727,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01 * ASPECT_RATIO,
        }}
        customMapStyle={mapstyle}>
        <>
          <Marker
            tracksViewChanges={false}
            coordinate={{
              latitude: 33.836082,
            longitude: -81.163727,
            }}>
            <View style={styles.marker}>
              <Ionicon name="navigate" size={20} style={{color: '#884e7d'}} />
            </View>
          </Marker>
        </>
      </MapView>

      <View
        style={{
          position: 'absolute',
          flex: 1,
        }}>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} style={styles.iconBlack1} />
          </View>

          <TouchableOpacity
            style={styles.search}
            onPress={() => navigation.navigate('')}>
            <View style={styles.inputWrapper}>
              <View style={styles.dot} />
              <View style={styles.inputText}>
                <Text style={{color: '#fbebeb'}}>Enter the building name</Text>
              </View>
            </View>
            <View>
              <Feather name="heart" size={20} style={styles.iconBlack} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('flap')}>
          <Text style={styles.buttonText}>Find Orders!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#884e7d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 80,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.05,
    borderRadius: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#fbebeb',
    marginRight: 15,
  },
  inputText: {
    fontWeight: '600',
  },
  iconBlack: {
    color: '#fbebeb',
  },
  iconBlack1: {
    color: '#884e7d',
  },
  categoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#847979',
    position: 'absolute',
    top: height / 4,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
  category: {
    alignItems: 'center',
    marginBottom: 15,
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#847979',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#884E7D',
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pin: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: '#884E7D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
