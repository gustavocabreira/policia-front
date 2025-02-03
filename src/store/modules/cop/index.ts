import client from "@/helpers/client";
import ICop from "@/interfaces/ICop";
import { State } from "@/store";
import { GET_COP } from "@/store/action-types";
import { SETUP_COPS } from "@/store/mutation-types";
import { Module } from "vuex";

export interface CopState {
  cops: ICop[],
}

export const cop: Module<CopState, State> = {
  mutations: {
    [SETUP_COPS](state, cops: ICop[]) {
      state.cops = cops;
    }
  },
  actions: {
    [GET_COP]({ commit }) {
      return client.get('users').then((response) => {
        commit(SETUP_COPS, response.data);
      })
    }
  }
}