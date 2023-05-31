import { cabinet, ubuntu } from "@/fonts";
import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import culture_1 from '../../public/culture_1.webp';
import culture_2 from '../../public/culture_2.webp';
import culture_3 from '../../public/culture_3.webp';
import culture_4 from '../../public/culture_4.webp';

export default function Culture() {
  return (
    <Box as='section' pt='121px' pb='71px'>
      <Text as='h1' textStyle='heading' color='brand.primary' px='9.5vw' mb='100px' className={ubuntu.className}>
        The Ardilla Culture
      </Text>

      <Grid h='440px' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap='18px' mb={10}>
        <GridItem rowSpan={2} colSpan={1}>
          <Image src={culture_1} alt='Our culture' style={{height: '100%', objectFit: 'cover', borderRadius: '0 4px 4px 0'}} />
        </GridItem>
        <GridItem rowSpan={1} h='211px'>
          <Image src={culture_2} alt='Our culture' style={{maxHeight: '100%', objectFit: 'cover', borderRadius: 4}} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Image src={culture_4} alt='Our culture' style={{height: '100%', objectFit: 'cover', borderRadius: '4px 0 0 4px'}} />
        </GridItem>
        <GridItem rowSpan={1} h='211px'>
          <Image src={culture_3} alt='Our culture' style={{maxHeight: '100%', objectFit: 'cover', borderRadius: 4}} />
        </GridItem>
      </Grid>

      <Flex justify='space-between' color='brand.primary' px='9.5vw' className={cabinet.className}>
        <VStack spacing={6} align='start' flexBasis='46.5%'>
          <Text as='h2' textStyle='subheading'>Experienced professionals</Text>
          <Text textStyle='sm_text'>
            Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.
          </Text>
          <Text textStyle='sm_text'>
            We have a great team of diverse and talented professionals who share the values of the company. Because of the size of our dream, we need more hands on deck and you are always welcome to apply.
          </Text>
        </VStack>
        <VStack spacing={6} align='start' flexBasis='46.5%'>
          <Text as='h2' textStyle='subheading'>We give the best</Text>
          <Text textStyle='sm_text'>
            We know work can be quite dreadful, so we try to make it fun, as much as we can. We also offer competitive salaries as well as great packages.
          </Text>
          <Text textStyle='sm_text'>
            At Ardilla, dedication and excellence are always rewarded. No politics and no funny business.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
