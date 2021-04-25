import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alexandre Santos</Text>
          
          <Text color="gray.300" fontSize="small">
            menezesalexandre@rocketmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Alexandre Santos" src="http://github.com/alexandresantosm.png" />
    </Flex>
  );
}