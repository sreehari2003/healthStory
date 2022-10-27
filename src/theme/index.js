import { extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/500.css';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    font: {
        heading: `'Archivo',sans-serif`
    }
})