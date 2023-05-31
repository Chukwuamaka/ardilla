import { cabinet } from "@/fonts";
import { Box, Grid, GridItem, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import employee from '../../public/employee.webp';

interface PersonProps {
  name: string;
  position: string;
  image: StaticImageData | string;
  testimonial: string;
}

function Person({ name, position, image, testimonial }: PersonProps) {
  return (
    <HStack spacing={4} align='start'>
      <Box pos='relative' maxH='255px' flex='1'>
        <Image src={image} alt={name} width={281} height={255} style={{borderRadius: 18}} />
        <Icon as={PlayCircleIcon} color='#ffffff80' boxSize='2.7em' pos='absolute' top='calc(50% - 2.7em/2)' left='calc(50% - 2.7em/2)' />
        <VStack spacing='1px' align='start' color='white' pos='absolute' left='8%' bottom='8%'>
          <Text fontSize='1.250rem' fontWeight='bold'>
            {name}
          </Text>
          <Text textStyle='sm_text' lineHeight={6}>{position}</Text>
        </VStack>
      </Box>
      <Text flex='1' textStyle='sm_text' fontWeight='medium' color='brand.gray.400' pt={7}>{testimonial}</Text>
    </HStack>
  )
}

const people = [
  { name: 'Aiyeola Mathew', position: 'Lead Designer', image: employee, testimonial: 'Working with Ardilla has exposed me to innovative ideas and advanced technology.' },
  { name: 'Oshodi David', position: 'Product Designer', image: employee, testimonial: 'Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job' },
  { name: 'Akindele Olamilekan', position: 'Frontend Engineer', image: employee, testimonial: 'At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.' },
  { name: 'Anita Ojieh', position: 'Product Manager', image: employee, testimonial: 'Although Ardilla is challenging, it is the type of challenge that gets you motivated.' },
]

export default function People() {
  return (
    <Box as='section' py='120px' px='9.5vw' className={cabinet.className}>
      <Text as='h1' textStyle='heading' color='brand.primary' mb='167px'>
        People are what matters 
      </Text>
      <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' rowGap={8} columnGap={20}>
        {people.map(({ name, position, image, testimonial }) => (
          <GridItem key={name+position}>
            <Person name={name} position={position} image={image} testimonial={testimonial} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
