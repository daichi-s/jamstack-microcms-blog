import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import BlogCardList from "../../components/blog/cardList";
import Layout from "../../layouts/layout";
import { searchBlogsByKeyword } from "../../libs/microcms/blog";
import { fetchCategoryList } from "../../libs/microcms/category";
import { Blog } from "../../types/blog";
import { Category } from "../../types/category";

type Props = {
  categories: Category[];
};

const SearchArticles = ({ categories }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;
      const keyword = router.query.q as string;
      const result = await searchBlogsByKeyword(keyword);
      setBlogs(result);
    })();
  }, [router.isReady, router.query.q]);

  return (
    <Layout title={process.env.PROJECT_NAME!} description={process.env.PROJECT_DESCRIPTION!} categories={categories}>
      <BlogCardList blogs={blogs} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const categories = await fetchCategoryList();

  return { props: { categories } };
};

export default SearchArticles;