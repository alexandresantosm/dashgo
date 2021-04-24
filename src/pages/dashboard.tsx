import { Flex } from '@chakra-ui/react';

import Header from "../components/Header";
import Sidebar from '../components/Sidebar';

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />
      </Flex>
    </Flex>
  );
}