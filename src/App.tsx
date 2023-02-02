import { Flex } from '@chakra-ui/react';
import { ChatBody, GradientOne, GradientTwo, Header } from './components';
import './App.css';

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

      <ChatBody />

      <div>kkk</div>
    </Flex>
  );
};

export default App;
