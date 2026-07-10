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
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Certificates", href: "#" },
  { label: "Resume", href: "#" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

function FooterLinkList({ title, links }) {
  return (
    <Stack gap="3" align="flex-start">
      <Heading as="h5" size="sm">
        {title}
      </Heading>
      <Stack gap="2" align="flex-start">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            // _hover={{ color: "white", textDecoration: "none" }}
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
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }} gap="10">
          <GridItem>
            <Stack gap="4" align="flex-start">
              <Link
                href="#"
                fontSize="2xl"
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
              >
                <Heading fontSize={'28px'}>
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
                    aria-label={social.label}
                    asChild
                    variant="outline"
                    colorPalette="whiteAlpha"
                    rounded="full"
                    size="sm"
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
