import { ref, Ref, computed } from '@vue/composition-api';
import { UseUser } from '../types';
import { useSSR, onSSR } from '../../src/utils';

export type UseUserFactoryParams<USER, UPDATE_USER_PARAMS, REGISTER_USER_PARAMS> = {
  loadUser: () => Promise<USER>;
  logOut: (params?: {currentUser?: USER}) => Promise<void>;
  updateUser: (params: {currentUser: USER; updatedUserData: UPDATE_USER_PARAMS}) => Promise<USER>;
  register: (params: REGISTER_USER_PARAMS) => Promise<USER>;
  logIn: (params: { username: string; password: string }) => Promise<USER>;
  changePassword: (params: {currentUser: USER; currentPassword: string; newPassword: string}) => Promise<USER>;
  forgotPassword?: (params: { username: string }) => Promise<void>;
  createPassword?: (params: { username: string, token: string, newPassword: string}) => Promise<void>;
};

export function useUserFactory<USER, UPDATE_USER_PARAMS, REGISTER_USER_PARAMS extends { email: string; password: string }>(
  factoryParams: UseUserFactoryParams<USER, UPDATE_USER_PARAMS, REGISTER_USER_PARAMS>
) {
  const user: Ref<USER> = ref(null);
  const loading: Ref<boolean> = ref(false);
  const isAuthenticated = computed(() => Boolean(user.value));

  return function useUser(): UseUser<USER, UPDATE_USER_PARAMS> {
    const { initialState, saveToInitialState } = useSSR('vsf-user');

    user.value = initialState || null;

    const updateUser = async (params: UPDATE_USER_PARAMS) => {
      loading.value = true;
      try {
        user.value = await factoryParams.updateUser({currentUser: user.value, updatedUserData: params});
      } catch (err) {
        throw new Error(err);
      } finally {
        loading.value = false;
      }
    };

    const register = async (registerUserData: REGISTER_USER_PARAMS) => {
      loading.value = true;
      try {
        user.value = await factoryParams.register(registerUserData);
      } catch (err) {
        throw new Error(err);
      } finally {
        loading.value = false;
      }
    };

    const login = async (loginUserData: {
      username: string;
      password: string;
    }) => {
      loading.value = true;
      try {
        user.value = await factoryParams.logIn(loginUserData);
      } catch (err) {
        throw new Error(err);
      } finally {
        loading.value = false;
      }
    };

    const logout = async () => {
      try {
        await factoryParams.logOut();
        user.value = null;
      } catch (err) {
        throw new Error(err);
      }
    };

    const changePassword = async (currentPassword: string, newPassword: string) => {
      loading.value = true;
      try {
        user.value = await factoryParams.changePassword({currentUser: user.value, currentPassword, newPassword});
      } catch (err) {
        throw new Error(err);
      } finally {
        loading.value = false;
      }
    };

    const refreshUser = async () => {
      loading.value = true;
      try {
        user.value = await factoryParams.loadUser();
        saveToInitialState(user.value);
      } catch (err) {
        throw new Error(err);
      } finally {
        loading.value = false;
      }
    };

    const forgotPassword = async(params: { username: string }) => {
      try {
        await factoryParams?.forgotPassword(params);
      } catch (err) {
        throw new Error(err);
      }
    };

    const createPassword = async(username: string, token: string, newPassword: string) => {
      try {
        await factoryParams?.createPassword({ username, token, newPassword});
      } catch (err) {
        throw new Error(err);
      }
    };

    // Temporary enabled by default, related rfc: https://github.com/DivanteLtd/next/pull/330
    onSSR(async () => {
      if (!user.value) {
        await refreshUser();
      }
    });

    return {
      user: computed(() => user.value),
      updateUser,
      register,
      login,
      logout,
      isAuthenticated,
      changePassword,
      refreshUser,
      forgotPassword,
      createPassword,
      loading: computed(() => loading.value)
    };
  };
}
