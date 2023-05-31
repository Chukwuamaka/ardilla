import { Box } from '@chakra-ui/react';
import DesktopNavbar from './DesktopNavbar';

export default function Navbar() {
  return (
    <Box as='nav' bg='brand.purple'>
      <DesktopNavbar />
    </Box>
  )
}
