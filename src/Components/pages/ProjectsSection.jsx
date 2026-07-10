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
      "Modern calculator with keyboard support, responsive layout, and advanced mathematical operations.",
    image: calculatorImg,
    tags: ["React", "JavaScript", "Chakra UI"],
    href: "https://calculator-by-kanishk.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather dashboard with location search, maps, and real-time forecast using APIs.",
    image: weatherImg,
    tags: ["React", "API", "CSS"],
    href: "https://weather-map-apl.netlify.app/",
  },
];

function ProjectCard({ project }) {
  return (
    <Box
    // w={'300px'}
    // h={'400px'}
      role="group"
      bg={{
        base: "rgba(255,255,255,0.7)",
        _dark: "#15151f",
      }}
      backdropFilter="blur(20px)"
      WebkitBackdropFilter="blur(20px)"
      borderRadius="2xl"
      overflow="hidden"
      border="1px solid"
      borderColor={{
        base: "gray.200",
        _dark: "whiteAlpha.200",
      }}
      transition="all .35s ease"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "purple.500",
        boxShadow: "0 20px 40px rgba(130,60,204,.25)",
      }}
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          w="100%"
          h="170px"
          objectFit="cover"
          transition="transform .45s ease"
          _groupHover={{
            transform: "scale(1.08)",
          }}
        />

        <Button
          asChild
          position="absolute"
          top={4}
          right={4}
          size="sm"
          rounded="full"
          colorPalette="purple"
          transition="all .3s"
          _groupHover={{
            transform: "rotate(45deg)",
          }}
        >
          <Link href={project.href} target="_blank">
            <FaArrowUpRightFromSquare />
          </Link>
        </Button>
      </Box>

      <Stack p={3} gap={2}>
        <Heading size="md">{project.title}</Heading>

        <Text
          fontSize="sm"
          color={{
            base: "gray.600",
            _dark: "gray.300",
          }}
        >
          {project.description}
        </Text>

        <Flex wrap="wrap" gap={2}>
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              colorPalette="purple"
              variant="subtle"
              px={3}
              py={1}
              borderRadius="full"
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
      maxW="1240px"
      mx="auto"
    >
      <Container maxW="1240px">
        <Flex
          justify="space-between"
          align={{ base: "flex-start", md: "flex-end" }}
          wrap="wrap"
          gap={6}
          mb={12}
        >
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

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="700"
            >
              My Recent Work
            </Heading>

            <Text
              mt={3}
              maxW="550px"
              color={{
                base: "gray.600",
                _dark: "gray.300",
              }}
            >
              Some projects I've built while learning modern web development
              using React, MERN Stack and responsive UI design.
            </Text>
          </Box>

          <Button variant="ghost" colorPalette="purple">
            View All
            <FaArrowRight />
          </Button>
        </Flex>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap={8}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}