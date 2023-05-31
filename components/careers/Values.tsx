import { cabinet } from '@/fonts';
import { Box, BoxProps, HStack, PositionProps, Text, VStack } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import arrow_up from '../../public/arrow_up.svg';
import scope from '../../public/scope.svg';
import teamwork from '../../public/teamwork.svg';
import sun from '../../public/sun.svg';
import { CSSProperties } from 'react';

interface ValueCardProps extends BoxProps {
  title: string;
  content: string;
  bgIcon: StaticImageData | string;
  iconAltText: string;
  iconPos: Omit<PositionProps, 'pos' | 'position'>;
  iconStyles?: CSSProperties;
}

function ValueCard({ title, content, bgIcon, iconAltText, iconPos, iconStyles, ...props }: ValueCardProps) {
  return (
    <Box bg='brand.pink' px={9} pt='111px' borderRadius='0px 10px 0px 60px' minH='586px' maxW='278px' pos='relative' {...props}>
      <VStack spacing='66px' align='start' color='white'>
        <Text as='h2' textStyle='subheading' lineHeight={9} zIndex={1}>{title}</Text>
        <Text textStyle='sm_text' zIndex={1}>{content}</Text>
      </VStack>
      <Box pos='absolute' zIndex={0} {...iconPos}>
        <Image src={bgIcon} alt={iconAltText} style={iconStyles} />
      </Box>
    </Box>
  )
}

export default function Values() {
  return (
    <Box as='section' px='9.5vw' pt='120px' pb='149px' bg='brand.nearWhite' className={cabinet.className}>
      <VStack spacing={8} align='start' mb='95px' color='brand.primary'>
        <Text as='h1' textStyle='heading'>Our Values</Text>
        <Text textStyle='sm_text' maxW='50vw'>
          At Ardilla, our mission is to help people across the continent build wealth and achieve well thought out financial goals. However, we cannot do it alone.
        </Text>
      </VStack>

      <HStack spacing={5} align='start'>
        <ValueCard title='Excellence' content='We always bring our A game to work, putting our best foot forward.'
          bgIcon={arrow_up} iconAltText='Upward arrow icon' iconPos={{bottom: 0, left: 0}}
          iconStyles={{borderBottomLeftRadius: '60px'}}
        />
        <ValueCard title='Dedication' content='Consistency is the code to turning dreams to reality and at Ardilla, we have a lot of dreams to transform.'
          bgIcon={scope} iconAltText='Scope icon' iconPos={{top: 0, left: 0}}
          minH='657px' pt='252px' bg='brand.blue.600'
        />
        <ValueCard title='Teamwork' content='No one ever built anything alone. Strength in numbers is all good but more importantly is strength in working together.'
          bgIcon={teamwork} iconAltText='Icon depicting teamwork' iconPos={{top: 0, left: 0}}
          minH='657px' pt='252px' bg='brand.amber.500'
        />
        <ValueCard title='Positivity' content='Great attitude to work always wins and at Ardilla we are always big on positivity and a can do mindset.'
          bgIcon={sun} iconAltText='Sun icon' iconPos={{bottom: '5%', right: 0}} bg='brand.teal.600'
        />
      </HStack>
    </Box>
  )
}
