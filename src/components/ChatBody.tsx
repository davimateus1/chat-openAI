import { Flex, Text } from '@chakra-ui/react';

export const ChatBody = (): JSX.Element => {
  const aiStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(30px)',
    backdrop: 'blur(30px)',
    dropShadow: '(0px 0px 10px rgba(0, 0, 0, 0.25))',
    color: 'black'
  };

  return (
    <Flex
      gap="4"
      w="full"
      direction="column"
      overflow="auto"
      h="90%"
      minW="20rem"
      p="3rem 2rem 0 2rem"
    >
      <Flex align="end" direction="column">
        <Flex
          justify="center"
          border="1px solid"
          borderColor="#999999"
          wordBreak="break-word"
          maxW="80%"
          p="2rem"
          borderRadius="1rem"
          backdropFilter="blur(30px)"
        >
          <Text color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            illum? Animi sed ea, nobis maxime inventore pariatur officia nisi
            non perferendis facere nemo exercitationem laboriosam quibusdam,
            consectetur ex labore unde? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloremque quo harum officia fugit atque? Ducimus,
            recusandae molestias. Qui nihil, magni, iste ut quaerat inventore
            ullam laudantium, rem iusto animi numquam?
          </Text>
        </Flex>
      </Flex>

      <Flex align="start" direction="column">
        <Flex
          justify="center"
          border="1px solid"
          borderColor="white"
          wordBreak="break-word"
          maxW="80%"
          p="2rem"
          borderRadius="1rem"
          sx={{ ...aiStyle }}
        >
          <Text color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            illum? Animi sed ea, nobis maxime inventore pariatur officia nisi
            non perferendis facere nemo exercitationem laboriosam quibusdam,
            consectetur ex labore unde? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloremque quo harum officia fugit atque? Ducimus,
            recusandae molestias. Qui nihil, magni, iste ut quaerat inventore
            ullam laudantium, rem iusto animi numquam?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
