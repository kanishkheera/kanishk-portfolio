import { Link } from "@chakra-ui/react";

const linkItems = [
  { id: 1, value: "Home", target: "home" },
  { id: 3, value: "Projects", target: "projects" },
  { id: 2, value: "About", target: "about" },
  { id: 4, value: "Skills", target: "skills" },
  { id: 5, value: "Contact", target: "contact" },
];

export default function NavItems({ bottom, onNavigate }) {
  const handleClick = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // useful if this is inside a mobile drawer you want to auto-close
    if (onNavigate) onNavigate();
  };

  return (
    <>
      {linkItems.map((ele) => (
        <Link
          key={ele.id}
          href={`#${ele.target}`}
          onClick={(e) => handleClick(e, ele.target)}
          position="relative"
          fontSize="md"
          fontWeight="medium"
          textDecoration="none"
          _hover={{
            color: "#823ccc",
            textDecoration: "none",
            _after: {
              transform: "scaleX(1)",
            },
          }}
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
        >
          {ele.value}
        </Link>
      ))}
    </>
  );
}