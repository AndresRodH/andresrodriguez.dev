// eslint-disable-next-line @typescript-eslint/no-var-requires
const mdx = require('@mdx-js/mdx')

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // taken from the actual tailwind's blog codebase
    // https://github.com/tailwindlabs/blog.tailwindcss.com/blob/eb2a0ff80c8e56a79f6514c8dc4253ef84ac5548/tailwind.config.js#L13
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content)

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              []

            return broadMatches.concat(innerMatches)
          },
        },
      ],
    },
  },
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            code: {
              color: theme('colors.teal.500'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter'],
        mono: ['Jetbrains Mono'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
    uniformColorPalette: true,
  },
}
