import client from "@/helpers/client";
import ICrime from "@/interfaces/ICrime";
import { State } from "@/store";
import { CREATE_CRIME, DELETE_CRIME, SHOW_CRIME, UPDATE_CRIME } from "@/store/action-types";
import { Module } from "vuex";

export interface CrimeState {
  crimes: ICrime[],
}

export const crime: Module<CrimeState, State> = {
  actions: {
    [CREATE_CRIME](context, crime: ICrime) {
      return client.post(`categories/${crime.category_id}/crimes`, crime)
    },
    [SHOW_CRIME](context, crime: any) {
      return client.get(`categories/${crime.category_id}/crimes/${crime.id}`, crime)
    },
    [UPDATE_CRIME](context, crime: ICrime) {
      return client.put(`categories/${crime.category_id}/crimes/${crime.id}`, crime)
    },
    [DELETE_CRIME](context, crime: ICrime) {
      return client.delete(`categories/${crime.category_id}/crimes/${crime.id}`);
    }
  }
}