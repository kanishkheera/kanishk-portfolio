import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "0555e7b1-ab63-485d-99b0-ff516e43d170");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <Box as="section" py={{ base: 16, md: 24 }} id="contact">
      <Container maxW="1240px">
        <Box
          bg="whiteAlpha.50"
          border="1px solid"
          borderColor={{
            base: "gray.200",
            _dark: "whiteAlpha.200",
          }}
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
          backdropFilter="blur(10px)"
          position="relative"
          overflow="hidden"
        >
          {/* Background Glow */}
          <Box
            position="absolute"
            top="-25%"
            right="-10%"
            w="250px"
            h="250px"
            borderRadius="full"
            bg="purple.500"
            opacity={0.15}
            filter="blur(80px)"
            pointerEvents="none"
          />

          {/* Header */}
          <Box mb={10} position="relative" zIndex={1}>
            <Heading size={{ base: "xl", md: "2xl" }} mb={3} fontWeight="bold">
              Let's Work Together
            </Heading>

            <Text
              color="fg.muted"
              fontSize={'md'}
              maxW="650px"
              lineHeight="tall"
            >
              Have a project in mind, need a developer, or just want to say
              hello? I'd love to hear from you. Fill out the form below and I'll
              get back to you as soon as possible.
            </Text>
          </Box>

          {/* Form */}
          <form onSubmit={onSubmit}>
            <VStack gap={5} align="stretch">
              <Input
                name="name"
                placeholder="Your Name"
                size="lg"
                borderRadius="xl"
                // variant="subtle"
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                size="lg"
                borderRadius="xl"
                // variant="subtle"
                required
              />

              <Textarea
                name="message"
                placeholder="Write your message here..."
                rows={4}
                borderRadius="xl"
                // variant="subtle"
                resize="none"
                required
              />

              <Button
                type="submit"
                loading={loading}
                loadingText="Sending..."
                colorPalette="purple"
                size="lg"
                borderRadius="full"
                // width={{ base: "full", md: "fit-content" }}
                px={8}
              >
                <FaPaperPlane />
                Send Message
              </Button>

              {result && (
                <Text 
                textAlign={'center'}
                  color={result.includes("✅") ? "green.400" : "red.400"}
                  fontWeight="medium"
                >
                  {result}
                </Text>
              )}
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
