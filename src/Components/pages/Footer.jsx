import {
  Box,
  Container,
  Grid,
  GridItem,
  Stack,
  HStack,
  IconButton,
  Link,
  Text,
  Heading,
  Separator,
  Span,
} from "@chakra-ui/react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/kanishkheera" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/kanishkheera" },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/kanishkheera" },
  //   { icon: FaInstagram, label: "Instagram", href: "#" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Certificates", href: "#" },
  { label: "Resume", href: "#" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/kanishkheera" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/kanishkheera" },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/kanishkheera" },
  //   { icon: FaInstagram, label: "Instagram", href: "#" },
];

function FooterLinkList({ title, links }) {
  return (
    <Stack
      gap="3"
      align={{ base: "center", lg: "flex-start" }}
      textAlign={{ base: "center", lg: "left" }}
    >
      <Heading as="h5" size="sm">
        {title}
      </Heading>
      <Stack gap="2" align={{ base: "center", lg: "flex-start" }}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            _hover={{ color: "#823ccc", textDecoration: "none" }}
            fontSize="sm"
          >
            {link.icon ? (
              <HStack gap="2">
                <link.icon />
                <Text as="span">{link.label}</Text>
              </HStack>
            ) : (
              link.label
            )}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box as="footer" pt="16" pb="6">
      <Container maxW="1240px">
        <Grid
          templateColumns={{
            // base: "1fr",
            base: "repeat(3, 1fr)",
            lg: "2fr 1fr 1fr 1fr",
          }}
          gap="10"
          m={"auto"}
        >
          <GridItem
            colSpan={{
            //   base: 1,
              base: 3,
              lg: 1,
            }}
          >
            <Stack
              gap="3"
              align={{ base: "center", lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Link
                href="#"
                fontSize="2xl"
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
              >
                <Heading fontSize={"28px"}>
                  <Span color={"#823ccc"}>K</Span>anishk
                  <Span color={"#823ccc"}>.</Span>
                </Heading>
              </Link>
              <Text fontSize="sm" maxW="xs">
                A passionate Frontend Developer who loves to build beautiful and
                functional web experiences.
              </Text>
              <HStack gap="3">
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    asChild
                    aria-label={social.label}
                    variant="outline"
                    rounded="full"
                    size="sm"
                    transition="all 0.3s ease"
                    _hover={{
                      color: "#823ccc",
                      borderColor: "#823ccc",
                      bg: {
                        base: "purple.50",
                        _dark: "rgba(130, 60, 204, 0.15)",
                      },
                      transform: "translateY(-3px) scale(1.08)",
                      boxShadow: "0 8px 20px rgba(130,60,204,0.25)",
                    }}
                  >
                    <Link href={social.href}>
                      <social.icon />
                    </Link>
                  </IconButton>
                ))}
              </HStack>
            </Stack>
          </GridItem>

          <GridItem>
            <FooterLinkList title="Quick Links" links={quickLinks} />
          </GridItem>

          <GridItem>
            <FooterLinkList title="Resources" links={resourceLinks} />
          </GridItem>

          <GridItem>
            <FooterLinkList title="Connect" links={connectLinks} />
          </GridItem>
        </Grid>

        <Separator my="8" />

        <HStack justify="space-between" wrap="wrap" gap="4">
          <Text fontSize="sm">© 2026 Kanishk Heera. All rights reserved.</Text>
          <IconButton
            aria-label="Back to top"
            onClick={scrollToTop}
            variant="solid"
            color={'white'}
            bg="#823ccc"
            rounded="full"
            size="sm"
          >
            <FaArrowUp />
          </IconButton>
        </HStack>
      </Container>
    </Box>
  );
}
