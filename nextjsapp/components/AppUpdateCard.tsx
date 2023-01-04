import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

export default function AppCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <Button size="xs">Update</Button>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                APP
              </Heading>
              <Text pt="2" fontSize="sm">
                R7SGd5uUedjOpix8Q4so
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                TITLE
              </Heading>
              <Input pt="2" fontSize="sm" value="This is a title of the app" />
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                DESCRIPTION
              </Heading>
              <Input
                pt="2"
                fontSize="sm"
                value="This is a description of the app"
              />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
