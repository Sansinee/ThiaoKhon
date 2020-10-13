import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Comunity",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711},
        {id:2,  name: "Housing",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "Jobs",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "Personal",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "For sale",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
      ]
    };
    this.image = {
        images: [
        'https://img.wongnai.com/p/1920x0/2019/05/21/9ab9644ef6ec47b5b7d42f5acaa76b26.jpg',
        'https://pbs.twimg.com/media/DBymfTjVwAA3Zxb?format=jpg&name=medium',
        'https://img.wongnai.com/p/1920x0/2019/05/31/747be9e047b44002970857624586f781.jpg',
        'https://pbs.twimg.com/media/D5TFsKgU4AIvYxz?format=jpg&name=large',
        ],
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return(
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity>
              <SliderBox
                  images={this.image.images}
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
              </TouchableOpacity>
          <FlatList 
            style={styles.contentList}
            columnWrapperStyle={styles.listContainer}
            data={this.state.data}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.count}>{item.count}</Text>
                  <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                    <Text style={styles.followButtonText}>View</Text>  
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}}/>
        </View>
      </ScrollView>
    );
  }
 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
}); 