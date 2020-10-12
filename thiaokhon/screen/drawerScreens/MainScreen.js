import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const ViewBoxesWithColorAndText = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

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

      <Card.Content>
        <Title>คีรีวง</Title>
        <Paragraph>
          เส้นทางเดินขึ้นสู่ยอดเขาหลวง ชาวบ้านมีวิถีชีวิตที่สงบสังคมแบบเครือญาติ
        </Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            'https://pbs.twimg.com/media/Do974QUUwAEW1J0?format=jpg&name=large',
        }}
      />
      <Card.Content>
        <Title>สะพานไม้อ่าวเตล็ด</Title>
        <Paragraph>
          ลงเรือไปชมปลาโลมา สามารถชมวิวทิวทัศน์รอบอ่าวได้อย่างสวยงาม
        </Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            'https://img.wongnai.com/p/1920x0/2020/08/18/05cbe30bdf6a48e9bd26e9cacc259b08.jpg',
        }}
      />
      <Card.Content>
        <Title>อ่าวท้องหยี</Title>
        <Paragraph>
          {' '}
          ชายหาดเป็นหาดทรายขาวละเอียด สลับกับโขดหิน เหมาะแก่การเล่นน้ำ
        </Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            'https://www.chillpainai.com/src/wewakeup/scoop/images/a0e623cd82bad7cef5b9779852023146b9c9dfa1.jpg',
        }}
      />
      <Card.Content>
        <Title>หาดหน้าด่าน</Title>
        <Paragraph>ชายหาดยาวกว่า 9 ก.ม.</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            'https://www.chillpainai.com/src/wewakeup/scoop/images/d58f158bfc90ad0df73d0fc57dd1db5d20545501.jpg',
        }}
      />
      <Card.Content>
        <Title>กรุงชิง</Title>
        <Paragraph> ผ่อนคลายกับธรรมชาติ ชมทะเลหมอก</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            'https://www.chillpainai.com/src/wewakeup/scoop/images/0f6650155cf9e7c40e42bea3faf0665573585085.jpg',
        }}
      />
    </View>
  );
};

export default ViewBoxesWithColorAndText;
