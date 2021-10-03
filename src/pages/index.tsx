import Layout from '../layouts/layout';
import { Blog } from '../types/blog';
import BlogCardList from '../components/blog/cardList';
import { fetchBlogList } from '../libs/microcms/blog';
import { fetchCategoryList } from '../libs/microcms/category';
import { Category } from '../types/category';

type Props = {
  blogs: Blog[];
  categories: Category[];
}

const Home = ({ blogs, categories }: Props) => {
  return (
    <Layout title={process.env.PROJECT_NAME!} description={process.env.PROJECT_DESCRIPTION!} categories={categories}>
      <BlogCardList blogs={blogs} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const blogs = await fetchBlogList();
  const categories = await fetchCategoryList();

  return {
    props: {
      blogs,
      categories,
    },
  };
};

export default Home;