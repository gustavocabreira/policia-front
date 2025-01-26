import ICrime from "@/interfaces/ICrime";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { SELECT_CRIME } from "./mutation-types";

export interface State {
  crimes: ICrime[],
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    crimes: [],
  },
  mutations: {
    [SELECT_CRIME](state, crime: ICrime) {
      const isSelected = state.crimes.some(el => el.label == crime.label);

      if (isSelected) {
        state.crimes = state.crimes.filter(el => el.label != crime.label);
      } else {
        state.crimes.push(crime);
      }
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
