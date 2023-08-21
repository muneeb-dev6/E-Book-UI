import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, ToastAndroid, TouchableOpacity } from "react-native";

export default class ImageSlider extends Component {
    constructor(props, {navigation}) {
      super(props);
      this.state = {
        images: [
          { id: "1", source: require('../images/EducationBooks/book1.jpg'), bookName:"Computer Science", authorName:"Dave Duddel"},
          { id: "2", source: require('../images/EducationBooks/book2.jpg'),bookName:"Python Programming", authorName:"Mark Reed"},
          { id: "3", source: require('../images/EducationBooks/book3.jpg'),bookName:"JavaScript for Beginners", authorName:"John J. Maldonado"},
          { id: "4", source: require('../images/EducationBooks/book4.jpg'),bookName:"Coders at Work", authorName:"Peter Seibel"},
          { id: "5", source: require('../images/EducationBooks/book5.jpg'),bookName:"Programming Rust", authorName:"Jim Blandy"},
          { id: "6", source: require('../images/EducationBooks/book6.jpg'),bookName:"C programming", authorName:"Avelino J."},
          { id: "7", source: require('../images/EducationBooks/book7.jpg'),bookName:"Programming PHP", authorName:"Mark Reed"},
        ],
      };
    }
    handleImagePress = (item) => {
      ToastAndroid.show(`Item: ${item.id} clicked.`, ToastAndroid.SHORT)
    };
    renderImageItem = ({ item }) => {
        return(
          <View style={{flex:1}}>
          <TouchableOpacity >
          <Image source={item.source} style={styles.bookCovers}/>
          </TouchableOpacity>
          <Text style={{fontSize:10, fontWeight:'bold'}}>{item.bookName}</Text>
          <Text style={{fontSize:10, color:'#009688',}}>{item.authorName}</Text>
          </View>
          );
    };
render(){
    return (
      <View style={{flex:1}}>
          <FlatList showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal:6,
            justifyContent:"space-between",
          }}
          data={this.state.images}
          renderItem={this.renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bookCovers:{
    height: 180,
    width: 130,
    marginRight:20,
    borderRadius:10,
},
});