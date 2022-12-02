import fs from 'node:fs/promises'
import path from 'node:path'

import { logStep } from './cli'
import { type InsomniaTheme } from './insomnia'

const outPath = 'dist'

export async function bundleThemes(themes: InsomniaTheme[]) {
  logStep('Bundling themes')

  await fs.rm(outPath, { recursive: true, force: true })
  await fs.mkdir(outPath, { recursive: true })

  return fs.writeFile(path.join(outPath, 'index.js'), `module.exports.themes = ${JSON.stringify(themes, null, 2)}`)
}
