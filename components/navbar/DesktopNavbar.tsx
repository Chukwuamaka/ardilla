import { Box, Button, Flex, HStack, Icon, Link, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import ardilla_logo from '../../public/ardilla_logo.webp';
import globe from '../../public/globe.webp';
import NextLink from 'next/link';
import { ubuntu } from '@/fonts';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DesktopNavbar() {
  return (
    <Flex justify='space-between' align='center' py={5} px='9.5vw' className={ubuntu.className}>
      <Box mb={1.5}>
        <Image src={ardilla_logo} alt='Ardilla logo' width={99} height={32.5} />
      </Box>

      <HStack spacing={12} color='white'>
        <Link as={NextLink} href='/products'>
          <HStack spacing={2}>
            <Text as='span' textStyle='md_text'>Products</Text>
            <Icon as={ChevronDownIcon} />
          </HStack>
        </Link>
        <Link as={NextLink} href='/business'>
          <HStack spacing={2}>
            <Text as='span' textStyle='md_text'>Business</Text>
            <Tag size='sm' variant='outline' color='white' fontSize={9} fontWeight='normal' boxShadow='inset 0 0 0px 1px white'>
              Beta
            </Tag>
          </HStack>
        </Link>
        <Link as={NextLink} href='/company'>
          <HStack spacing={2}>
            <Text as='span' textStyle='md_text'>Company</Text>
            <Icon as={ChevronDownIcon} />
          </HStack>
        </Link>
        <Link as={NextLink} href='/learn' textStyle='md_text'>
          Learn
        </Link>
      </HStack>

      <HStack spacing='30px'>
        <HStack spacing={4} color='white'>
          <Link as={NextLink} href='/login' textStyle='md_text'>
            Sign In
          </Link>
          <Button bg='white' color='brand.purple' px={9} py={4} borderRadius={79.8}>
            Create Account
          </Button>
        </HStack>
        <HStack spacing={1.5}>
          <Box px={1.5} pt={1} pb={1.5} bg='white' borderRadius='50%' boxShadow='0px 4px 10px rgba(136, 7, 247, 0.07)'>
            <Image src={globe} alt='Globe' width={23} height={24.5} />
          </Box>
          <Icon as={ChevronDownIcon} color='white' boxSize='1.2em' />
        </HStack>
      </HStack>
    </Flex>
  )
}
