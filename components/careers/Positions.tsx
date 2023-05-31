import { cabinet } from "@/fonts";
import { Box, Grid, GridItem, PositionProps, StackProps, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import blue_3d_tick from '../../public/blue_3d_tick.svg';
import pink_3d_tick from '../../public/pink_3d_tick.svg';
import green_ellipse from '../../public/green_ellipse.svg';
import yellow_ellipse from '../../public/yellow_ellipse.svg';

interface Position extends StackProps {
  title: string;
  description: string;
  status: 'open' | 'closed';
  bgIcon: StaticImageData | string;
  iconPos?: Omit<PositionProps, 'pos' | 'position'>;
}

type PositionCardProps = Position;

function PositionCard({ title, description, status, bgIcon, iconPos, ...props }: PositionCardProps ) {
  return (
    <VStack spacing={10} align='start' p={12} borderRadius={16} pos='relative' {...props}>
      <Box h='100%' pos='absolute' top={0} zIndex={0} {...iconPos}>
        <Image src={bgIcon} alt='Random Icon' style={{height: '100%', borderTopLeftRadius: 16}} />
      </Box>
      <Text as='h2' fontSize={32} fontWeight='bold' lineHeight={10} zIndex={1}>{title}</Text>
      <Text textStyle='sm_text' zIndex={1}>{description}</Text>
      <Text fontWeight='bold' lineHeight={8} zIndex={1}>
        {status === 'open' ? 'Position Open' : 'Position Closed'}
      </Text>
    </VStack>
  )
}

const positions: Position[] = [
  { title: 'Design', description: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.", status: 'closed', bgIcon: blue_3d_tick, iconPos: { left: 0 }, bgColor: '#B2D6FF' },
  { title: 'Engineering', description: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.", status: 'closed', bgIcon: green_ellipse, bgColor: '#B2FFDA' },
  { title: 'Content Writer', description: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.", status: 'closed', bgIcon: yellow_ellipse, iconPos: { right: '5%' }, bgColor: '#FFF7B2' },
  { title: 'Financial Adviser', description: "Oh no...Position currently filled, check back later! To make sure you don't miss any update subscribe to our newsletter.", status: 'closed', bgIcon: pink_3d_tick, iconPos: { left: 0 }, bgColor: '#FFCCDE' },
]

export default function Positions() {
  return (
    <Box as='section' px='9.5vw' py='120px' className={cabinet.className}>
      <Text as='h1' textStyle='heading' color='brand.primary' mb='98px'>
        Open Positions
      </Text>

      <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={14}>
        {positions.map(({ title, description, status, bgIcon, iconPos, ...props }) => (
          <GridItem key={title}>
            <PositionCard title={title} description={description} status={status} bgIcon={bgIcon} iconPos={iconPos} {...props} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
