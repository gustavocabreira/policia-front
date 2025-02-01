import client from "@/helpers/client";
import ICategory from "@/interfaces/ICategory";
import { State } from "@/store";
import { CREATE_CATEGORY } from "@/store/action-types";
import { Module } from "vuex";

export interface CategoryState {
  categories: ICategory[],
}

export const category: Module<CategoryState, State> = {
  actions: {
    [CREATE_CATEGORY](context, category: ICategory) {
      return client.post('categories', category)
    }
  }
}