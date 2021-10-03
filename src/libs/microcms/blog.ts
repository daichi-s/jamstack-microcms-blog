import { client } from './client';
import { Blog } from '../../types/blog';


/**
 * ブログ記事の一覧を取得する
 * 
 * @returns {Blog[]}
 */
export const fetchBlogList = async () => {
  const result: any = await client.get({
    endpoint: 'blog',
    queries: { orders: '-publishedAt' }
  });

  return result.contents as Blog[];
};

/**
 * slugと一致するブログ記事を取得する
 * 
 * @param {string} slug
 * @returns {Blog}
 */
export const fetchBlogBySlug = async (slug: string) => {
  const result: any = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1
    },
  });

  return result.contents[0] as Blog;
};

/**
 * キーワードと一致するブログ記事を取得する
 * 
 * @param {string} keyword
 * @returns {Blog}
 */
export const searchBlogsByKeyword = async (keyword: string) => {
  const result: any = await client.get({
    endpoint: 'blog',
    queries: {
      q: keyword,
      orders: '-publishedAt'
    },
  });

  return result.contents as Blog[];
};

/**
 * カテゴリと一致するブログ記事を取得する
 * 
 * @param {string} category
 * @returns {Blog}
 */
 export const searchBlogsByCategory = async (categoryId: string) => {
  const result: any = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `category[contains]${categoryId}`,
      orders: '-publishedAt',
    }
  });

  return result.contents as Blog[];
};