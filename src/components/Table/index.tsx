import { Box, Button, Checkbox, Icon, Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface TableProps {
  data: User[];
}

export default function Table({ data }: TableProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <ChakraTable colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={["4", "4", "6"]} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && (
            <>
              <Th>Data de cadastro</Th>
              <Th width="8" />
            </>
          )}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          { isWideVersion && <Td>24 de Abril, 2021</Td> }
          {isWideVersion && (
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
          )}
        </Tr>
        
        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          { isWideVersion && <Td>24 de Abril, 2021</Td> }
          {isWideVersion && (
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
          )}
        </Tr>

        <Tr>
          <Td px={["4", "4", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Alexandre Santos</Text>
              <Text fontSize="sm" color="gray.300">menezesalexandre@rocketmail.com</Text>
            </Box>
          </Td>
          { isWideVersion && <Td>24 de Abril, 2021</Td> }
          {isWideVersion && (
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
          )}
        </Tr>
      </Tbody>
    </ChakraTable>
  );
}