import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Magasine = () => {
  return (
    <View style={styles.magasine}>
      <Image
        style={[styles.cardbaseIcon, styles.cardbaseIconLayout]}
        contentFit="cover"
        // source={{uri :"https://img.freepik.com/free-photo/background_53876-32170.jpg?w=996&t=st=1708980792~exp=1708981392~hmac=4a38f99dd0c3d3c0b9dde4da81498cc2730df6ec45f156a4b301b5eadc4458da"}}   
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}
        
      />
      <Image
        style={[styles.cardbaseIcon1, styles.cardbaseIconPosition]}
        contentFit="cover"
            //   source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}    

      />
      <Image
        style={styles.cardbaseIcon2}
        contentFit="cover"
        source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <Image
        style={[styles.cardbaseIcon3, styles.cardbaseIconLayout]}
        contentFit="cover"
                source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <Image
        style={[styles.cardbaseIcon4, styles.cardbaseIconPosition]}
        contentFit="cover"
        source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <View
        style={[styles.loremIpsumDolorSitAmetParent, styles.loremParentLayout]}
      >
        <Text style={[styles.loremIpsumDolor, styles.dtTypo]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text style={[styles.dt, styles.dtTypo]}>12DT</Text>
        <View style={styles.loremIpsumDolorSitAmetGroup}>
          <Text style={[styles.loremIpsumDolor, styles.dtTypo]}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text style={[styles.dt, styles.dtTypo]}>12DT</Text>
        </View>
      </View>
      <Image
        style={styles.crmeTartinerAuxNoisettesIcon}
        contentFit="cover"
        // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <Image
        style={styles.unnamed1Icon}
        contentFit="cover"
        source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <View style={[styles.sampleWrapper, styles.searchParentFlexBox]}>
        <View style={styles.sample}>
          <Image
            style={[styles.sampleChild, styles.sampleChildPosition]}
            contentFit="cover"
            source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.creditCardIcon, styles.iconLayout]}
            contentFit="cover"
            source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.buttonPlusIcon, styles.sampleChildPosition]}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={styles.scanAltIcon}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.homeLightIcon, styles.iconPosition1]}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.mapIcon, styles.iconPosition]}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.userCircleIcon, styles.iconLayout]}
            contentFit="cover"
        // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}
           
          />
          <Image
            style={[styles.fileDockSearchIcon, styles.iconLayout]}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Image
            style={[styles.maskGroupIcon, styles.iconPosition]}
            contentFit="cover"
            // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <View
            style={[
              styles.loremIpsumDolorSitAmetContainer,
              styles.loremParentLayout,
            ]}
          >
            <Text style={[styles.loremIpsumDolor, styles.dtTypo]}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={[styles.dt, styles.dtTypo]}>12DT</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.loremParentLayout]}>
        <Text style={[styles.loremIpsumDolor, styles.dtTypo]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text style={[styles.dt, styles.dtTypo]}>12DT</Text>
      </View>
      <View
        style={[styles.loremIpsumDolorSitAmetParent1, styles.loremParentLayout]}
      >
        <Text style={[styles.loremIpsumDolor, styles.dtTypo]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text style={[styles.dt, styles.dtTypo]}>12DT</Text>
      </View>
      <Image
        style={styles.packGnoise1Icon}
        contentFit="cover"
        // source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <Image
        style={styles.newArrivalHighResolutionLoIcon}
        contentFit="cover"
        source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

      />
      <View style={styles.mapWrapper}>
        <Text style={[styles.map, styles.mapTypo]}>Map</Text>
      </View>
      <View style={[styles.asianWrapper, styles.wrapperBorder]}>
        <Text style={[styles.asian, styles.mapTypo]}>Asian</Text>
      </View>
      <View style={[styles.americanWrapper, styles.wrapperBorder]}>
        <Text style={[styles.asian, styles.mapTypo]}>American</Text>
      </View>
      <View style={[styles.mexicanWrapper, styles.wrapperBorder]}>
        <Text style={[styles.asian, styles.mapTypo]}>Mexican</Text>
      </View>
      <View style={[styles.middleEastWrapper, styles.wrapperBorder]}>
        <Text style={[styles.asian, styles.mapTypo]}>Middle East</Text>
      </View>
      <View style={[styles.searchBarsearchTabExclusiv, styles.searchLayout]}>
        <View
          style={[styles.searchBarsearchTabExclusivChild, styles.searchLayout]}
        />
        <View style={[styles.searchParent, styles.searchParentFlexBox]}>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={{uri :"https://img.freepik.com/photos-gratuite/abstrait-design-low-poly_1048-8478.jpg?w=826&t=st=1708979807~exp=1708980407~hmac=a5ff2dea7e54b1f4cd22d8cf46d9760415d4f905a6165c70d0eaf2ed17e9df85"}}

          />
          <Text style={[styles.searchForA, styles.mapTypo]}>
            Find restaurants in...
          </Text>
        </View>
      </View>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardbaseIconLayout: {
    height: 213,
    width: 171,
    left: 226,
    borderRadius: Border.br_4xs_7,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  cardbaseIconPosition: {
    left: 14,
    height: 213,
    width: 171,
    borderRadius: Border.br_4xs_7,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  loremParentLayout: {
    height: 68,
    width: 140,
    position: "absolute",
  },
  dtTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  searchParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  sampleChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconPosition1: {
    top: 133,
    position: "absolute",
  },
  iconPosition: {
    top: 135,
    position: "absolute",
  },
  mapTypo: {
    fontFamily: FontFamily.proximaNova,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  wrapperBorder: {
    borderColor: Color.themeWhiteThemeCoreTokensGrey02HelperTexts,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_13xl,
    top: 199,
    flexDirection: "row",
    position: "absolute",
  },
  searchLayout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  cardbaseIcon: {
    marginTop: -169,
  },
  icon: {
    top: 293,
    width: 142,
    height: 115,
    left: 240,
    position: "absolute",
  },
  cardbaseIcon1: {
    marginTop: -170,
  },
  cardbaseIcon2: {
    marginTop: -172.1,
    left: 11,
    width: 173,
    height: 215,
    borderRadius: Border.br_4xs_7,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  cardbaseIcon3: {
    marginTop: 97,
  },
  cardbaseIcon4: {
    marginTop: 96,
  },
  loremIpsumDolor: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    height: 64,
    top: 0,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    width: 140,
  },
  dt: {
    top: 40,
    fontFamily: FontFamily.robotoRegular,
    width: 67,
    height: 28,
  },
  loremIpsumDolorSitAmetGroup: {
    left: 0,
    top: 0,
    height: 68,
    width: 140,
    position: "absolute",
  },
  loremIpsumDolorSitAmetParent: {
    top: 424,
    left: 241,
  },
  crmeTartinerAuxNoisettesIcon: {
    top: 560,
    left: 38,
    width: 118,
    height: 113,
    position: "absolute",
  },
  unnamed1Icon: {
    top: 278,
    left: 30,
    width: 141,
    height: 145,
    position: "absolute",
  },
  sampleChild: {
    marginLeft: -223,
    borderRadius: 10,
    width: 446,
    height: 80,
    bottom: 0,
    left: "50%",
  },
  creditCardIcon: {
    left: 360,
    top: 133,
    position: "absolute",
  },
  buttonPlusIcon: {
    marginLeft: -34.5,
    bottom: 48,
    width: 70,
    height: 70,
  },
  scanAltIcon: {
    top: 80,
    left: 212,
    width: 74,
    height: 53,
    position: "absolute",
  },
  homeLightIcon: {
    left: 46,
    width: 30,
    height: 27,
  },
  mapIcon: {
    left: 96,
    height: 24,
    width: 24,
  },
  userCircleIcon: {
    top: 132,
    left: 409,
    position: "absolute",
  },
  fileDockSearchIcon: {
    top: 136,
    left: 147,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 307,
    width: 29,
    height: 20,
  },
  loremIpsumDolorSitAmetContainer: {
    top: -17,
    left: 64,
  },
  sample: {
    borderTopRightRadius: Border.br_xl,
    width: 495,
    height: 190,
    borderTopLeftRadius: Border.br_xl,
  },
  sampleWrapper: {
    top: 708,
    left: -38,
    width: 399,
    height: 60,
    borderTopLeftRadius: Border.br_xl,
  },
  groupView: {
    top: 423,
    left: 26,
  },
  loremIpsumDolorSitAmetParent1: {
    top: 691,
    left: 243,
  },
  packGnoise1Icon: {
    top: 551,
    left: 260,
    width: 124,
    height: 131,
    position: "absolute",
  },
  newArrivalHighResolutionLoIcon: {
    top: -2,
    left: -13,
    width: 432,
    height: 199,
    position: "absolute",
  },
  map: {
    color: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
  },
  mapWrapper: {
    backgroundColor: Color.themeWhiteThemeCoreTokensPrimaryBlack,
    borderColor: Color.themeWhiteThemeCoreTokensPrimaryBlack,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_13xl,
    top: 199,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  asian: {
    color: Color.themeWhiteThemeCoreTokensPrimaryBlack,
  },
  asianWrapper: {
    left: 67,
  },
  americanWrapper: {
    left: 141,
  },
  mexicanWrapper: {
    left: 240,
  },
  middleEastWrapper: {
    left: 331,
  },
  searchBarsearchTabExclusivChild: {
    right: 0,
    borderColor: "#d0d0d0",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    bottom: 0,
    left: 0,
    top: 0,
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
  },
  searchIcon: {
    overflow: "hidden",
  },
  searchForA: {
    fontWeight: "500",
    color: Color.themeWhiteThemeCoreTokensGrey02HelperTexts,
    marginLeft: 4,
  },
  searchParent: {
    top: 14,
    left: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarsearchTabExclusiv: {
    top: 238,
    left: 104,
    width: 199,
    height: 38,
  },
  rectangle: {
    bottom: 7,
    left: 139,
    borderRadius: 100,
    backgroundColor: "#434a57",
    width: 135,
    height: 5,
    position: "absolute",
  },
  magasine: {
    borderRadius: 30,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
  },
});

export default Magasine;
