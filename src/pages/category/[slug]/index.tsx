import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import BlogCardList from '../../../components/blog/cardList';
import Layout from '../../../layouts/layout';
import { fetchBlogBySlug, fetchBlogList, searchBlogsByCategory, searchBlogsByKeyword } from '../../../libs/microcms/blog';
import { fetchCategoryBySlug, fetchCategoryList } from '../../../libs/microcms/category';
import { Blog } from '../../../types/blog';
import { Category } from '../../../types/category';

type Props = {
  blogs: Blog[]
  categories: Category[];
};

const CategoryArticles = ({ blogs, categories }: Props) => {
  return (
    <Layout title={process.env.PROJECT_NAME!} description={process.env.PROJECT_DESCRIPTION!} categories={categories}>
      <BlogCardList blogs={blogs} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const categories = await fetchCategoryList();
  const paths = categories.map((category: Category) => ({ params: { slug: category.slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: any) => {
  const category = await fetchCategoryBySlug(params.slug);
  const blogs = await searchBlogsByCategory(category.id);

  const categories = await fetchCategoryList();

  return { props: { blogs, categories } };
};

export default CategoryArticles;