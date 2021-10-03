import { Category } from "../../types/category";
import { client } from "./client";

/**
 * カテゴリーの一覧を取得する
 * 
 * @returns {Category[]}
 */
export const fetchCategoryList = async () => {
  const result: any = await client.get({
    endpoint: 'categories',
    queries: { orders: 'order' }
  });

  return result.contents as Category[];
};

/**
 * カテゴリーのスラッグと一致するカテゴリを取得する
 * 
 * @param slug
 * @returns {Category}
 */
export const fetchCategoryBySlug = async (slug: string) => {
  const result: any = await client.get({
    endpoint: 'categories',
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1
    },
  });

  return result.contents[0] as Category;
};