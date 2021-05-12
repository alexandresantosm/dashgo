import { Box, Button, Checkbox, Icon, Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Link } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';

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

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    });
  }

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
        { data.map(user => {
          return (
            <Tr key={user.id}>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                    <Text fontWeight="bold">{user.name}</Text>
                  </Link>
                  <Text fontSize="sm" color="gray.300">{user.email}</Text>
                </Box>
              </Td>
              { isWideVersion && <Td>{user.createdAt}</Td> }
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
          )
        })}     
      </Tbody>
    </ChakraTable>
  );
}