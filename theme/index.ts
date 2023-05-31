import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import typography from './typography';
import buttonTheme from './components/button';

const overrides = {
  colors,
  ...typography,
  components: {
    Button: buttonTheme,
  }
}

const theme = extendTheme(overrides);

export default theme;