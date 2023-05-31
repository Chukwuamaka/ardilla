import { cabinet } from "@/fonts";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import notepad from "../../public/notepad.svg";
import interview from "../../public/interview.svg";
import feedback from "../../public/feedback.svg";

export default function HowWeHire() {
  return (
    <Box as='section' px='9.5vw' pt='140px' pb='219px' bg='brand.nearWhite' color='brand.primary' className={cabinet.className}>
      <Text as='h1' textStyle='heading' textTransform='capitalize' mb='98px'>
        How we hire
      </Text>

      <Flex justify='space-between'>
        <VStack spacing={5} align='start' flexBasis='30%'>
          <VStack spacing={7} align='start'>
            <Image src={notepad} alt='Notepad icon' width={29} height={28} />
            <Text as='h2' fontSize={24} fontWeight='bold' lineHeight={8}>Application</Text>
          </VStack>
          <Text lineHeight={10}>
            Send in your applications and if you are a good fit, we will schedule an interview.
          </Text>
        </VStack>
        <VStack spacing={5} align='start' flexBasis='30%'>
          <VStack spacing={7} align='start'>
            <Image src={interview} alt='Icon of a group of people' width={35} height={34} />
            <Text as='h2' fontSize={24} fontWeight='bold' lineHeight={8}>Hiring Managers Interview</Text>
          </VStack>
          <Text lineHeight={10}>
            The interview comprises a chat or two with the hiring manager and your department team lead about your suitability and skills for the role.
          </Text>
        </VStack>
        <VStack spacing={5} align='start' flexBasis='30%'>
          <VStack spacing={7} align='start'>
            <Image src={feedback} alt='Feedback icon' width={33.5} height={31} />
            <Text as='h2' fontSize={24} fontWeight='bold' lineHeight={8}>Feedback</Text>
          </VStack>
          <Text lineHeight={10}>
            When the process is complete, we give you feedback on your performance and we let you know if you have been selected.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
