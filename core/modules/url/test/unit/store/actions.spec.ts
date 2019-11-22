import * as types from '@vue-storefront/core/modules/url/store/mutation-types'
import { cacheStorage } from '@vue-storefront/core/modules/recently-viewed/index'
import { actions as urlActions } from '../../../store/actions'
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import {StorageManager} from '@vue-storefront/core/lib/storage-manager'

const SearchQuery = {
  applyFilter: jest.fn()
}

jest.mock('@vue-storefront/core/lib/search/searchQuery', () => () => SearchQuery)
jest.mock('@vue-storefront/i18n', () => ({ t: jest.fn(str => str) }));
jest.mock('@vue-storefront/core/modules/recently-viewed/index', () => ({
  cacheStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  }
}));
jest.mock('@vue-storefront/core/lib/storage-manager', () => ({
  StorageManager: {
    init: jest.fn(),
    get: jest.fn(() => cacheStorage),
    getItem: jest.fn()
  }
}));
jest.mock('@vue-storefront/core/lib/multistore', () => ({
  currentStoreView: jest.fn(() => ({
    storeCode: '',
    localizedRoute: jest.fn(),
    appendStoreCode: ''
  })),
  localizedDispatcherRouteName: jest.fn(),
  removeStoreCodeFromRoute: jest.fn()
}));
jest.mock('@vue-storefront/core/lib/logger', () => ({
  Logger: {
    log: jest.fn(() => () => {
    }),
    debug: jest.fn(() => () => {
    }),
    warn: jest.fn(() => () => {
    }),
    error: jest.fn(() => () => {
    }),
    info: jest.fn(() => () => {
    })
  }
}));
jest.mock('@vue-storefront/core/modules/url/helpers', () => ({
  preProcessDynamicRoutes: jest.fn(),
  parametrizeRouteData: jest.fn(),
  removeStoreCodeFromRoute: jest.fn(),
  normalizeUrlPath: jest.fn()
}));
jest.mock('@vue-storefront/core/lib/storeCodeFromRoute', () => jest.fn());
jest.mock('config', () => ({}));
jest.mock('@vue-storefront/core/app', () => ({
  router: {
    addRoutes: jest.fn()
  }
}));

let url: string;
let routeData: any;

describe('Url actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    url = 'https://www.example.com';
    routeData = 'routeData';
  });

  describe('registerMapping action', () => {
    it('should call register mapping mutation', async () => {
      const contextMock = {
        commit: jest.fn()
      }
      const result = await (urlActions as any).registerMapping(contextMock, { url, routeData });

      expect(contextMock.commit).toHaveBeenCalledWith(types.REGISTER_MAPPING, { url, routeData });
      expect(result).toEqual(routeData)
    })
  })

  describe('registerDynamicRoutes action', () => {
    it('should NOT call registerMapping action if dispatcherMap state is empty', async () => {
      const contextMock = {
        state: {
          dispatcherMap: {}
        },
        dispatch: jest.fn()
      }
      const wrapper = (actions: any) => actions.registerDynamicRoutes(contextMock)

      await wrapper(urlActions)

      expect(contextMock.dispatch).not.toBeCalledWith('registerMapping', { url, routeData })
    })
    it('should call registerMapping action if dispatchetMap is not empty', async () => {
      const contextMock = {
        state: {
          dispatcherMap: {
            url: 'https://www.example.com'
          }
        },
        dispatch: jest.fn()
      }
      routeData = contextMock.state.dispatcherMap.url;
      url = 'url';

      const wrapper = (actions: any) => actions.registerDynamicRoutes(contextMock)

      await wrapper(urlActions)

      expect(contextMock.dispatch).toBeCalledWith('registerMapping', { url, routeData })
    })
  })

  /*
  describe('mapUrl action', () => {
    beforeEach(() => {
      (currentStoreView as jest.Mock).mockImplementation(() => ({storeCode: ''}));
    });

    it('should return resolved promise with parametrizedRoute if dispatcherMap[url] is set', async () => {
      const url = '/men/bottoms-men/shorts-men/shorts-19/troy-yoga-short-994.html';

      cacheStorage.getItem.mockImplementationOnce(
        jest.fn((cacheType, callback) => callback(null, url))
      )

      const contextMock = {
        state: {
          dispatcherMap: {
            name: 'configurable-product',
            params: {
              slug: 'troy-yoga-short-994',
              parentSku: 'MSH09',
              childSku: 'MSH09-32-Black'
            }
          }
        },
        dispatch: jest.fn()
      }
      const query = {childSku: 'MSH09-32-Black'};
      const expectedResult = {
        name: 'configurable-product',
        params: {
          slug: 'troy-yoga-short-994',
          parentSku: 'MSH09',
          childSku: 'MSH09-32-Black'
        }
      }
      const result = await (urlActions as any).mapUrl(contextMock, {url, query})
      expect(result).toEqual(expectedResult)
      // expect.assertions(1);
    //  return expect((actions: any) => actions.mapUrl(contextMock, {url, query})).resolves.toBe(expectedResult)
      // return (actions: any) => actions.mapUrl(contextMock, {url, query}).then(data => expect(data).toBe(expectedResult))
    })
  })
  */

  /*
  describe('mappingFallBack action', () => {
    it('should return the proper URL from API', async () => {
      const contextMock = {
        dispatch: jest.fn()
      }
      const params = {
        slug: 'slug',
        parentSku: 'sku',
        childSku: 'childSku'
      }
      const expectedResult = {
        name: 'product',
        params: params
      }
      const filter = {
        attribute: 'key',
        value: 'value',
        scope: 'scope',
        options: {}
      }
      const wrapper = (actions: any) => actions.mappingFallback(contextMock, {url, params})

      await wrapper(urlActions)

      expect(contextMock.dispatch).toBeCalledWith('product/list', { query: filter }, { root: true })
    })
  })
  */
})
