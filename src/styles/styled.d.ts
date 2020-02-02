import 'styled-components'; // Import all the package

declare module 'styled-components' { // Used to subscribe the Type definition
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            text: string;
        }
    }
}