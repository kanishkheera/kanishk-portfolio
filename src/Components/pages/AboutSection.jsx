import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FaUser,
  FaLocationDot,
  FaEnvelope,
  FaBriefcase,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#504b4b" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#8B5CF6" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
];

const aboutItems = [
  { icon: FaUser, label: "Kanishk Heera" },
  { icon: FaLocationDot, label: "Agra, India" },
  { icon: FaEnvelope, label: "kanishk@example.com" },
  { icon: FaBriefcase, label: "Open to Work" },
];

// Small uppercase label used above headings, matches the ".eyebrow" style
function Eyebrow({ children }) {
  return (
    <Text
      fontSize="xs"
      fontWeight="bold"
      letterSpacing="0.08em"
      textTransform="uppercase"
      color="purple.500"
      mb={3}
    >
      {children}
    </Text>
  );
}

// Reusable glass panel wrapper, matches the ".panel" style
function Panel({ children, ...rest }) {
  return (
    <Box
      p={8}
      borderRadius="2xl"
      bg={{ base: "rgba(255,255,255,.6)", _dark: "rgba(17,25,40,.75)" }}
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
      {...rest}
    >
      {children}
    </Box>
  );
}

// Simple illustrated avatar (head + shoulders), matches ".about-photo" svg
function AvatarIllustration() {
  return (
    <Box
      w={{ base: "110px", md: "140px" }}
      h={{ base: "110px", md: "140px" }}
      flexShrink={0}
      borderRadius="full"
      overflow="hidden"
      bg={{ base: "purple.50", _dark: "whiteAlpha.100" }}
      border="1px solid"
      borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
    >
      <Image src="https://pbs.twimg.com/profile_images/1974476854229979136/NG8Vb7AL_400x400.jpg" />
    </Box>
  );
}

export default function AboutSection() {
  return (
    <Box id="about" py={{ base: 16, md: 24 }}>
      <Container maxW="1240px">
        <Grid templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }} gap={10}>
          {/* About */}
          <GridItem>
            <Panel
              bg={{
                base: "rgba(255,255,255,0.7)",
                _dark: "#15151f",
              }}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                align={{ base: "center", sm: "flex-start" }}
                gap={6}
                textAlign={{ base: "center", sm: "left" }}
              >
                <AvatarIllustration />

                <Box>
                  <Eyebrow>About Me</Eyebrow>

                  <Heading size="xl" mb={4}>
                    Get to know me
                  </Heading>

                  <Text mb={6}>
                    I'm a Computer Science Engineering student and a passionate
                    Frontend Developer. I love building web applications,
                    learning modern technologies, and creating responsive user
                    interfaces.
                  </Text>

                  <SimpleGrid columns={2} gap={4} mb={6}>
                    {aboutItems.map((item) => (
                      <HStack
                        key={item.label}
                        align="start"
                        justify={{ base: "center", sm: "flex-start" }}
                      >
                        <Icon as={item.icon} mt={1} />
                        <Text fontWeight="bold">{item.label}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>

                  <Button bg={"#823ccc"} color={"white"} size="sm">
                    More About Me
                  </Button>
                </Box>
              </Flex>
            </Panel>
          </GridItem>

          {/* Skills */}
          <GridItem id="skills">
            <Panel
              bg={{
                base: "rgba(255,255,255,0.7)",
                _dark: "#15151f",
              }}
            >
              <Eyebrow>My Skills</Eyebrow>

              <Heading size="xl" mb={8}>
                Technologies I work with
              </Heading>

              <SimpleGrid columns={{base:3,sm:4,md:5}} gap={5}>
                {skills.map((skill) => (
                  <Flex key={skill.name} direction="column" align="center">
                    <Flex
                      align="center"
                      justify="center"
                      w="56px"
                      h="56px"
                      borderRadius="full"
                      border="1px solid"
                      borderColor={{
                        base: "gray.200",
                        _dark: "whiteAlpha.200",
                      }}
                      transition=".3s"
                      _hover={{
                        transform: "translateY(-4px)",
                        borderColor: "purple.500",
                        boxShadow: "0 12px 25px rgba(130,60,204,.15)",
                      }}
                    >
                      <Icon as={skill.icon} boxSize={6} color={skill.color} />
                    </Flex>
                    <Text
                      fontWeight="600"
                      fontSize="sm"
                      textAlign="center"
                      p={2}
                    >
                      {skill.name}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Panel>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
