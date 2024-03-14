import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notifications = ({ darkMode }) => {
  // const notificationStyle = {
  //   background: darkMode ? 'black' : 'white',
  //   color: darkMode ? 'white' : 'black',
  // };
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  const handleStartPress = () => {
    navigation.navigate('Profil'); // Navigate to 'Onbording2' screen
  };
   // First toggle switch state and handler
   const [toggleState1, setToggleState1] = useState(false);
   const handleToggle1 = () => {
     const newState = !toggleState1;
     setToggleState1(newState);
   };
   // Second toggle switch state and handler
   const [toggleState2, setToggleState2] = useState(false);
   const handleToggle2 = () => {
     const newState = !toggleState2;
     setToggleState2(newState);
   };
   // Third toggle switch state and handler
   const [toggleState3, setToggleState3] = useState(false);
   const handleToggle3 = () => {
     const newState = !toggleState3;
     setToggleState3(newState);
   };
   // Fourth toggle switch state and handler
   const [toggleState4, setToggleState4] = useState(false);
   const handleToggle4 = () => {
     const newState = !toggleState4;
     setToggleState4(newState);
   };
   // Fifth toggle switch state and handler
   const [toggleState5, setToggleState5] = useState(false);
   const handleToggle5 = () => {
     const newState = !toggleState5;
     setToggleState5(newState);
   };
   // Sixth toggle switch state and handler
   const [toggleState6, setToggleState6] = useState(false);
   const handleToggle6 = () => {
     const newState = !toggleState6;
     setToggleState6(newState);
   };
   // Seventh toggle switch state and handler
   const [toggleState7, setToggleState7] = useState(false);
   const handleToggle7 = () => {
     const newState = !toggleState7;
     setToggleState7(newState);
   };
   // Eighth toggle switch state and handler
   const [toggleState8, setToggleState8] = useState(false);
   const handleToggle8 = () => {
     const newState = !toggleState8;
     setToggleState8(newState);
   };
   // Ninth toggle switch state and handler
   const [toggleState9, setToggleState9] = useState(false);
   const handleToggle9 = () => {
     const newState = !toggleState9;
     setToggleState9(newState);
   };
   // Tenth toggle switch state and handler
   const [toggleState10, setToggleState10] = useState(false);
   const handleToggle10 = () => {
     const newState = !toggleState10;
     setToggleState10(newState);
   };

  return (
    <View style={[styles.notificationContainer, { backgroundColor: darkMode ? 'black' : 'white' }]}>
              <View style={[styles.settingChild, styles.settingPosition]} />

      <View style={[styles.top, styles.topPosition]}>
        
        <View style={[styles.homeIndicator, styles.topPosition]}>
          <View style={styles.bar}>
            <View style={styles.base} />
          </View>
        </View>
      </View>
      <View style={styles.notificationsWrapper}>
      <Pressable onPress={handleStartPress}>
      <Ionicons name="arrow-back" size={26} color="white" style={styles.back}/>
      </Pressable>
        <Text style={styles.notifications}>Notifications</Text>
      </View>
      <View style={[styles.component14Parent, styles.parentPosition]}>
        <View style={[styles.component14, styles.componentLayout]}>
          <Text style={styles.generalNotification}>General Notification</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={[styles.rectangle, styles.toggleonPosition]} />
            </View>
          </View>
        </View>
        <Text style={[styles.common, styles.commonTypo]}>Common</Text>
        <View style={[styles.component15, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Sound</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={styles.rectanglePosition} />
            </View>
          </View>
        </View>
        <View style={[styles.component16, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Vibrate</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={[styles.rectangle, styles.toggleonPosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.component17Parent, styles.parentPosition]}>
        <View style={[styles.component17, styles.componentLayout]}>
          <Text style={styles.generalNotification}>App updates</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={styles.rectanglePosition} />
            </View>
          </View>
        </View>
        <Text
          style={[styles.systemServices, styles.commonTypo]}
        >{`System & services update`}</Text>
        <View style={[styles.component18, styles.componentLayout]}>
      <Text style={[styles.generalNotification, { color: darkMode ? 'white' : 'black' }]}>Bill Reminder</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={[styles.rectangle, styles.toggleonPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.component19, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Promotion</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={[styles.rectangle, styles.toggleonPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.component20, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Discount Avaiable</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={styles.rectanglePosition} />
            </View>
          </View>
        </View>
        <View style={[styles.component21, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Payment Request</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={styles.rectanglePosition} />
            </View>
          </View>
        </View>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.component22Parent, styles.parentPosition]}>
        <View style={[styles.component22, styles.componentLayout]}>
          <Text style={styles.generalNotification}>New Service Available</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={styles.rectanglePosition} />
            </View>
          </View>
        </View>
        <Text style={[styles.commonn, styles.commonTypo]}>Others</Text>
        <View style={[styles.component23, styles.componentLayout]}>
          <Text style={styles.generalNotification}>New Tips Available</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleonPosition}>
              <View style={[styles.rectangle, styles.toggleonPosition]} />
            </View>
          </View>
          <ToggleSwitch
          isOn={toggleState1}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle1}
          style={[styles.toggle1, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState2}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle2}
          style={[styles.toggle2, { width: 40, height: 20 }]} 
        />
        <ToggleSwitch
          isOn={toggleState3}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle3}
          style={[styles.toggle3, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState4}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle4}
          style={[styles.toggle4, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState5}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle5}
          style={[styles.toggle5, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState6}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle6}
          style={[styles.toggle6, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState7}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle7}
          style={[styles.toggle7, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState8}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle8}
          style={[styles.toggle8, { width: 40, height: 20 }]} 
        />
         <ToggleSwitch
          isOn={toggleState9}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle9}
          style={[styles.toggle9, { width: 40, height: 20 }]} 
        />
          <ToggleSwitch
          isOn={toggleState10}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle10}
          style={[styles.toggle10, { width: 40, height: 20 }]} 
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: 0,
    position: "absolute",
    width: 399,
  },
  darkBackground: {
    backgroundColor: '#191919'
  },
  settingChild: {
    backgroundColor: Color.colorMediumvioletred_200,
    width: 450,
    height: 191,
    
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
    
  },
  parentPosition: {
    width: 342,
    left: 24,
    position: "absolute",
    
  },
  back:{
    marginLeft: -70,
    top: -20,
  },
  componentLayout: {
    height: 20,
    width: 342,
    left: 0,
    position: "absolute",
    
  },
  toggleonPosition: {
    width: "100%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  ovalIconLayout: {
    maxHeight: "100%",
    bottom: "10%",
    top: "10%",
    width: "40%",
    height: "80%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  commonTypo: {
    lineHeight: 24,
    fontSize: FontSize.titlePoppinsMedium_size,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    
  },
  groupLayout: {
    height: 1,
    width: 343,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  base: {
    bottom: 0,
    backgroundColor: Color.darkGray0,
    borderRadius: Border.br_3xs,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 810,
    height: 34,
    overflow: "hidden",
  },
  top: {
    top: 0,
    height: 844,
  },
  notifications: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    left: 0,
    top: 40,
    position: "absolute",
    color:"white"
  },
  notificationsWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  headerIcon: {
    top: 69,
    width: 24,
    height: 24,
    left: 24,
    position: "absolute",
  },
  generalNotification: {
    width: "70.18%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    top: "270%",
    color: Color.darkGray0,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.lightPrimary,
    borderRadius: Border.br_3xs,
  },
  ovalIcon: {
    right: "7.5%",
    left: "52.5%",
  },
  toggle1: {
    marginLeft: 300,
    top: -340,
  },
  toggle2: {
    marginLeft: 300,
    top: -328,
  },
  toggle3: {
    marginLeft: 300,
    top: -315,
  },
  toggle4: {
    marginLeft: 300,
    top: -263,
  },
  toggle5: {
    marginLeft: 300,
    top: -250,
  },
  toggle6: {
    marginLeft: 300,
    top: -238,
  },
  toggle7: {
    marginLeft: 300,
    top: -225,
  },
  toggle8: {
    marginLeft: 300,
    top: -214,
  },
  toggle9: {
    marginLeft: 300,
    top: -140,
  },
  toggle10: {
    marginLeft: 300,
    top: -128,
  },
  component14: {
    top: 38,
  },
  common: {
    top: 65,
  },
  commonn:{
    top: 55,
  },
  rectanglePosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.lightGray4,
    left: "100%",
    right: "-100%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  ovalIcon1: {
    right: "52.5%",
    left: "7.5%",
  },
  component15: {
    top:70,
  },
  component16: {
    top: 104,
  },
  component14Parent: {
    top: 158,
    height: 124,
  },
  component17: {
    top: 58,
  },
  systemServices: {
    top: 78,
  },
  component18: {
    top: 90,
  },
  component19: {
    top: 122,
  },
  component20: {
    top: 154,
  },
  component21: {
    top: 186,
  },
  groupChild: {
    top: 70,
  },
  groupItem: {
    top: 284,
  },
  component17Parent: {
    top: 278,
    height: 234,
  },
  component22: {
    top: 32,
  },
  component23: {
    top: 64,
  },
  component22Parent: {
    top: 528,
    height: 84,
  },
  profile2: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    overflow: "hidden",
    height: 844,
    width: 399,
    
  },
});

export default Notifications;