import { bundleThemes } from './libs/build'
import { logError, stopSpinner } from './libs/cli'
import { convertVscTheme } from './libs/converter'
import { fetchVscThemes } from './libs/vsc'

async function run() {
  try {
    const vscThemePaths = await fetchVscThemes()

    const insomniaThemes = await Promise.all(vscThemePaths.map(convertVscTheme))

    await bundleThemes(insomniaThemes)
  } catch (error) {
    logError(error)
  } finally {
    stopSpinner()
  }
}

run()
