import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://img.wongnai.com/p/1920x0/2019/05/21/9ab9644ef6ec47b5b7d42f5acaa76b26.jpg',
        'https://pbs.twimg.com/media/DBymfTjVwAA3Zxb?format=jpg&name=medium',
        'https://img.wongnai.com/p/1920x0/2019/05/31/747be9e047b44002970857624586f781.jpg',
        'https://pbs.twimg.com/media/D5TFsKgU4AIvYxz?format=jpg&name=large',
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

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.toolbarButton}>หมวดหมู่</Text>
            {/* <Image
              source={{
                uri:
                  'https://pbs.twimg.com/media/D3isOjqV4AIkCPB?format=jpg&name=small',
                cache: 'only-if-cached',
              }}
              style={{width: 100, height: 180}}
            /> */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>ภูเขา</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>น้ำตก</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>ทะเล</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
