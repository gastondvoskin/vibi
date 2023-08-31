import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/commons/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC255A",
        vibiGreen: "#40C351",
        vibiWhite: "#FFFFFF",
        vibiDarkGrey: "#5C6F94",
        vibiDarkBlue: "#102C57",
        vibiGreyWhite: "#ACB7C6",
        vibiGreyInput: "#C1CBDA",
        myWhite: "#FFFFFF",
        mygrey: "#F7F8FA",
        vibiOrange:"#E74646"
      },
      fontFamily:{
        normal: ["PPMori-Regular.otf"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
