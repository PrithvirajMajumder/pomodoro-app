import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, hexToRgba } from '../../styles/Colors';

const dangerColor = '#DC1010';

function AppTextInput({error, label, icon, ...otherProps}) {
  return (
    <View style={{marginVertical: 5}}>
      {label && (
        <Text style={[styles.label, error ? styles.isTextDanger : {}]}>
          {label}
        </Text>
      )}
      <View
        style={[styles.inputContainer, error ? styles.isContainerDanger : {}]}>
        {icon && (
          <Icon
            size={20}
            style={styles.icon}
            color={error ? dangerColor : colors.primary.dark}
            name={icon}></Icon>
        )}
        <TextInput
          style={[styles.input, error ? styles.isTextDanger : {}]}
          placeholderTextColor={colors.primary.low}
          {...otherProps}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: hexToRgba(colors.secondary.lowest, 0.5),
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  input: {
    fontSize: 14,
    fontWeight: '600',
    width: '100%',
    color: colors.primary.dark,
  },
  icon: {
    paddingRight: 10,
    marginRight: 5,
    borderRightWidth: 1,
    borderRightColor: colors.primary.lowest,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.primary.dark,
    marginBottom: 4,
    marginLeft: 6,
  },
  isTextDanger: {
    color: dangerColor,
  },
  isContainerDanger: {
    borderColor: dangerColor,
  },
});

export default AppTextInput;
