import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Style from './style';

const CardComic = (props) => {
  const { index } = props;
  const { comic } = props;

  const maxLength = 15;

  return (
    <View style={Style.container}>
      {index % 2 === 1 && (
        <View style={Style.rightItem}>
          <View>
            <TouchableOpacity>
              <Text style={Style.title}>
                {comic.title.length < maxLength
                  ? `${comic.title}`
                  : `${comic.title.substring(0, maxLength)}...`}
              </Text>
            </TouchableOpacity>
            <Text style={Style.descritpionRight}>
              {comic.date.toDateString()}
            </Text>
            <Text style={Style.descritpionRight}>Por ${comic.price}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                style={Style.image}
                source={{
                  uri: comic.thumbnail,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {index % 2 === 0 && (
        <View style={Style.leftItem}>
          <View>
            <TouchableOpacity>
              <Image
                style={Style.image}
                source={{
                  uri: comic.thumbnail,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={Style.boxDetails}>
            <TouchableOpacity>
              <Text style={Style.title}>
                {comic.title.length < maxLength
                  ? `${comic.title}`
                  : `${comic.title.substring(0, maxLength)}...`}
              </Text>
            </TouchableOpacity>
            <Text style={Style.descritpion}>{comic.date.toDateString()}</Text>
            <Text style={Style.descritpion}>Por ${comic.price}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CardComic;
