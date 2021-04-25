import { Box, Button, Checkbox, Flex, Icon, Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export default function Table() {
  return (
    <ChakraTable colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th width="8" />
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          <Td>24 de Abril, 2021</Td>
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiPencilLine} size="16" />}
            >
              Editar
            </Button>
          </Td>
        </Tr>
        
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          <Td>24 de Abril, 2021</Td>
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiPencilLine} size="16" />}
            >
              Editar
            </Button>
          </Td>
        </Tr>

        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          <Td>24 de Abril, 2021</Td>
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiPencilLine} size="16" />}
            >
              Editar
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </ChakraTable>
  );
}