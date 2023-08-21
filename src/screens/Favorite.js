import React from 'react'
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import ImageSlider from '../components/imageSlider';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FavoriteScreen = () => {
    return(
        <View style={{flex: 1}}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode='cover' style={{flex:1}}/>
        <View style={styles.layout}>
        <View style={{flex:0, flexDirection:'row', backgroundColor:'#009688', height:50, paddingHorizontal:10, alignSelf:"auto", alignItems:"center", justifyContent:"space-between"}}>
        <Icon name="arrow-back" size={30} style={{color:"#CEEDDB"}}/>
        <Text style={{fontSize:20, fontWeight:'bold',color:'#CEEDDB',}}>Saved Books</Text>
        <Icon name="more" size={30} style={{color:"#CEEDDB"}}/>
        </View>
        <ScrollView style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1, flexDirection:'row',padding:20, alignItems:"center", justifyContent:'center'}}>
                <View>
                <TouchableOpacity>
                <Image source={require('../images/Fantasy/book1.jpg')} style={{borderRadius:15,height:220, width: 150}}/>
                </TouchableOpacity>
                
                <Text style={{fontSize:15, fontWeight:'bold'}}>Harry Potter</Text>
                <Text style={{fontSize:15, color:'#009688',}}>By J.K. Rowling</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'#009688'}}>Genre: Fantasy</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>

                <View>
                <TouchableOpacity>
                <Image source={require('../images/SciFi/book1.jpeg')} style={{borderRadius:15, marginLeft: 10, height:220, width: 150}}/>
                </TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'bold',marginLeft: 10}}>Lunar Storm</Text>
                <Text style={{fontSize:15, color:'#009688',marginLeft: 10}}>Terry Crosby</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold',marginLeft: 10,color:'#009688'}}>Genre: Sci-Fi</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>  
            </View>
            <View style={{flex:1, flexDirection:'row',padding:20, alignItems:"center", justifyContent:'center'}}>
                <View>
                <TouchableOpacity>
                <Image source={require('../images/EducationBooks/book5.jpg')} style={{borderRadius:15,height:220, width: 150}}/>
                </TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'bold'}}>Programming Rust</Text>
                <Text style={{fontSize:15, color:'#009688',}}>Jim blandy & Jason</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'#009688'}}>Genre: Education</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>
                <View>
                <TouchableOpacity>
                <Image source={require('../images/HistoryBooks/book2.jpg')} style={{borderRadius:15, marginLeft: 10, height:220, width: 150}}/>
                </TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 10}}>The Formative Phase</Text>
                <Text style={{fontSize:15, color:'#009688', marginLeft: 10}}>Khalid Bin Saeed</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 10, color:'#009688'}}>Genre: History</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>  
            </View>

            <View style={{flex:1, flexDirection:'row',padding:20, alignItems:"center", justifyContent:'center'}}>
                <View>
                <TouchableOpacity>
                <Image source={require('../images/EducationBooks/book2.jpg')} style={{borderRadius:15,height:220, width: 150}}/>
                </TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'bold'}}>Python Programming</Text>
                <Text style={{fontSize:15, color:'#009688',}}>Mark Reed</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'#009688'}}>Genre: Education</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>
                <View>
                <TouchableOpacity>
                <Image source={require('../images/SciFi/book2.jpg')} style={{borderRadius:15,marginLeft: 10, height:220, width: 150}}/>
                </TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 10}}>The Hunger Games</Text>
                <Text style={{fontSize:15, color:'#009688', marginLeft: 10}}>Suzanne Collins</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between"}}>
                <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 10,color:'#009688'}}>Genre: Sci-Fi</Text>
                <Icon name="bookmark" size={30} style={{color:'#009688'}}></Icon>
                </View>
                </View>  
            </View>
        </ScrollView>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    layout:{
        flex:1,
        position:'absolute',
        zIndex:1,
        height:'100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)'

    }
});
export default FavoriteScreen;