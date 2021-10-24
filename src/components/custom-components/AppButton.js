import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, getContrast} from '../../styles/Colors';

function AppButton({
  icon,
  title,
  onPress,
  disabled,
  color,
  shade,
  centerFocus,
  reverse,
}) {
  const buttonColor = color ? color : 'primary';
  const contrastColor = colors[buttonColor][shade ? shade : 'dark'];

  const styles = StyleSheet.create({
    buttonBody: {
      backgroundColor: contrastColor,
      borderRadius: 10,
      height: 50,
      marginVertical: 16,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
      shadowColor: colors.primary.dark,
      elevation: 30,
    },
    disabled: {
      opacity: 0.5,
    },
    buttonText: {
      color: getContrast(contrastColor),
      fontWeight: '600',
      fontSize: 16,
    },
    buttonIcon: {
      marginHorizontal: 6,
    },
    centerFocus: {
      justifyContent: 'center',
    },
    alignmentReverse: {
      flexDirection: 'row-reverse',
    },
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonBody,
        centerFocus ? styles.centerFocus : {},
        reverse ? styles.alignmentReverse : {},
        disabled ? styles.disabled : {},
      ]}
      onPress={onPress}>
      {icon && (
        <Icon
          style={styles.buttonIcon}
          color={getContrast(contrastColor)}
          size={20}
          name={icon}></Icon>
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
