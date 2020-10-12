import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const FlatListBasics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://img.wongnai.com/p/800x0/2020/03/06/a38a8daa2f424df0b3492f3e796c1b57.jpg',
              cache: 'only-if-cached',
            }}
            style={{width: 400, height: 350}}
          />
        </View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>สะพานไม้อ่าวเตล็ด</Text>
          {/* <Text style={styles.toolbarTitle}>This is the title</Text> */}

          <Text style={styles.toolbar}>
            อ่าวเตล็ดเป็นสะพานไม้ที่สร้างยื่นลงทะเลเพื่อที่ท่าเรือขึ้นลงของชาวประมงและสำหรับลงเรือไปชมปลาโลมา
            สามารถชมวิวทิวทัศน์รอบอ่าวได้อย่างสวยงาม
            กลายเป็นอีกหนึ่งจุดท่องเที่ยวน่าสนใจที่มีนักท่องเที่ยวนิยมมาถ่ายภาพกับสะพานนี้อยู่บ่อยๆ
            นอกจากนี้บริเวณอ่าวเตล็ดยังมีให้บริการล่องเรือชมปลาโลมาสีชม
            และเขาหินพับผ้าอีกด้วย
          </Text>

          <Text style={styles.toolbarButton}>ที่ตั้ง</Text>
          <Text style={styles.toolbar}>
            เหนือสุดของอำเภอขนอม จังหวัดนครศรีธรรมราช ติดกับอำเภอดอนสัก
            สุราษฎร์ธานี
          </Text>
          <Text style={styles.toolbarButton}>การเดินทาง</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  toolbarButton: {
    fontSize: 18,
  },
  toolbar: {
    fontSize: 16,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});

export default FlatListBasics;
