import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ImageManipulator } from 'expo';

const EditProfile = () => {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleStartPresss = () => {
        navigation.navigate('Profile');
    };

    const handleChangePicture = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permission to access camera roll is required!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!pickerResult.cancelled) {
            try {
                const resizedImage = await ImageManipulator.manipulateAsync(
                    pickerResult.uri,
                    [{ resize: { width: 40, height: 40 } }],
                    { compress: 1, format: 'png', base64: true }
                );
                setSelectedImage({ uri: resizedImage.uri });
            } catch (error) {
                console.error('Error manipulating image:', error);
            }
        }
    };

    return (
        <View style={[styles.editProfile, styles.editLayout]}>
            <View style={[styles.profileEdit, styles.profilePosition1]}>
                <View style={[styles.profileEditChild, styles.profilePosition1]} />
                <View style={[styles.profileEditItem, styles.profileChildLayout]} />
                <View style={[styles.profileEditInner, styles.profileChildLayout]} />
                <View style={[styles.rectangleView, styles.profileChildLayout]} />
                <View style={[styles.profileEditChild1, styles.profileChildLayout]} />

                <Text style={[styles.editProfile1]}>
                    Edit Profile
                </Text>
                <Pressable onPress={handleStartPresss}>
                    <Ionicons name="arrow-back" size={26} color="white" style={styles.back} />
                </Pressable>
                <View style={[styles.profileEditChild2, styles.profileChildLayout]} />
                <Text style={[styles.update, styles.updateTypo]}>Update</Text>
                <Pressable onPress={handleChangePicture}>
                    <Text style={[styles.changePicture, styles.yourTypo]}>
                        Change Picture
                    </Text>
                </Pressable>
                {selectedImage && (
                    <Image
                        source={{ uri: selectedImage.uri }}
                        style={styles.profileImage}
                    />
                )}
                <TextInput
                    style={styles.name}
                    placeholder="Your Name"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.name}
                    placeholder="Your Email"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.name}
                    placeholder="Your Phone Number"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.name}
                    placeholder="Your Password"
                    placeholderTextColor="black"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    editLayout: {
        overflow: "hidden",
        height: 896,
    },
    back: {
        marginLeft: 10,
        top: 40,
    },
    profilePosition1: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    profileChildLayout: {
        height: 40,
        position: "absolute",
    },
    updateTypo: {
        position: "absolute",
        color: "white",
    },
    yourTypo: {
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.bodySmall_size,
        textAlign: "left",
        color: Color.darkGray0,
        position: "absolute",
    },
    profileEditChild: {
        width: 428,
        height: 188,
        backgroundColor: Color.colorMediumvioletred_200,
    },
    editProfile1: {
        fontSize: 20,
        lineHeight: 28,
        textAlign: "center",
        fontFamily: FontFamily.titlePoppinsMedium,
        fontWeight: "600",
        width: 221,
        left: 80,
        top: 70,
        position: "absolute",
        color: "white"
    },
    profileEditChild2: {
        top: 672,
        left: 59,
        width: 280,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorMediumvioletred_200,
    },
    update: {
        top: 681,
        left: 180,
        fontWeight: "700",
        fontFamily: FontFamily.poppinsBold,
    },
    changePicture: {
        top: 259,
        left: 149,
    },
    editProfile: {
        borderRadius: Border.br_11xl,
        flex: 1,
        width: "100%",
    },
    name: {
        marginLeft: 5,
        top: 310,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_100,
        borderStyle: "solid",
        backgroundColor: Color.colorSilver_300,
        borderRadius: Border.br_5xs,
        left: 36,
        alignItems: "center",
        padding: 7,
        marginBottom: 20,
        width: 318,
    },
    profileImage: {
        width: 122,
        height: 122,
        top: 103,
        left: 136,
        position: "absolute",
    }
});

export default EditProfile;
