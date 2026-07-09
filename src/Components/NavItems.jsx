import { Flex, Link } from "@chakra-ui/react";

const linkItems = [
  { id: 1, value: "Home" },
  { id: 2, value: "About" },
  { id: 3, value: "Projects" },
  { id: 4, value: "Skills" },
  { id: 5, value: "Contact" },
];

export default function NavItems({bottom}) {
  return (
    <>
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
            bottom: bottom,
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
    </>
  );
}
