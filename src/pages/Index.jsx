import { Container, Text, VStack, Heading, Box, Link, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Cholera Outbreak Awareness</Heading>
        
        <Box>
          <Heading as="h2" size="lg">What is Cholera?</Heading>
          <Text mt={2}>
            Cholera is an acute diarrheal illness caused by infection of the intestine with Vibrio cholerae bacteria. People can get sick when they swallow food or water contaminated with cholera bacteria.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg">Symptoms and Prevention</Heading>
          <Text mt={2}>
            <strong>Symptoms:</strong> Watery diarrhea, vomiting, rapid heart rate, loss of skin elasticity, dry mucous membranes, low blood pressure, thirst, muscle cramps.
          </Text>
          <Text mt={2}>
            <strong>Prevention:</strong> Drink and use safe water, wash your hands often with soap and safe water, use latrines or bury your feces, cook food well, keep it covered, eat it hot, and peel fruits and vegetables.
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg">Emergency Contact Numbers</Heading>
          <Text mt={2}>
            If you or someone you know is showing symptoms of cholera, please contact the following emergency numbers immediately:
          </Text>
          <Text mt={2}>
            <strong>Lagos State Emergency:</strong> 112, 0800 123 4567
          </Text>
          <Text mt={2}>
            <strong>National Emergency:</strong> 123, 0800 987 6543
          </Text>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg">Health Resources</Heading>
          <Text mt={2}>
            For more information on cholera and how to protect yourself, visit the following resources:
          </Text>
          <VStack align="start" mt={2}>
            <Link href="https://www.who.int/health-topics/cholera" isExternal color="teal.500">WHO: Cholera</Link>
            <Link href="https://www.cdc.gov/cholera/index.html" isExternal color="teal.500">CDC: Cholera</Link>
            <Link href="https://www.unicef.org/cholera" isExternal color="teal.500">UNICEF: Cholera</Link>
          </VStack>
        </Box>
        
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Share this Information</Heading>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com" target="_blank" aria-label="Share on Facebook" icon={<FaFacebook />} colorScheme="facebook" />
            <IconButton as="a" href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Cholera%20Outbreak%20Awareness" target="_blank" aria-label="Share on Twitter" icon={<FaTwitter />} colorScheme="twitter" />
            <IconButton as="a" href="https://api.whatsapp.com/send?text=Cholera%20Outbreak%20Awareness%20https://yourwebsite.com" target="_blank" aria-label="Share on WhatsApp" icon={<FaWhatsapp />} colorScheme="whatsapp" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;