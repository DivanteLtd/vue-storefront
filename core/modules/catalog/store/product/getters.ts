import { GetterTree } from 'vuex'
import RootState from '@vue-storefront/store/types/RootState'
import ProductState from '../../types/ProductState'

enum ProductStatus {
  Enabled = 1,
  Disabled
}

const getters: GetterTree<ProductState, RootState> = {
  productParent: (state) => state.parent,
  productCurrent: (state) => state.current,
  currentConfiguration: (state) => state.current_configuration,
  productOriginal: (state) => state.original,
  currentOptions: (state) => state.current_options,
  breadcrumbs: (state) => state.breadcrumbs,
  productGallery: (state) => state.productGallery,
  getCurrentAttributeNames: (state):Array<String> => {
    return Object.keys(state.current_configuration)
  },
  /**
   * Gets available product variants.
   * 
   * Every product has a `configurable_children` list with productVariants.
   * Product option (combination of product attributes like color, size) is available if:
   * - variant status is Enabled
   * - variant has a `stock` and flag `is_in_stock` and product config disables showing outOfStock product
   */
  getAvailableProductOptions: (state, getters, rootState) => {
    let availableOptions = {}
    getters.getCurrentAttributeNames.map(attributeName => {
      availableOptions[attributeName] = getters.currentOptions[attributeName].filter(option => {
        return !!getters.productCurrent.configurable_children.find(productVariant => 
          productVariant[option.attribute_code] === option.id.toString() &&
          productVariant.status === ProductStatus.Enabled &&
          (productVariant.stock && !rootState.config.products.listOutOfStockProducts && productVariant.is_in_stock)
        )
      })
    })
    return availableOptions
  }
}

export default getters
