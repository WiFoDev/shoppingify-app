import {CategoryResponse} from "@/pages/api/categories";

export const getCategories = async (): Promise<CategoryResponse> => {
  return fetch("/api/categories").then((res) => res.json());
};
