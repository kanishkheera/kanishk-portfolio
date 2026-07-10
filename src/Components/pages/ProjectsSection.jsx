import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import galleryImg from "../images/gallery.png";
import calculatorImg from "../images/calculator.png";
import weatherImg from "../images/weather.png";

const projects = [
  {
    title: "Photo Gallery",
    description:
      "Modern photo gallery with search, favourites, albums and responsive masonry layout.",
    image: galleryImg,
    tags: ["React", "Chakra UI", "Vite"],
    href: "https://gallery-by-kanishk.vercel.app/",
  },
  {
    title: "Calculator",
    description:
      "Full-stack task management application with authentication and CRUD operations.",
    image: calculatorImg,
    tags: ["MERN", "Express", "MongoDB"],
    href: "https://calculator-by-kanishk.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather dashboard with location search and real-time forecast.",
    image: weatherImg,
    tags: ["React", "API", "CSS"],
    href: "https://weather-map-apl.netlify.app/",
  },
];

function ProjectCard({ project }) {
  return (
    <Box
      // bg="white"
      borderRadius="2xl"
      overflow="hidden"
      border="1px solid"
      borderColor="purple.400"
      transition=".3s"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "purple.500",
        shadow: "xl",
      }}
    >
      <Box position="relative">
        <Box overflow="hidden" borderRadius="md">
          <Image
            src={project.image}
            alt={project.title}
            w="100%"
            h="140px"
            objectFit="cover"
            transition="transform 0.4s ease"
            _hover={{
              transform: "scale(1.08)",
            }}
          />
        </Box>

        <Link href={project.href} target={"blank"}>
          <Button
            position="absolute"
            top={4}
            right={4}
            size="sm"
            borderRadius="full"
            colorPalette="purple"
          >
            <FaArrowUpRightFromSquare />
          </Button>
        </Link>
      </Box>

      <Stack p={5} gap={2}>
        <Heading size="md">{project.title}</Heading>

        <Text color="gray.600" fontSize="sm">
          {project.description}
        </Text>

        <Flex wrap="wrap" gap={2}>
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              colorPalette="purple"
              variant="subtle"
              borderRadius="full"
              px={3}
              py={1}
            >
              {tag}
            </Badge>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
      py={{ base: 16, md: 24 }}
      // bg="gray.50"
      maxW="1240px"
      mx="auto"
      // px={{ base: 5, md: 8 }}
      gap={{ base: 9, lg: 16 }}
      align="center"
    >
      <Container maxW="1240px">
        <Flex justify="space-between" align="end" mb={12} wrap="wrap" gap={5}>
          <Box>
            <Badge
              colorPalette="purple"
              variant="subtle"
              borderRadius="full"
              px={3}
              py={1}
              mb={4}
            >
              Featured Projects
            </Badge>

            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700">
              My Recent Work
            </Heading>

            <Text mt={3} color="gray.600" maxW="550px">
              Some projects I've built while learning modern web development
              using React, MERN Stack and responsive UI design.
            </Text>
          </Box>

          <Button variant="ghost" colorPalette="purple">
            View All
            <FaArrowRight />
          </Button>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
