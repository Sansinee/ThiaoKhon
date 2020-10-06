import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //เก็บรูปไว้ใน state สามารถเก็บได้ทั้ง url หรือ folder
      images: [
        'https://img.wongnai.com/p/1920x0/2019/05/21/9ab9644ef6ec47b5b7d42f5acaa76b26.jpg',
        'https://pbs.twimg.com/media/DBymfTjVwAA3Zxb?format=jpg&name=medium',
        'https://img.wongnai.com/p/1920x0/2019/05/31/747be9e047b44002970857624586f781.jpg',
        'https://pbs.twimg.com/media/D5TFsKgU4AIvYxz?format=jpg&name=large',

        //require('./assets/images/girl.jpg'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          autoplay={true}
          circleLoop={true}
          dotStyle={styles.dotStyle}
          dotColor={'black'}
          inactiveDotColor={'white'}
          imageLoadingColor={'green'}
          sliderBoxHeight={300}
        />

        <Text style={styles.toolbarButton}>หมวดหมู่</Text>

        <Image
          source={{
            uri:
              'https://pbs.twimg.com/media/D3isOjqV4AIkCPB?format=jpg&name=small',
            cache: 'only-if-cached',
          }}
          style={{width: 100, height: 180}}
        />
        {/* <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toolbarButton: {
    alignItems: 'center',
    fontSize: 18,
  },
});
