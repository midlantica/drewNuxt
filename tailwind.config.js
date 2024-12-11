/** @type {import('tailwindcss').Config} */

import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import tailwindClipPath from 'tailwind-clip-path';
import tailwindColumnRule from 'tailwind-column-rule';

export default {
  // important: true,
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`
    // `./app.config.{js,ts}`
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square'
    },
    extend: {
      screens: {
        breakXxsm: '320px', // Xxsm
        breakXsm: '430px', // Xsm
        breakSm: '630px', // Sm
        breakMd: '768px', // Md
        breakLg: '840px', // Lg
        breakXlg: '1024px' // Xlg
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      boxShadow: {
        druShadow: '0px 0px 4px 0px #000000'
      },
      colors: {
        base: {
          grey: '#333',
          white: 'white',
          black: 'black',
          ivory: '#fffdf4',
          accent: '#ffa500',
          accentRed: '#7c0000',
          offWhite: '#d7e7f3',
          backBlack: '#1f1f1f'
        },
        modern: {
          rubyLight: '#E54379',
          ruby: '#D71D5B',
          rubyDark: '#AB1748',
          rubyDarker: '#7E1135',
          accent: '#FFC05C',
          accentRed: '#d71d5b',
          grey: '#352E38',
          backer: '#352E38'
        },
        bourbon: {
          bourbon: '#52090a',
          blueDark: '#46646E',
          blueMid: '#5B7D96',
          blueLight: '#8FA9C2',
          accent: '#ECB469',
          orange: '#e34234',
          paleyellow: '#ffffbf99',
          accentRed: '#c02c19',
          ivory: '#fffdf4'
        },
        groovy: {
          aqua: '#99f1ec',
          yellow: '#ffdd4b',
          orange: '#ff9f00',
          red: '#ff1a22',
          yellowPale: '#ffe985',
          aquaDk: '#80cbc7',
          yellowDk: '#d3b83e',
          orangeDk: '#e78e00',
          redDk: '#d5161d',
          yellowPaleDk: '#ffdd4b'
        },
        techy: {
          mango: '#ffc600',
          blueTech: '#423ba0'
        },
        corp: {
          grey: '#333',
          blueDark: '#01487F',
          black: '#012946',
          blueMid: '#5b7d96',
          blueLight: '#8fa9c2',
          accent: '#ecb469',
          ivory: '#fffdf4',
          orange: '#e34234',
          paleyellow: '#ffffbf99',
          paleBlue: '#7cc3fa',
          accentRed: '#C02C19',
          white: '#fffdf4'
        },
        punk: {
          red: '#FF0000',
          magenta: '#FF4BF5',
          peach: '#fbc83f'
        }
      },
      fontFamily: {
        base: {},
        //
        modernHead: ['Spartan, "Helvetica Neue", Helvetica, sans-serif'],
        modernSubhead: ['Spartan, "Helvetica Neue", Helvetica, sans-serif'],
        modernCopy: ['Spartan, "Helvetica Neue", Helvetica, sans-serif'],
        //
        bourbonHead: ['VeneerTwo, Helvetica, Arial, sans-serif'],
        bourbonSubhead: ['Veneer, Helvetica, Arial, sans-serif'],
        bourbonCopy: ['AmericanTypewriterStd-Med, Helvetica, Times, serif'],
        //
        groovyHead: ['Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif'],
        groovySubhead: [
          'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif'
        ],
        groovyCopy: ['Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif'],
        //
        techyHead: ['Dosis, "Helvetica Neue", Arial, sans-serif'],
        techySubhead: ['Dosis, "Helvetica Neue", Arial, sans-serif'],
        techyCopy: ['Dosis, "Helvetica Neue", Arial, sans-serif'],
        //
        corpHead: ['Bodoni Moda, Times, serif'],
        corpSubhead: ['Bodoni Moda, Times, serif'],
        corpCopy: ['Bodoni Moda, Times, serif'],
        //
        punkHead: ['Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif'],
        punkSubhead: [
          'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif'
        ],
        punkCopy: ['Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif']
      },
      dropShadow: {
        tightBlackDk: '1px 1px 1px hsla(0, 0%, 0%, 1)',
        tightBlackMd: '1px 1px 1px hsla(0, 0%, 0%, .5)',
        tightBlackLt: '1px 1px 1px hsla(0, 0%, 0%, .25)'
      }
    }
  },
  darkMode: 'class',
  plugins: [postcssNesting, tailwindcss, tailwindClipPath, tailwindColumnRule]
};
