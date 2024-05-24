import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...pandoConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'], // <-- Make sure this matches your project structure
  exclude: [],

  presets: [pandaPreset, pandoPreset],
})