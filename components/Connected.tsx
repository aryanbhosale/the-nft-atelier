import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={18}>
      <Container>
        <VStack spacing={10}>
          <Heading
            color="white"
            as="h1"
            width="10.8em"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome Connoisseur!
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each Elysium is randomly generated and can be staked to receive
            <Text as="b"> $LYSM</Text> Use your <Text as="b"> $LYSM</Text> to
            upgrade your Elysium and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint elysium</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected