import { Box, Flex } from '@chakra-ui/react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

import Form from './Form';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />
        <Form />
      </Flex>
    </Box>
  );
}