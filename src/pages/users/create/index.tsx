import { Box, Divider, Flex } from '@chakra-ui/react';

import Header from '../../../components/Header';
import Heading from '../../../components/Heading';
import Sidebar from '../../../components/Sidebar';

import Form from './Form';

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading>Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <Form />
        </Box>
      </Flex>
    </Box>
  );
}