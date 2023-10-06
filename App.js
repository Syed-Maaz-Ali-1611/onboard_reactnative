import React from 'react';
import { View, StatusBar, Text ,Image} from 'react-native';
import Onboard from "./components/Onboard";
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Screen One For Slider Intro 1.',
    text: 'Description.Say something cool.This is Description.',
    image: require('./assets/images/notebook.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Screen One For Slider Intro 2.',
    text: 'Description.Say something cool.This is Description.',
    image: require('./assets/images/spotify.png'),
    bg: '#febe29',
  },
  {
    title: 'Screen One For Slider Intro 3.',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./assets/images/shirt.png'),
    bg: '#22bcb5',
  },
];


const App = () => {
    
    const renderItem = ({item}) =>{
        return(
            <View>
                <Image source={item.image} />
                <View></View>
            </View>
        )
    }

    const keyExtractor = (item) =>item.title;

    return (
    
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
        />
        </View>

    );
};

export default App;