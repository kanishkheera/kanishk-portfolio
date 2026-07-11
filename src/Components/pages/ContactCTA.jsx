import { Box, Flex, Heading, Text, Button, Icon, Container } from "@chakra-ui/react";
import { FaPeopleArrows } from "react-icons/fa6";

const ContactCTA = () => {
  return (
    <Box as="section" id="contact" py={{ base: 10, md: 16 }} px={{ base: 4, md: 6 }}>
      <Container maxW="6xl" p={0}>
        <Flex
          bgGradient="linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={{ base: 5, md: 6 }}
          position="relative"
          overflow="hidden"
        >
          {/* soft glow circle like in the screenshot */}
          <Box
            position="absolute"
            top="-40%"
            right="-10%"
            w="300px"
            h="300px"
            borderRadius="full"
            bg="whiteAlpha.200"
            filter="blur(40px)"
            pointerEvents="none"
          />

          <Flex align="center" gap={4} zIndex={1}>
            <Flex
              w={12}
              h={12}
              minW={12}
              borderRadius="xl"
              bg="whiteAlpha.300"
              align="center"
              justify="center"
              fontSize="lg"
            >
              <Icon as={FaPeopleArrows} />
            </Flex>
            <Box >
              <Heading as="h3" size="lg" mb={1} fontWeight="bold">
                Let's work together on your next project
              </Heading>
              <Text fontSize="md" color="whiteAlpha.900">
                I'm available for freelance work and full-time opportunities.
              </Text>
            </Box>
          </Flex>

          <Button
            as="a"
            href="mailto:kanishkheera@gmail.com"
            bg="white"
            color="#7B2FF7"
            _hover={{ bg: "whiteAlpha.900" }}
            size="lg"
            px={10}
            borderRadius="full"
            fontWeight="semibold"
            w={{ base: "full", md: "auto" }}
            zIndex={1}
          >
            Let's Talk
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactCTA;