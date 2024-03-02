import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, Alert } from 'react-native';


const TabBar = ({navigation}) => {
    const handleTabPress = (screen) => {
        navigation.navigate(screen);
      };
    const toggleOpen = () => {
        // Your logic for toggleOpen goes here
    };

    return (
        <View >

            <View style={{
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'white',
                width: 70,
                height: 70,
                borderRadius: 55,
                bottom: 35,
                zIndex: 10
            }}>

                <TouchableWithoutFeedback onPress={toggleOpen}>
                    <View style={[styles.button, styles.actionBtn]}>

                        <Image
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                            source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Image
            style={styles.scanAltIcon}
            resizeMode="cover"
            source={require("../assets/Scan_alt.png")}
          />
            </View>

            <View style={{
                position: 'absolute',
                backgroundColor: 'black',
                border: 2,
                radius: 3,
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: { height: 3, width: 3 },
                x: 0,
                y: 0,
                style: { marginVertical: 5 },
                bottom: 0,
                width: '100%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 25
            }}>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: -17
                }}>
                    <TouchableOpacity onPress={() => handleTabPress('Home')} >
                        <Image
                            style={{ width: 22, height: 22 }}
                            source={require("../assets/home.jpg")}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',fontSize: 10 }}>Home</Text>
                </View>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 25
                }}>
                    <TouchableOpacity
                      onPress={() => handleTabPress('Map')}
                    >
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("../assets/map.jpg")}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',top:-1 ,fontSize: 10}}>Map </Text>
                </View>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 25,
                }}>
                    <TouchableOpacity
                  onPress={() => handleTabPress('Article')}
                    >
                        <Image
                            source={require("../assets/magazine.png")}
                            style={{ width: 20, height: 20 ,top:2 }}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',top:-1 ,fontSize: 10}}>Article </Text>
                </View>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', marginStart: 55
                }}>
                    <TouchableOpacity
                       onPress={() => handleTabPress('total')}
                    >
                        <Image
                            source={require("../assets/total.png")}
                            style={{ marginHorizontal: 16, width: 28, height: 28 }}
                            containerStyle={{ marginHorizontal: 14 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',fontSize: 10}}>Total </Text>
                </View>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',marginStart: 20
                }}>
                    <TouchableOpacity
                       onPress={() => handleTabPress('Card')}
                    >
                        <Image
                            source={require("../assets/card.png")}
                            style={{ width: 22, height: 22 }}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',fontSize: 10 }}>Card </Text>
                </View>

                <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', marginStart: 30
                }}>
                    <TouchableOpacity
                       onPress={() => handleTabPress('Profile')}
                    >
                        <Image
                            source={require("../assets/profile.png")}
                            style={{ width: 28, height: 28 }}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'white',fontSize: 10 }}>Profile </Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
    },
    actionBtn: {
        backgroundColor: '#7D0C43',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        // borderColor: '#fff'
    },
    scanAltIcon: {
        top: 10,
        left: -1,
        width: 74,
        height: 53,
        position: "absolute",
      },
});

export default TabBar;
