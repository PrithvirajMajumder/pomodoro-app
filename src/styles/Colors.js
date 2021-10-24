export const colors = {
  primary: {
    darker: '#995823',
    dark: '#CC762F',
    medium: '#D69159',
    low: '#E0AD82',
    lowest: '#EBC8AC',
  },
  secondary: {
    darker: '#B57E50',
    dark: '#F2A86B',
    medium: '#F5B989',
    low: '#F7CBA6',
    lowest: '#FADCC4',
  },
  tertiary: {
    darker: '#1D4F80',
    dark: '#2769AB',
    medium: '#5287BC',
    low: '#7DA5CD',
    lowest: '#A9C3DD',
  },
  grey: {
    darker: '#4C4641',
    dark: '#665D57',
    medium: '#857D79',
    low: '#A39E9A',
    lowest: '#C2BEBC',
  },
  dark: {
    darker: '#161310',
    dark: '#1D1916',
    medium: '#4A4745',
    low: '#777573',
    lowest: '#A5A3A2',
  },
  light: {
    darker: '#BDB9B5',
    dark: '#FCF7F2',
    medium: '#FDF9F5',
    low: '#FDFAF7',
    lowest: '#FEFCFA',
  },
};

//color functions
export const hexToRgba = (hex, alpha = 1) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}, ${alpha})`
    : null;
};

export const getContrast = hexcode => {
  var r = parseInt(hexcode.substr(0, 2), 16);
  var g = parseInt(hexcode.substr(2, 2), 16);
  var b = parseInt(hexcode.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? colors.dark.dark : colors.light.dark;
};
