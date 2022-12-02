import { logStep } from './cli'
import { BASE_INSOMNIA_THEME } from './insomnia'
import { readVscTheme, type VscTheme } from './vsc'

export async function convertVscTheme(vscThemePath: string) {
  const vscTheme = await readVscTheme(vscThemePath)

  logStep(`Converting theme '${vscTheme.name}'`)

  const insomniaTheme = structuredClone(BASE_INSOMNIA_THEME)

  insomniaTheme.name = vscTheme.name.toLowerCase().replace(/ /g, '-')
  insomniaTheme.displayName = vscTheme.name

  insomniaTheme.theme.background.default = getVscThemeColor(vscTheme, 'editor.background')
  insomniaTheme.theme.background.success = getVscThemeColor(vscTheme, 'editorInfo.foreground')
  insomniaTheme.theme.background.notice = getVscThemeColor(vscTheme, 'terminal.ansiYellow')
  insomniaTheme.theme.background.warning = getVscThemeColor(vscTheme, 'editorWarning.foreground')
  insomniaTheme.theme.background.danger = getVscThemeColor(vscTheme, 'editorError.foreground')
  insomniaTheme.theme.background.surprise = getVscThemeColor(vscTheme, 'button.background')
  insomniaTheme.theme.background.info = getVscThemeColor(vscTheme, 'terminal.ansiCyan')

  insomniaTheme.theme.foreground.default = getVscThemeColor(vscTheme, 'editor.foreground')
  insomniaTheme.theme.foreground.success = getVscThemeColor(vscTheme, 'button.foreground')
  insomniaTheme.theme.foreground.notice = getVscThemeColor(vscTheme, 'button.foreground')
  insomniaTheme.theme.foreground.warning = getVscThemeColor(vscTheme, 'button.foreground')
  insomniaTheme.theme.foreground.danger = getVscThemeColor(vscTheme, 'button.foreground')
  insomniaTheme.theme.foreground.surprise = getVscThemeColor(vscTheme, 'button.foreground')
  insomniaTheme.theme.foreground.info = getVscThemeColor(vscTheme, 'button.foreground')

  insomniaTheme.theme.highlight.default = getVscThemeColor(vscTheme, 'descriptionForeground')
  insomniaTheme.theme.highlight.xxs = getVscThemeColor(vscTheme, 'input.background')
  insomniaTheme.theme.highlight.xs = getVscThemeColor(vscTheme, 'editor.lineHighlightBackground')
  insomniaTheme.theme.highlight.sm = getVscThemeColor(vscTheme, 'panel.border')
  insomniaTheme.theme.highlight.md = getVscThemeColor(vscTheme, 'panel.border')
  insomniaTheme.theme.highlight.lg = getVscThemeColor(vscTheme, 'input.placeholderForeground')
  insomniaTheme.theme.highlight.xl = getVscThemeColor(vscTheme, 'editorLineNumber.foreground')

  insomniaTheme.theme.styles.link.foreground.default = getVscThemeColor(vscTheme, 'textLink.foreground')

  return insomniaTheme
}

function getVscThemeColor(vscTheme: VscTheme, vscColorName: string) {
  const vscColor = vscTheme.colors[vscColorName]

  if (!vscColor) {
    throw new Error(`Could not find color with the '${vscColorName}' identifier.`)
  }

  return vscColor
}
