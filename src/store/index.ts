import ICrime from "@/interfaces/ICrime";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { SELECT_ATENUANTE, SELECT_CRIME } from "./mutation-types";
import IAtenuante from "@/interfaces/IAtenuante";

export interface State {
  crimes: ICrime[],
  atenuantes: IAtenuante[],
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    crimes: [],
    atenuantes: [],
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
    [SELECT_ATENUANTE](state, atenuante: IAtenuante) {
      const isSelected = state.atenuantes.some(el => el.label == atenuante.label);

      if (isSelected) {
        state.atenuantes = state.atenuantes.filter(el => el.label != atenuante.label);
      } else {
        state.atenuantes.push(atenuante);
      }
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
