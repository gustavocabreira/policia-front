import client from "@/helpers/client";
import ICategory from "@/interfaces/ICategory";
import { State } from "@/store";
import { CREATE_CATEGORY, DELETE_CATEGORY, INDEX_CATEGORY, SHOW_CATEGORY, UPDATE_CATEGORY } from "@/store/action-types";
import { SETUP_CATEGORIES } from "@/store/mutation-types";
import { Module } from "vuex";

export interface CategoryState {
  categories: ICategory[],
}

export const category: Module<CategoryState, State> = {
  mutations: {
    [SETUP_CATEGORIES](state, categories: ICategory[]) {
      state.categories = categories;
    },
  },
  actions: {
    [CREATE_CATEGORY](context, category: ICategory) {
      return client.post('categories', category)
    },
    [INDEX_CATEGORY]({ commit }) {
      client.get('categories')
        .then((response) => {
          commit(SETUP_CATEGORIES, response.data)
        });
    },
    [SHOW_CATEGORY](context, categoryId: number) {
      return client.get(`categories/${categoryId}`)
    },
    [UPDATE_CATEGORY](context, category: ICategory) {
      return client.put(`categories/${category.id}`, category);
    },
    [DELETE_CATEGORY](context, categoryId: number) {
      return client.delete(`categories/${categoryId}`);
    }
  }
}