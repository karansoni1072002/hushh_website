import {
    Box,
    Button,
    Collapse,
    Heading,
    Text,
    VStack,
    useDisclosure,
    Flex,
    Spacer,
    Icon,
    Tooltip,
    Badge,
    SimpleGrid,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
  } from "@chakra-ui/react";
  import { FaChevronDown, FaChevronUp, FaCopy, FaCheck } from "react-icons/fa";
  import { useState } from "react"; 
  
  // List of API endpoints
  const apiEndpoints = [
    {
      method: "POST",
      path: "/register/",
      description: "Signup",
      requestBody: {
        mail: "user@example.com",
        password: "string",
        confirmpassword: "string",
      },
      responses: { 200: `"string"`, 422: `{"detail": "Validation Error"}` },
    },
    {
      method: "POST",
      path: "/profilesetup",
      description: "Profile Setup",
      requestBody: {
        firstname: "string",
        lastname: "string",
        mobilenumber: "integer",
        companyname: "string",
        website: "string",
        purpose: "string",
        mail: "string",
      },
      responses: { 200: `"string"`, 422: `{"detail": "Validation Error"}` },
    },
    {
        method: "POST",
        path: "/generateapikey",
        description: "Generate Api Key",
        requestBody: {
          mail: "string",
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
    {
      method: "POST",
      path: "/login",
      description: "Login",
      requestBody: {
        mail: "user@example.com",
        password: "string",
      },
      responses: { 200: `"string"`, 422: `{"detail": "Validation Error"}` },
    },
    {
        method: "POST",
        path: "/validatetoken",
        description: "Validate Token",
        requestBody: {
          token:"string",
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/refreshtoken",
        description: "Refresh Token",
        requestBody: {
          mail: "user@example.com",
          api_key:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "GET",
        path: "/getapikey",
        description: "Get Api Key",
        requestBody: {
          mail: "user@example.com",
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/receipt_data",
        description: "Get Receipt User Data",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/health-data",
        description: "Get Health Data",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/browsing",
        description: "Get Browsing Data",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/app-usage",
        description: "Get App Usage",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/brand-preferences",
        description: "Get Brand Preferences",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/food-data",
        description: "Get Food Data",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
      {
        method: "POST",
        path: "/api/v1/insurance-data",
        description: "Get Insurance Data",
        requestBody: {
          user_id: "string",
          token:"string"
        },
        responses: { 200: `"string"`, 422: `{
  "detail": [
    {
      "loc": [  
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}` },
      },
  ];
  
  const ApiDocumentation = () => {
    return (
      <Box p={5} borderRadius="lg" bg="gray.100" maxW="100%">
        <Heading size="lg" mb={6} textAlign="center" color="teal.600">
          API Documentation
        </Heading>
        {apiEndpoints.map((endpoint, index) => (
          <ApiSection key={index} endpoint={endpoint} />
        ))}
      </Box>
    );
  };
  
  const ApiSection = ({ endpoint }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box
        mb={6}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        bg="white"
        shadow="md"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        {/* API Header */}
        <Flex align="center" justify="space-between">
          <Flex align="center" cursor="pointer" onClick={onToggle}>
            <Badge
              colorScheme={endpoint.method === "GET" ? "blue" : "green"}
              mr={3}
              px={2}
              py={1}
              borderRadius="md"
              fontSize="0.9em"
            >
              {endpoint.method}
            </Badge>
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mr={2}>
              {endpoint.path}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {endpoint.description}
            </Text>
          </Flex>
          <Spacer />
          {/* Copy Button at the Rightmost Side */}
          <CopyButton textToCopy={endpoint.path} />
          <Icon
            as={isOpen ? FaChevronUp : FaChevronDown}
            boxSize={5}
            ml={4}
            cursor="pointer"
            onClick={onToggle}
          />
        </Flex>
  
        {/* Collapsible Content */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            align="start"
            spacing={4}
            mt={4}
            bg="gray.50"
            p={4}
            borderRadius="md"
          >
            {/* Request Body */}
            {Object.keys(endpoint.requestBody).length > 0 && (
              <Box w="full">
                <Text fontWeight="semibold" fontSize="md" mb={2}>
                  Request Body:
                </Text>
                <Box p={3} bg="gray.100" borderRadius="md" fontSize="sm">
                  <pre>{JSON.stringify(endpoint.requestBody, null, 2)}</pre>
                </Box>
              </Box>
            )}
  
            {/* Responses */}
            <Box w="full">
              <Text fontWeight="semibold" fontSize="md" mb={2}>
                Responses:
              </Text>
              {Object.entries(endpoint.responses).map(([code, response]) => (
                <Box key={code} mt={2}>
                  <Text fontWeight="bold" color="teal.600">
                    {code} Response:
                  </Text>
                  <Box
                    p={3}
                    bg="gray.700"
                    color="white"
                    fontSize="sm"
                    overflowX="auto"
                    borderRadius="md"
                  >
                    <pre>{response}</pre>
                  </Box>
                </Box>
              ))}
            </Box>
          </VStack>
        </Collapse>
      </Box>
    );
  };
  
  
  // Copy Button Component
  const CopyButton = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <Tooltip
        label={copied ? "Copied!" : "Copy to clipboard"}
        placement="top"
        hasArrow
      >
        <Button
          size="sm"
          colorScheme={copied ? "green" : "teal"}
          variant="ghost"
          onClick={handleCopy}
          leftIcon={copied ? <FaCheck /> : <FaCopy />}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </Tooltip>
    );
  };
  
  export default ApiDocumentation;
  
 
  

  