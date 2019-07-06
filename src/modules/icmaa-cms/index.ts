import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { blockModule, cmsBlockStateKey } from './store/block'
import { pageModule, cmsPageStateKey } from './store/page'
import { categoryExtrasModule, cmsCategoryExtrasStateKey } from './store/category-extras'
import { beforeRegistration } from './hooks/beforeRegistration'

export const KEY = 'icmaa-cms'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: {
    modules: [
      { key: cmsBlockStateKey, module: blockModule },
      { key: cmsPageStateKey, module: pageModule },
      { key: cmsCategoryExtrasStateKey, module: categoryExtrasModule }
    ]
  },
  beforeRegistration
}

export const IcmaaCms = new VueStorefrontModule(moduleConfig)
