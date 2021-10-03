import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '../../types/blog';

type Props = {
  blogs: Blog[];
}

const BlogCardList = ({ blogs }: Props) => {
  return (
    <>
      {blogs.length === 0 ?
        <div>記事がありません</div>
        :
        <ul>
          {blogs.map(blog => (
            <li key={blog.id} className="py-5">
              <Link href={`/[slug]`} as={`/${blog.slug}`}>
                <a>
                  <div className="grid grid-cols-6">
                    <div className="col-span-3">
                      <Image src={blog.featured_image.url} alt="サムネイル" width="335" height="176" />
                    </div>
                    <div className="col-span-3">
                      <div>
                        <div className="text-lg font-bold">{blog.title}</div>
                      </div>
                      <div className="flex my-3">
                        {blog.category.map(_category => (
                            <div key={_category.id} className="border rounded p-1 mx-1">{_category.name}</div>
                        ))}
                      </div>
                      <div>
                        <div>{dayjs(blog.publishedAt).format('YYYY/MM/DD')}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default BlogCardList;