import {
    TouchableOpacity,
    Text
} from 'react-native';

import { COLORS, FONTS } from '../constants'

const TextButton = ({containerStyle, disabled, label, labelStyle, onPress}) => {
  return (
      <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...containerStyle
        }}
        disabled={disabled}
        onPress={onPress}
      >

        <Text
            style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...labelStyle
            }}
        >
            {label}
        </Text>

      </TouchableOpacity>
  );
}

export default TextButton;
