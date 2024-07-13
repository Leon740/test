/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx, ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '32px'
    },
    fontFamily: {
      'calistoga-regular': 'Calistoga_Regular',
      'ss3-regular': 'SourceSans3_Regular',
      'ss3-bold': 'SourceSans3_Bold',
      'ss3-semibold': 'SourceSans3_Semibold'
    },
    fontSize: {
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      128: '128px'
    },
    letterSpacing: {
      3: '3px'
    },
    spacing: {
      0: 0,
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      128: '128px',
      256: '256px',
      512: '512px'
    },
    borderRadius: {
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      full: '50%'
    },
    extend: {}
  },
  plugins: []
};
