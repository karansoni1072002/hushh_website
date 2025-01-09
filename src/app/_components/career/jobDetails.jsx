import { Box, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { jobs } from "../../data/jobs"; // Import your jobs data

export async function getStaticPaths() {
  const paths = jobs.map((job) => ({
    params: { id: job.id.toString() }, // Convert ID to string
  }));

  return {
    paths,
    fallback: false, // Return 404 for unknown paths
  };
}

export async function getStaticProps({ params }) {
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: { job },
  };
}

const JobDetail = ({ job }) => {
  return (
    <Box bg="black" color="white" minH="100vh" p={0}>
      {/* Header Section */}
      <Box bg="gray.800" py={10} px={{ base: 6, md: 12 }}>
        <VStack align="start" spacing={4}>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            {job.title}
          </Text>
          <Text fontSize="lg">{job.location}</Text>
        </VStack>
      </Box>
      
      {/* Job Details Section */}
      <Box py={10} px={{ base: 6, md: 12 }} bg="white" color="black">
        <VStack align="start" spacing={6}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              About the Company
            </Text>
            <Text>We are a user data api (visa for data) business that Builds products and solutions helping our users organize, manage and extract meaningful value from their own data, including ai monetization options to turn their data into a financial asset.</Text>
            <Text>Our motto is 'Your Data, Your Business', and we prioritize ownership, observability, and control of your data and its privacy. With hushh, you can monetize your data while prioritizing your privacy preferences if you choose to, allowing your trusted brands to serve you via the best virtual and human assistants. </Text>
            <Text>Our mission is to help make “your” data “your” business. We do this by helping you extract meaningful insights & solutions from your most valuable personal data that helps you and your family understand the power that lies within your personal data once you start collecting, organizing and managing it as a personal asset on your own devices.</Text>
          </Box>  
        
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Responsibilities
            </Text>
            <UnorderedList spacing={3}>
              {job.responsibilities.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Basic Qualifications
            </Text>
            <UnorderedList spacing={3}>
              {job.basicQualifications.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Additional Requirements
            </Text>
            <UnorderedList spacing={3}>
              {job.additionalRequirements.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default JobDetail;
