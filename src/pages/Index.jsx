import { Box, Button, Container, Flex, Heading, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Header */}
        <Box as="header" bg="white" boxShadow="sm" p={4}>
          <Heading size="lg" color="gray.800">
            Todo App
          </Heading>
        </Box>

        {/* Main Content */}
        <Flex flex="1" direction="column" p={8} bg="gray.50" color="gray.800">
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="md" mb={4}>
                What's on the agenda for today?
              </Heading>
              <Flex as="form" gap={2}>
                <Input placeholder="Add new task" bg="white" borderColor="gray.300" />
                <Button leftIcon={<FaPlus />} colorScheme="blue" px={8}>
                  Add
                </Button>
              </Flex>
            </Box>
            <Box bg="white" p={4} boxShadow="sm" borderRadius="md">
              <List spacing={3}>
                <ListItem display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="md">Finish the project documentation</Text>
                  <Button size="sm" colorScheme="red" variant="ghost">
                    <FaTrash />
                  </Button>
                </ListItem>
                <ListItem display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="md">Prepare for the Monday meeting</Text>
                  <Button size="sm" colorScheme="red" variant="ghost">
                    <FaTrash />
                  </Button>
                </ListItem>
              </List>
            </Box>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="white" color="gray.600" p={4}>
          <Flex justifyContent="space-between">
            <Text>&copy; 2023 Todo Company</Text>
            <Text>Privacy & Terms</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
