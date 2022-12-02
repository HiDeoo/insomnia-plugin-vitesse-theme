// https://docs.insomnia.rest/insomnia/custom-themes#how-to-build-a-custom-theme
export const BASE_INSOMNIA_THEME = {
  name: 'vitesse',
  displayName: 'Vitesse',
  theme: {
    background: {
      default: '#ffffff',
      success: '#ffffff',
      notice: '#ffffff',
      warning: '#ffffff',
      danger: '#ffffff',
      surprise: '#ffffff',
      info: '#ffffff',
    },
    foreground: {
      default: '#ffffff',
      success: '#ffffff',
      notice: '#ffffff',
      warning: '#ffffff',
      danger: '#ffffff',
      surprise: '#ffffff',
      info: '#ffffff',
    },
    highlight: {
      default: '#ffffff',
      xxs: '#ffffff',
      xs: '#ffffff',
      sm: '#ffffff',
      md: '#ffffff',
      lg: '#ffffff',
      xl: '#ffffff',
    },
    styles: {
      link: {
        foreground: {
          default: '#ffffff',
        },
      },
    },
  },
}

export type InsomniaTheme = typeof BASE_INSOMNIA_THEME
