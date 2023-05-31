import { cabinet } from '@/fonts';
import { Box, VStack } from '@chakra-ui/react';

export default function TopBanner() {
  return (
    <VStack as='section' align='start' spacing={-1.5} bg='brand.purple' pr='13vw' pl='17vw' pt='130px' pb='165px' className={cabinet.className}>
      <Box bg='brand.amber.500' textStyle='lg_text' color='white' borderRadius={6} pt='50px' pr='200px' maxW='max-content'>
        Join us in shaping..
      </Box>
      <Box bg='brand.pink' textStyle='lg_text' color='white' borderRadius={6} pt='50px' pr='200px'
        maxW='max-content' alignSelf='end'
      >
        The Future..
      </Box>
      <Box bg='brand.teal.600' textStyle='lg_text' color='white' borderRadius={6} pt='50px' pr='200px'
        maxW='max-content'
      >
        Of Finance..
      </Box>
    </VStack>
  )
}
