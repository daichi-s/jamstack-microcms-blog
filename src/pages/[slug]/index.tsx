import dayjs from 'dayjs';
import Image from 'next/image';
import Layout from "../../layouts/layout";
import { fetchBlogBySlug, fetchBlogList } from '../../libs/microcms/blog';
import { fetchCategoryList } from '../../libs/microcms/category';
import { Blog } from "../../types/blog";
import { Category } from '../../types/category';

type Props = {
  blog: Blog
  categories: Category[];
};

const Article = ({ blog, categories }: Props) => {
  const publishedAt = dayjs(blog.publishedAt).format('YYYY/MM/DD');

  return (
    <Layout title={blog.title} description={blog.description} categories={categories}>
      <Image src={blog.featured_image.url} alt="サムネイル" width="820" height="430" />
      <div className="mt-5">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <div className="my-5">
          <div className="flex my-3">
            {blog.category.map(_category => (
              <div key={_category.id} className="border rounded py-1 px-2 mx-1">{_category.name}</div>
            ))}
          </div>
        </div>
        <div>{publishedAt}</div>
        {blog.contents.map((content, index) => (
          <div key={index} id="body" className="my-10" dangerouslySetInnerHTML={{ __html: content.richEditor ?? content.html as string }} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const blogs = await fetchBlogList();
  const paths = blogs.map((blog: Blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug;
  const blog = await fetchBlogBySlug(slug);
  const categories = await fetchCategoryList();

  return { props: { blog, categories } };
};

export default Article;