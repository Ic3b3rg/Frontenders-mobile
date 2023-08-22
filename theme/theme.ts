import { createTheme } from "@rneui/themed";


/*
* hint: download Color Highlight to have a preview on the color hex code
* repo: https://github.com/enyancc/vscode-ext-color-highlight
*/

export const theme = createTheme({
    lightColors: {
        primary: '#333333',
        secondary: '#465949',
        tertiary: '#fff',
        background: '#fff',
        backgroundSecondary: '#e5e5e5',
        white: '#fff',
        accent: "#0A85D1",
        text: '#333333',
    },
    darkColors: {
        primary: '#cce73f',
        secondary: "#465949",
        tertiary: '#313c41',
        background: '#313c41',
        backgroundSecondary: '#252d30',
        white: '#fff',
        accent: "#5c9ead",
        text: '#fff'
    },
    components: {
        Button: {
            buttonStyle: { padding: 12 },
            radius: 'md',
            titleStyle: { fontWeight: '700' }
        },
        Chip:{
            titleStyle: { fontWeight: '300',fontFamily: 'OpenSans' },
        },
        Text:{
            style:{fontFamily: 'OpenSans'},
        }
    },
    mode: 'light',

})