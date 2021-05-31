import React from 'react';
import { View, Text } from 'react-native';
import Drink from '../assets/svgs/drink';

function DrinkCard(props) {
  const { lightColor, darkColor } = props;
  return (
    <View style={{ marginBottom: 30, overflow: 'visible' }}>
      <View style={{ paddingHorizontal: 30, paddingTop: 30, paddingBottom: 15 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
          <Drink />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 6, fontFamily: 'Nunito_600SemiBold' }}>Old Fashioned</Text>
            <Text style={{ fontSize: 16, maxWidth: 280, fontFamily: 'Nunito_400Regular' }} numberOfLines={2}>
              One of the great classic bourbon cocktails.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999, backgroundColor: darkColor, marginRight: 8 }}>
            <Text style={{ fontSize: 12, textTransform: 'uppercase', color: '#fff', fontFamily: 'Nunito_400Regular' }}>Bourbon Whiskey</Text>
          </View>
          <View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999, backgroundColor: darkColor, marginRight: 8 }}>
            <Text style={{ fontSize: 12, textTransform: 'uppercase', color: '#fff', fontFamily: 'Nunito_400Regular' }}>Bitters</Text>
          </View>
          <View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999, backgroundColor: darkColor, marginRight: 8 }}>
            <Text style={{ fontSize: 12, textTransform: 'uppercase', color: '#fff', fontFamily: 'Nunito_400Regular' }}>Cherry</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          transform: [{ rotate: '1deg' }],
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderWidth: 1,
          borderColor: darkColor,
          marginRight: 5,
          borderRadius: 30,
          zIndex: 0,
        }}
      ></View>
      <View style={{ transform: [{ rotate: '-1deg' }], position: 'absolute', top: 8, left: 8, width: '100%', height: '100%', backgroundColor: lightColor, borderRadius: 30, zIndex: -1 }}></View>
    </View>
  );
}

export default DrinkCard;
