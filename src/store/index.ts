import ICrime from "@/interfaces/ICrime";
import IMitigatingFactor from "@/interfaces/IMitigatingFactor";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { SELECT_ATENUANTE, SELECT_CRIME, SET_USER } from "./mutation-types";
import IUser from "@/interfaces/IUser";

export interface State {
  selectedCrimes: ICrime[];
  selectedMitigatingFactors: IMitigatingFactor[];
  user: IUser,
}

export const key: InjectionKey<Store<State>> = Symbol();

// Store definition
export const store = createStore<State>({
  state: {
    selectedCrimes: [],
    selectedMitigatingFactors: [],
    user: {} as IUser,
  },
  mutations: {
    [SELECT_CRIME](state, crime: ICrime) {
      const isCrimeSelected = state.selectedCrimes.some(existingCrime => existingCrime.label === crime.label);

      if (isCrimeSelected) {
        // Remove crime if already selected
        state.selectedCrimes = state.selectedCrimes.filter(existingCrime => existingCrime.label !== crime.label);
      } else {
        // Add crime if not selected
        state.selectedCrimes.push(crime);
      }
    },
    [SELECT_ATENUANTE](state, mitigatingFactor: IMitigatingFactor) {
      const isMitigatingFactorSelected = state.selectedMitigatingFactors.some(existingMitigatingFactor => existingMitigatingFactor.id === mitigatingFactor.id);

      if (isMitigatingFactorSelected) {
        // Remove mitigating factor if already selected
        state.selectedMitigatingFactors = state.selectedMitigatingFactors.filter(existingMitigatingFactor => existingMitigatingFactor.id !== mitigatingFactor.id);
      } else {
        // Add mitigating factor if not selected
        state.selectedMitigatingFactors.push(mitigatingFactor);
      }
    },
    [SET_USER](state, user: IUser) {
      state.user = user;
    }
  },
});

// Custom hook to access store
export function useStore(): Store<State> {
  return vuexUseStore(key);
}