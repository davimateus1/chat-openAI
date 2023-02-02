import { Box } from '@chakra-ui/react';

export const GradientOne = (): JSX.Element => (
  <Box
    zIndex="0"
    position="absolute"
    w="20rem"
    h="24rem"
    top="0"
    left="0"
    bg="gradientOne"
    filter="blur(175px)"
  />
);

export const GradientTwo = (): JSX.Element => (
  <Box
    zIndex="0"
    position="absolute"
    w="20rem"
    h="24rem"
    top="-6rem"
    right="0"
    bg="gradientTwo"
    filter="blur(190px)"
  />
);
