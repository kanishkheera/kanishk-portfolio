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
  Link,
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
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kanishkheera",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/kanishkheera",
    },
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      href: "https://x.com/kanishkheera",
    },
    // { icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <Box as="section" id="home" py={{ base: 10, md: 20 }}>
      <Flex
        maxW="1240px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        gap={{ base: 9, lg: 16 }}
        align="center"
        direction={{ base: "column-reverse", md: "row" }}
      >
        {/* Left column */}
        <Stack flex="1" gap={5} align="flex-start" textAlign="left">
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

          <Heading
            as="h1"
            fontWeight="500"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Hi, I'm
            <Heading
              as="span"
              display="block"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="700"
              mt={1}
            >
              Kanishk{" "}
              <Box as="span" color="#823ccc">
                Heera
              </Box>
            </Heading>
          </Heading>

          <Text fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
            React Developer &nbsp;|&nbsp; MERN Stack Developer
          </Text>

          <Text fontSize="sm" >
            I build beautiful, responsive and user-friendly web applications with modern technologies. Passionate about clean code and creating exceptional digital experiences.
          </Text>

          <HStack gap={4} wrap="wrap" justify={"flex-start"}>
            <Button colorPalette="purple" borderRadius="full" px={6} size="lg">
              <FaPaperPlane /> Hire Me
            </Button>
            <Button variant="outline" borderRadius="full" px={6} size="lg">
              <FaDownload /> Download Resume
            </Button>
          </HStack>

          <HStack gap={4} pt={2}>
            <Text
              fontSize="xs"
              letterSpacing="wide"
              textTransform="uppercase"
              fontWeight="600"
            >
              Follow me on
            </Text>
            <HStack gap={2}>
              {socials.map((s) => (
                <Link key={s.label} href={s.href} target="blank">
                  <IconButton
                    aria-label={s.label}
                    variant="outline"
                    borderRadius="full"
                    size="sm"
                  >
                    {s.icon}
                  </IconButton>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Stack>

        {/* Right column - visual */}
        <Box
          position="relative"
          w={{ base: "220px", md: "320px", lg: "420px" }}
          aspectRatio={1}
          flexShrink={0}
        >
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
            <Image src="https://pbs.twimg.com/profile_images/1974476854229979136/NG8Vb7AL_400x400.jpg" />
          </Circle>

          <FloatBadge top="10%" left="-4%" color="#61dafb" delay="0.2s">
            <FaReact />
          </FloatBadge>
          <FloatBadge
            top="4%"
            right="-2%"
            bg="#f7df1e"
            color="#1a1a1a"
            delay="1s"
            fontWeight="800"
          >
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
function FloatBadge({
  children,
  delay = "0s",
  bg = "#15151f",
  color = "white",
  fontWeight,
  ...pos
}) {
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
