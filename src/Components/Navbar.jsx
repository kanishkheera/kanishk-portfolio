import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Portal,
  Separator,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Mode } from "./Mode";
import {
  ColorModeButton,
  useColorModeValue,
  useColorMode,
} from "./ui/color-mode";
import { LiaBarsSolid } from "react-icons/lia";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <Box
      // px={"30px"}
      h={"55px"}
      display={"flex"}
      position={"sticky"}
      top={"0px"}
      zIndex={"999"}
      bg={{
        base: "rgba(255,255,255,0.6)",
        _dark: "rgba(10, 10, 16, 0.72)",
      }}
      border={{
        base: "1px solid rgba(255,255,255,0.2)",
        _dark: "1px solid rgba(255,255,255,0.08)",
      }}
      boxShadow={{
        base: "sm",
        _dark: "lg",
      }}
      backdropFilter="blur(16px)"
      WebkitBackdropFilter="blur(20px)"
      // backdrop-filter: blur(16px) saturate(140%);
      // border-bottom: 1px solid var(--border);
    >
      <Flex
        w={"100%"}
        align={"center"}
        justify={"space-between"}
        maxW="1240px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        gap={{ base: 9, lg: 16 }}
        align="center"
      >
        <Heading fontSize={{ base: "28px", md: "34px" }}>
          <Span color={"#823ccc"}>K</Span>anishk<Span color={"#823ccc"}>.</Span>
        </Heading>
        <Flex gap={4}>
          <Flex gap={7} display={{ base: "none", md: "flex" }}>
            <NavItems bottom={"6px"} />
          </Flex>
          {/* <Button bg={"#823ccc"} color={"white"} p={3} size={"md"}>
            Let's Talk
          </Button> */}
          <ColorModeButton />
          <Drawer.Root placement="right">
            <Drawer.Trigger asChild>
              <Icon
                boxSize={6}
                cursor="pointer"
                display={{ base: "flex", md: "none" }}
                _hover={{ color: "#823ccc" }}
                m={"auto"}
              >
                <LiaBarsSolid />
              </Icon>
            </Drawer.Trigger>

            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                  css={{
                    "&[data-state='open']": {
                      animation:
                        "slide-from-left-full 400ms cubic-bezier(0.32, 0.72, 0, 1) !important",
                    },
                    "&[data-state='closed']": {
                      animation:
                        "slide-to-left-full 350ms cubic-bezier(0.32, 0.72, 0, 1) !important",
                    },
                  }}
                >
                  <Drawer.Header>
                    <Drawer.Title
                      color={"#823ccc"}
                      textDecoration={"underline"}
                    >
                      Menu
                    </Drawer.Title>
                  </Drawer.Header>
                  <Separator mx={2} />
                  <Drawer.Body>
                    <VStack align="start" gap={5}>
                      <NavItems bottom={"0"} />
                    </VStack>
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Flex>
      </Flex>
      {/* <Separator color={'red'}/> */}
    </Box>
  );
}
