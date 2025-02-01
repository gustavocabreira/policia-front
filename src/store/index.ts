import ICrime from "@/interfaces/ICrime";
import IMitigatingFactor from "@/interfaces/IMitigatingFactor";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { NOTIFY, SELECT_ATENUANTE, SELECT_CRIME, SET_USER } from "./mutation-types";
import IUser from "@/interfaces/IUser";
import { category, CategoryState } from "./modules/category";
import { INotification } from "@/interfaces/INotification";

export interface State {
  selectedCrimes: ICrime[];
  selectedMitigatingFactors: IMitigatingFactor[];
  user: IUser,
  category: CategoryState,
  notifications: INotification[],
}

export const key: InjectionKey<Store<State>> = Symbol();

// Store definition
export const store = createStore<State>({
  state: {
    selectedCrimes: [],
    selectedMitigatingFactors: [],
    user: {} as IUser,
    category: {
      categories: [],
    },
    notifications: [],
  },
  mutations: {
    [SELECT_CRIME](state, crime: ICrime) {
      const isCrimeSelected = state.selectedCrimes.some(existingCrime => existingCrime.label === crime.label);

      if (isCrimeSelected) {
        state.selectedCrimes = state.selectedCrimes.filter(existingCrime => existingCrime.label !== crime.label);
      } else {
        state.selectedCrimes.push(crime);
      }
    },
    [SELECT_ATENUANTE](state, mitigatingFactor: IMitigatingFactor) {
      const isMitigatingFactorSelected = state.selectedMitigatingFactors.some(existingMitigatingFactor => existingMitigatingFactor.id === mitigatingFactor.id);

      if (isMitigatingFactorSelected) {
        state.selectedMitigatingFactors = state.selectedMitigatingFactors.filter(existingMitigatingFactor => existingMitigatingFactor.id !== mitigatingFactor.id);
      } else {
        state.selectedMitigatingFactors.push(mitigatingFactor);
      }
    },
    [SET_USER](state, user: IUser) {
      state.user = user;
    },
    [NOTIFY](state, notification: INotification) {
      notification.id = new Date().getTime();
      state.notifications.push(notification);

      console.log(state.notifications)

      setTimeout(() => {
        state.notifications = state.notifications.filter(notif => notif.id !== notification.id);
      }, 3000);
    },
  },
  modules: {
    category,
  }
});

// Custom hook to access store
export function useStore(): Store<State> {
  return vuexUseStore(key);
}