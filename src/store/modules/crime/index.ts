import client from "@/helpers/client";
import ICrime from "@/interfaces/ICrime";
import { State } from "@/store";
import { CREATE_CRIME } from "@/store/action-types";
import { Module } from "vuex";

export interface CrimeState {
  crimes: ICrime[],
}

export const crime: Module<CrimeState, State> = {
  actions: {
    [CREATE_CRIME](context, crime: ICrime) {
      console.log(crime)
      return client.post(`categories/${crime.category_id}/crimes`, crime)
    },
  }
}