import { extendTheme } from '@chakra-ui/react';

const colors = {
  backgroundChat: '#1A232E',
  gradientOne: '#CA00FF',
  gradientOne03: 'rgba(202, 0, 255, 0.3)',
  gradientTwo: '#7AEBFB',
  grayColor: '#999999',
  rgbaWhite01: 'rgba(255, 255, 255, 0.1)',
  rgbaWhite04: 'rgba(255, 255, 255, 0.4)',
  shadow: '(0px 0px 10px rgba(0, 0, 0, 0.25))'
};

export const theme = extendTheme({ colors });
