import React from 'react';
import {View, Text, Image} from 'react-native';
import {Searchbar} from 'react-native-paper';

const ViewBoxesWithColorAndText = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
      }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View style={{flexDirection: 'column',height: 100,margin: 20,}}>
        <Image
          source={{
            uri:
              'https://img.wongnai.com/p/1920x0/2020/08/18/05cbe30bdf6a48e9bd26e9cacc259b08.jpg',
            cache: 'only-if-cached',
          }}
          style={{width: 100, height: 100}}
        />
        <Text> สะพานไม้อ่าวเตล็ด </Text>
      </View>


      <View style={{flexDirection: 'column',height: 100,margin: 20,}}>
      <Image
        source={{
          uri:
            'https://img.wongnai.com/p/1920x0/2020/07/06/3414eb175ed64b389648baa7cc5b5a6b.jpg',
          cache: 'only-if-cached',
        }}
        style={{width: 100, height: 100}}
      />
      <Text> อ่าวท้องหยี</Text>
      </View>


      <View style={{flexDirection: 'column',height: 100,margin: 20,}}>
      <Image
        source={{
          uri:
            'https://img.wongnai.com/p/1920x0/2019/05/31/1a99ec29118246799426055945d3ff9d.jpg',
          cache: 'only-if-cached',
        }}
        style={{width: 100, height: 100}}
      />
      <Text>ขนอมแกรนด์แคนยอน </Text>
      </View>

    </View>
  );
};

export default ViewBoxesWithColorAndText;


// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// // import React from 'react';
// // // มึนเว้ย
// // //Import all required component
// // import TabNavigator from 'react-native-tab-navigator';
// // import {View, Text, Image} from 'react-native';

// // const SettingsScreen = () => {
// //   return (
// //     <View style={{flex: 1, alignItems: 'center', marginTop: 350}}>
// //       <Text style={{fontSize: 23, marginTop: 10}}>Personal information</Text>
// //       <Text style={{fontSize: 18, marginTop: 10}}>
// //         Simple Login Registraction Example
// //       </Text>
// //       <Text style={{fontSize: 18, marginTop: 10}}>read more</Text>
// //     </View>
// //   );
// // };

// // export default SettingsScreen;

// import React from 'react';
// import {SectionList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//           {
//             title: 'J',
//             data: [
//               'Jackson',
//               'James',
//               'Jillian',
//               'Jimmy',
//               'Joel',
//               'John',
//               'Julie',
//             ],
//           },
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => (
//           <Text style={styles.sectionHeader}>{section.title}</Text>
//         )}
//         keyExtractor={(item, index) => index}
//       />
//     </View>
//   );
// };

// export default SectionListBasics;
