import React, { Component } from "react";
import { View, TouchableOpacity, Dimensions, Image, Text } from "react-native";
import reactCSS from "reactcss";
import { Colors } from "./Theme";

export const deviceWidth = Dimensions.get("window").width;

const HEIGHT = 50;

export const Header = ({ onPress, onPressProfile }) => {
  const styles = reactCSS({
    default: {
      headerContainer: {
        width: deviceWidth,
        height: HEIGHT,
        backgroundColor: Colors.PrimaryColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
      }
    }
  });

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: 40, height: 18 }}
          source={require("../../images/icons/back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressProfile}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../images/icons/user-round.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
