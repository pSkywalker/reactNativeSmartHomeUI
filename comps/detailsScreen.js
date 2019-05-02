import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,TouchableOpacity, View, Switch} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class DetailsScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      appStatus: true
    }
  }

  render() {
    let iconSize = 30;

    return (
      <View style={ styles.container }>

        <View style={styles.header}>
          <View style={styles.headerIconWrap}>
            <TouchableOpacity
              onPress={()=> this.props.navigation.goBack()}
            >
              <Icon style={[styles.headerIcon, styles.headerLeftIcon]} name="arrow-left" size={iconSize}/>
            </TouchableOpacity>
          </View>
          <View style={styles.headerIconWrap}>
            <Icon style={[styles.headerIcon, styles.headerRightIcon]} name="wifi" size={iconSize}/>
          </View>
        </View>

        <View style={styles.body}>

          <View style={styles.appImageWrap}>
            <Image style={styles.appImage} source={require("../images/smartSeven.png")}/>
          </View>

          <View style={styles.appNameWrap}>
            <Text style={styles.appName}> Washer </Text>
          </View>

          <View style={styles.appDescriptionWrap}>
            <View style={styles.appDetailWrap}>
              <Icon style={styles.appDetailPartIconSp} name="flash" />
              <Text style={styles.appDetailPart}> working </Text>
            </View>

            <View style={styles.appDetailWrap}>
              <Icon style={styles.appDetailPartIcon} name="tasks" />
              <Text style={styles.appDetailPart}> 02:37:54 </Text>
            </View>

            <View style={styles.appDetailWrap}>
              <Icon style={styles.appDetailPartIcon} name="shopping-cart"/>
              <Text style={styles.appDetailPart}> 5.3kg </Text>
            </View>
          </View>

          <View style={styles.appSwitchWrap}>
            <Text style={styles.appSwitchText}>ON</Text>
            <Switch
              style={styles.switch}
              thumbColor="#5CDAED"
              trackColor={{true:"#FFF",false:"#FFF"}}
              ios_backgroundColor="#83CED5"
              onValueChanged={()=>{}}
              value={this.state.appStatus}
            />
           <Text style={styles.appSwitchText}>OFF</Text>
          </View>

        </View>

      </View>
    )
  }

}


const styles = new StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFFBFB',
  },

  header:{
    flex: 0.2,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon : {
    color: "#51BFC7",
  },
  headerIconWrap: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },

  body:{
    flex:1,
  },

  appImageWrap: {
    flex: 0.4,
    justifyContent:"center",
    alignItems: "center",
  },

  appNameWrap:{
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  appName: {
    fontSize: 30,
    color: "#4BB5C0",
  },

  appDescriptionWrap: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  appDetailWrap: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  appDetailPartIconSp:{
    fontSize: 34,
    color: "#4BB5C0",
    paddingBottom:10,
  },
  appDetailPartIcon: {
    fontSize: 35,
    color: "#4BB5C0",
    paddingBottom:10,
  },
  appDetailPart: {
    fontSize: 20,
    color: "#4BB5C0",
  },

  appSwitchWrap: {
    flex: 0.2,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding: 5
  },
  appSwitchText:{
    color: "#4BB5C0",
  },

});
