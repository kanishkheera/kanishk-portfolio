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
    <Box mx={"30px"} h={"55px"} display={"flex"}>
      <Flex w={"100%"} align={"center"} justify={"space-between"}>
        <Heading fontSize={{base:"28px",md:"34px"}}>
          <Span color={"#823ccc"}>K</Span>anishk<Span color={"#823ccc"}>.</Span>
        </Heading>
        <Flex gap={4}>
          <Flex gap={7} display={{ base: "none", md: "flex" }}>
            <NavItems/>
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
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title color={"#823ccc"} textDecoration={'underline'}>Menu</Drawer.Title>
                  </Drawer.Header>
                  <Separator mx={2} />
                  <Drawer.Body>
                    <VStack align="start" gap={5}>
                      <NavItems/>
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
    </Box>
  );
}
