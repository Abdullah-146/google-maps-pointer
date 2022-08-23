import * as React  from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View,} from 'react-native';

export default function App() {
  const [coordinate ,setcoordinate] = React.useState([{latitude: 33.874549,
    longitude: 70.7162761},{latitude: 33.874549,
      longitude: 70.8162761},{latitude: 33.874549,
        longitude: 70.9162761}])
       function onMapPress(e) {
          setcoordinate( [...coordinate , e.nativeEvent.coordinate] )  ;
          console.log(e.nativeEvent.coordinate);
      }
  return (
    <View style={styles.container}>
      <MapView style={{width:'100%' , height:'100%'}} mapType={'hybrid'} 
      provider={PROVIDER_GOOGLE}
      region={{
        latitude:70.874549,
        longitude: 72.8162761,
        latitudeDelta: 0.22,
      }}
      onPress={ (here)=> onMapPress(here)}
      >
        {coordinate.map(indexes =>  <Marker key={Math.random()} coordinate={{latitude: indexes.latitude,
        longitude: indexes.longitude}} 
        image={require('./assets/pin.png')}
        title  ="test"
        description='yes it is'
      
      
        /> )}
       

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
