import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {}
        <Box as="header" bg="white" boxShadow="sm" p={4}>
          <Heading size="lg" color="gray.800">
            Todo App
          </Heading>
        </Box>

        {}
        <Flex flex="1" direction="column" p={8} bg="gray.50" color="gray.800">
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="md" mb={4}>
                What's on the agenda for today?
              </Heading>
              <Flex
                as="form"
                gap={2}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddTask();
                }}
              >
                <Input placeholder="Add new task" bg="white" borderColor="gray.300" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <Button leftIcon={<FaPlus />} colorScheme="blue" px={8} type="submit">
                  Add
                </Button>
              </Flex>
            </Box>
            <Box bg="white" p={4} boxShadow="sm" borderRadius="md">
              <List spacing={3}>
                {tasks.map((task, index) => (
                  <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                    <Text fontSize="md">{task}</Text>
                    <Button size="sm" colorScheme="red" variant="ghost" onClick={() => handleRemoveTask(index)}>
                      <FaTrash />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </Flex>

        {}
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
