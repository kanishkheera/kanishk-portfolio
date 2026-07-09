import {
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
  IconButton,
  Badge,
  Circle,
  Image,
} from "@chakra-ui/react";
import {
  FaPaperPlane,
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";

export default function Hero() {
  const socials = [
    { icon: <FaLinkedinIn />, label: "LinkedIn" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <Box as="section" id="home" py={{ base: 10, md: 20 }}>
      <Flex
        maxW="1240px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        gap={{ base: 9, lg: 16 }}
        align="center"
        direction={{ base: "column-reverse", lg: "row" }}
      >
        {/* Left column */}
        <Stack flex="1" gap={5} align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }}>
          <Badge
            colorPalette="purple"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="600"
          >
            Frontend Developer
          </Badge>

          <Heading as="h1" fontWeight="500" color="gray.400" fontSize={{ base: "xl", md: "2xl" }}>
            Hi, I'm
            <Heading as="span" display="block" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700" color="white" mt={1}>
              Kanishk <Box as="span" color="purple.300">Heera</Box>
            </Heading>
          </Heading>

          <Text color="purple.300" fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
            React Developer &nbsp;|&nbsp; MERN Stack Developer
          </Text>

          <Text color="gray.400" fontSize="sm" maxW="480px">
            I build beautiful, responsive and user-friendly web applications with modern
            technologies. Passionate about clean code and creating exceptional digital
            experiences.
          </Text>

          <HStack gap={4} wrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
            <Button
              colorPalette="purple"
              borderRadius="full"
              px={6}
              size="lg"
            >
              <FaPaperPlane /> Hire Me
            </Button>
            <Button
              variant="outline"
              borderRadius="full"
              px={6}
              size="lg"
              borderColor="whiteAlpha.400"
              color="white"
            >
              <FaDownload /> Download Resume
            </Button>
          </HStack>

          <HStack gap={4} pt={2}>
            <Text fontSize="xs" letterSpacing="wide" textTransform="uppercase" color="gray.500" fontWeight="600">
              Follow me on
            </Text>
            <HStack gap={2}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  variant="outline"
                  borderRadius="full"
                  size="sm"
                  borderColor="whiteAlpha.400"
                  color="gray.300"
                >
                  {s.icon}
                </IconButton>
              ))}
            </HStack>
          </HStack>
        </Stack>

        {/* Right column - visual */}
        <Box position="relative" w={{ base: "220px", md: "320px", lg: "420px" }} aspectRatio={1} flexShrink={0}>
          <Circle
            position="absolute"
            inset={0}
            size="100%"
            border="1px dashed"
            borderColor="purple.500/30"
          />
          <Circle
            position="absolute"
            inset="36px"
            size="calc(100% - 72px)"
            border="1px solid"
            borderColor="purple.500/15"
          />
          <Circle
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            size="72%"
            bgGradient="to-br"
            gradientFrom="#3b2e63"
            gradientTo="#1a1626"
            border="3px solid"
            borderColor="purple.500/40"
            boxShadow="0 30px 80px -20px rgba(124,58,237,0.5)"
            overflow="hidden"
          >
            {/* <svg viewBox="0 0 200 200" fill="none" width="78%" height="78%">
              <circle cx="100" cy="72" r="34" fill="#4c3a7d" />
              <path d="M40 190c0-40 26-72 60-72s60 32 60 72" fill="#4c3a7d" />
            </svg> */}
              <Image src="https://pbs.twimg.com/profile_images/1974476854229979136/NG8Vb7AL_400x400.jpg"/>
          </Circle>

          <FloatBadge top="10%" left="-4%" color="#61dafb" delay="0.2s">
            <FaReact />
          </FloatBadge>
          <FloatBadge top="4%" right="-2%" bg="#f7df1e" color="#1a1a1a" delay="1s" fontWeight="800">
            JS
          </FloatBadge>
          <FloatBadge bottom="8%" left="-4%" color="#68a063" delay="1.8s">
            <FaNodeJs />
          </FloatBadge>
          <FloatBadge bottom="12%" right="-4%" color="purple.300" delay="2.6s">
            <FaCss3Alt />
          </FloatBadge>
        </Box>
      </Flex>
    </Box>
  );
}

// Small helper for the floating tech badges
function FloatBadge({ children, delay = "0s", bg = "#15151f", color = "white", fontWeight, ...pos }) {
  return (
    <Circle
      position="absolute"
      size={{ base: "40px", md: "56px" }}
      bg={bg}
      color={color}
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 12px 30px -8px rgba(0,0,0,0.5)"
      fontSize={{ base: "16px", md: "20px" }}
      fontWeight={fontWeight}
      animation="float 5s ease-in-out infinite"
      style={{ animationDelay: delay }}
      {...pos}
    >
      {children}
    </Circle>
  );
}