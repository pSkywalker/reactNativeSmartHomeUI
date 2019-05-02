
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,TouchableOpacity , View, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component<Props> {
  constructor(props){
    super(props);

  }

  render() {
    let iconSize = 27;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Icon style={styles.headerIcon} name="user-circle" size={iconSize}/>
          <Text style={[styles.headerIcon, styles.headerStatus]}> ONLINE </Text>
          <Icon style={styles.headerIcon} name="cog" size={iconSize}/>
        </View>

        <ScrollView style={styles.body}>

            <View style={styles.appWrapOuter}>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartOne.png")} style={[styles.appPic, styles.appLg]}/>
                <Text style={styles.appText}> 28:34 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartTwo.png")} style={[styles.appPic, styles.appLg]}/>
                <Text style={styles.appText}> 158:42 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.appWrapOuter}>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartThree.png")} style={[styles.appPic, styles.appSm]}/>
                <Text style={styles.appText}> 00:00 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartFour.png")} style={[styles.appPic, styles.appSm]}/>
                <Text style={styles.appText}> 43:26 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.appWrapOuter}>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartFive.png")} style={[styles.appPic, styles.appSm]}/>
                <Text style={styles.appText}> 03:14 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.appWrap}>
                <Image source={require("../images/smartSix.png")} style={[styles.appPic, styles.appLgEx]}/>
                <Text style={styles.appText}> 10.29 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.appWrapOuter}>
              <TouchableOpacity
                  style={styles.appWrap}
                  onPress={()=> this.props.navigation.navigate('Details') }
                >
                <Image source={require("../images/smartSeven.png")} style={[styles.appPic, styles.appSmEx]}/>
                <Text style={styles.appText}> 02:37 </Text>
              </TouchableOpacity>
              <View style={styles.appWrap}></View>
            </View>

        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerOption]}>
            <Icon style={styles.footerOptionPart} name="home" size={iconSize}/>
            <Text style={ [styles.footerText,styles.footerOptionPart] }>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerOption]}>
            <Icon style={styles.footerOptionPart} name="globe" size={iconSize}/>
            <Text style={[ styles.footerText,styles.footerOptionPart ]}>Internet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerOption]}>
            <Icon style={styles.footerOptionPart} name="group" size={iconSize}/>
            <Text style={ [styles.footerText, styles.footerOptionPart] }>Mode</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFBFB',
  },

  header:{
    flex: 0.2,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerIcon: {
    color: "#51BFC7",
  },
  headerStatus:{
    fontSize: 30,
    fontWeight: "900",
  },

  body: {
    flex:0.7,
  },
  appWrapOuter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  appWrap: {
    flex: 0.5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  appPic: {
  },
  appLgEx: {
    height: 120,
    width: 120,
  },
  appLg: {
    height: 100,
    width: 100,
  },
  appSmEx: {
    height: 110,
    width: 90
  },
  appSm: {
    height: 120,
    width: 120
  },
  appText: {
    paddingTop: 15,
    fontSize: 15,
    fontWeight: "700",
    color: "#55C9D0"
  },

  footer: {
    flex:0.12,
    flexDirection: "row",
    backgroundColor: "#FFF"
  },
  footerOption: {
    flex: 0.33,
    paddingTop: 5,
    alignItems: "center",
  },
  footerOptionPart: {
    color:"#52C2CA",
  }

});
