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
// import { Drawer } from "@ark-ui/react";

const linkItems = [
  { id: 1, value: "Home" },
  { id: 2, value: "About" },
  { id: 3, value: "Projects" },
  { id: 4, value: "Skills" },
  { id: 5, value: "Contact" },
];

export default function Navbar() {
  return (
    <Box mx={"30px"} h={"55px"} display={"flex"}>
      <Flex w={"100%"} align={"center"} justify={"space-between"}>
        <Heading fontSize={{base:"28px",md:"34px"}}>
          <Span color={"#823ccc"}>K</Span>anishk<Span color={"#823ccc"}>.</Span>
        </Heading>
        <Flex gap={4}>
          <Flex gap={7} display={{ base: "none", md: "flex" }}>
            {linkItems.map((ele) => (
              <Link
                key={ele.id}
                position="relative"
                fontSize="md"
                fontWeight="medium"
                textDecoration="none"
                _hover={{ textDecoration: "none", color: "#823ccc" }}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "6px",
                  width: "100%",
                  height: "2px",
                  bg: "#823ccc",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                }}
                _hover={{
                  color: "#823ccc",
                  textDecoration: "none",
                  _after: {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {ele.value}
              </Link>
            ))}
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
                    <Drawer.Title>Menu</Drawer.Title>
                  </Drawer.Header>
                  <Separator mx={2} />
                  <Drawer.Body>
                    <VStack align="start" gap={5}>
                      {linkItems.map((ele) => (
                        <Link
                          key={ele.id}
                          position="relative"
                          fontSize="md"
                          fontWeight="medium"
                          textDecoration="none"
                          _hover={{ textDecoration: "none", color: "#823ccc" }}
                          _after={{
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: "0",
                            width: "100%",
                            height: "2px",
                            bg: "#823ccc",
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.3s ease",
                          }}
                          _hover={{
                            color: "#823ccc",
                            textDecoration: "none",
                            _after: {
                              transform: "scaleX(1)",
                            },
                          }}
                        >
                          {ele.value}
                        </Link>
                      ))}
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
