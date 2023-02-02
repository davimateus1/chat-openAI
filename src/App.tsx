import { Flex } from '@chakra-ui/react';
import { GradientOne, GradientTwo, Header } from './components';

const App = (): JSX.Element => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="backgroundChat"
      overflow="hidden"
      direction="column"
      justify="space-between"
      align="center"
      position="relative"
    >
      <GradientOne />
      <GradientTwo />
      <Header />
    </Flex>
  );
};

export default App;
