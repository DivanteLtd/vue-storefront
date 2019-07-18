import { StorefrontModule } from '@vue-storefront/module'
import { CategoryStore } from './store'

const KEY = 'icmaa-category'

export const IcmaaCategoryModule: StorefrontModule = function (app, store, router, moduleConfig, appConfig) {
  store.registerModule('icmaaCategory', CategoryStore)
}
