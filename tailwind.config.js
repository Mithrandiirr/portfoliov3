/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'sora': 'Sora',
      'roslindale': "Roslindale Display Regular"
    },
    screens: {
      '2xl' : {'max': '1530px'},
      'xl' : {'max' : '1400px'},
      'lg' : {'max' : '1300px'},
      'base': {'max': '1150px'},
      'sm' : {'max' : '500px'}
    }
  },
  plugins: [],
}
