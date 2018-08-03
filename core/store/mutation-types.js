
export const SN_CART = 'cart'
export const CART_ADD_ITEM = SN_CART + '/ADD'
export const CART_DEL_ITEM = SN_CART + '/DEL'
export const CART_UPD_ITEM = SN_CART + '/UPD'
export const CART_LOAD_CART = SN_CART + '/LOAD'
export const CART_UPD_SHIPPING = SN_CART + '/SHIPPING'
export const CART_SAVE = SN_CART + '/SAVE'
export const CART_UPD_ITEM_PROPS = SN_CART + '/UPD_PROPS'
export const CART_UPD_TOTALS = SN_CART + '/UPD_TOTALS'
export const CART_LOAD_CART_SERVER_TOKEN = SN_CART + '/SRV_TOKEN'
export const CART_UPD_PAYMENT = SN_CART + '/UPD_PAYMENT'

export const SN_WISHLIST = 'wishlist'
export const WISH_ADD_ITEM = SN_WISHLIST + '/ADD'
export const WISH_DEL_ITEM = SN_WISHLIST + '/DEL'
export const WISH_LOAD_WISH = SN_WISHLIST + '/LOAD'

export const SN_COMPARE = 'compare'
export const COMPARE_ADD_ITEM = SN_COMPARE + '/ADD'
export const COMPARE_DEL_ITEM = SN_COMPARE + '/DEL'
export const COMPARE_LOAD_COMPARE = SN_COMPARE + '/LOAD'

export const SN_CATEGORY = 'category'
export const CATEGORY_UPD_CATEGORIES = SN_CATEGORY + '/UPD_CATEGORIES'
export const CATEGORY_UPD_CURRENT_CATEGORY = SN_CATEGORY + '/UPD_CURRENT_CATEGORY'
export const CATEGORY_UPD_CURRENT_CATEGORY_PATH = SN_CATEGORY + '/UPD_CURRENT_CATEGORY_PATH'

export const SN_PRODUCT = 'product'
export const CATALOG_UPD_PRODUCTS = SN_PRODUCT + '/UPD_PRODUCTS'
export const CATALOG_UPD_RELATED = SN_PRODUCT + '/UPD_RELATED'
export const CATALOG_UPD_SEARCH_QUERY = SN_PRODUCT + '/UPD_SEARCH_QUERY'
export const CATALOG_SET_PRODUCT_CURRENT = SN_PRODUCT + '/SET_PRODUCT_CURRENT'
export const CATALOG_SET_PRODUCT_ORIGINAL = SN_PRODUCT + '/SET_PRODUCT_ORIGINAL'
export const CATALOG_RESET_PRODUCT = SN_PRODUCT + '/RESET_PRODUCT_ORIGINAL'
export const CATALOG_SET_PRODUCT_PARENT = SN_PRODUCT + '/SET_PARENT'
export const CATALOG_UPD_CUSTOM_OPTION = SN_PRODUCT + '/SET_CUSTOM_OPTION'
export const CATALOG_UPD_BUNDLE_OPTION = SN_PRODUCT + '/SET_BUNDLE_OPTION'
export const CATALOG_ADD_CUSTOM_OPTION_VALIDATOR = SN_PRODUCT + '/ADD_CUSTOM_OPTION_VALIDATOR'
export const SN_ATTRIBUTE = 'attribute'
export const ATTRIBUTE_UPD_ATTRIBUTES = SN_ATTRIBUTE + '/UPD_ATTRIBUTES'

export const SN_ORDER = 'order'
export const ORDER_PLACE_ORDER = SN_ORDER + '/PLACE_ORDER'
export const ORDER_PROCESS_QUEUE = SN_ORDER + '/PROCESS_QUEUE'

export const SN_CHECKOUT = 'checkout'
export const CHECKOUT_PLACE_ORDER = SN_CHECKOUT + '/PLACE_ORDER'
export const CHECKOUT_SAVE_PERSONAL_DETAILS = SN_CHECKOUT + '/SAVE_PERSONAL_DETAILS'
export const CHECKOUT_SAVE_SHIPPING_DETAILS = SN_CHECKOUT + '/SAVE_SHIPPING_DETAILS'
export const CHECKOUT_SAVE_PAYMENT_DETAILS = SN_CHECKOUT + '/SAVE_PAYMENT_DETAILS'
export const CHECKOUT_LOAD_PERSONAL_DETAILS = SN_CHECKOUT + '/LOAD_PERSONAL_DETAILS'
export const CHECKOUT_LOAD_SHIPPING_DETAILS = SN_CHECKOUT + '/LOAD_SHIPPING_DETAILS'
export const CHECKOUT_LOAD_PAYMENT_DETAILS = SN_CHECKOUT + '/LOAD_PAYMENT_DETAILS'
export const CHECKOUT_UPDATE_PROP_VALUE = SN_CHECKOUT + '/UPDATE_PROP_VALUE'
export const CHECKOUT_DROP_PASSWORD = SN_CHECKOUT + '/DROP_PASSWORD'

export const SN_USER = 'user'
export const USER_NEWSLETTER_SIGNUP = SN_USER + '/NEWSLETTER_SIGNUP'
export const USER_TOKEN_CHANGED = SN_USER + '/TOKEN_CHANGED'
export const USER_INFO_LOADED = SN_USER + '/INFO_LOADED'
export const USER_ORDERS_HISTORY_LOADED = SN_USER + '/ORDERS_HISTORY_LOADED'
export const USER_START_SESSION = SN_USER + '/START_SESSION'
export const USER_END_SESSION = SN_USER + '/END_SESSION'
export const USER_UPDATE_PREFERENCES = SN_USER + '/UPDATE_PREFERENCES'

export const SN_SYNC = 'sync'
export const SYNC_ADD_TASK = SN_SYNC + '/ADD_TASK'
export const SYNC_PROCESS_QUEUE = SN_SYNC + '/PROCESS_QUEUE'

export const SN_TAX = 'tax'
export const TAX_UPDATE_RULES = SN_TAX + '/UPDATE_RULES'

export const SN_CONTENT = 'content'
export const CONTENT_ADD_BLOCK = SN_CONTENT + '/ADD_BLOCK'
export const CONTENT_REMOVE_BLOCK = SN_CONTENT + '/REMOVE_BLOCK'
