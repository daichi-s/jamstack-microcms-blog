import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Category } from '../../types/category';

type Props = {
  categories: Category[];
};

const Sidemenu = ({ categories }: Props) => {
  const router = useRouter();

  const handleSearch = (e: any) => {
    if (e.code === 'Enter') {
      router.push({
        pathname: '/search',
        query: { q: e.target.value },
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 mb-8">
        <label className="text-sm">サイト内検索</label>
        <input type="text" className="border" onKeyPress={handleSearch} />
      </div>
      <div className="grid grid-cols-1 mb-8">
        <div className="text-lg font-bold bg-gray-200 p-2 mb-3">カテゴリー</div>
        <div>
          <ul>
            {categories.map(category => (
              <li key={category.id} className="border-b flex">
                <Link href={`/category/${category.slug}`}>
                  <a className="p-2">{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* TODO: 後々実装する */}
      {/* <div className="grid grid-cols-1"> */}
        {/* <div className="text-lg font-bold bg-gray-200 p-2 mb-3">人気の記事</div> */}
        {/* <div> */}
          {/* <ul> */}
            {/* <li className="border-b flex"> */}
              {/* <Link href="#"> */}
                {/* <a className="p-2"> */}
                  {/* <div>aaa</div> */}
                  {/* <div>記事タイトル</div> */}
                {/* </a> */}
              {/* </Link> */}
            {/* </li> */}
            {/* <li className="border-b flex"> */}
              {/* <Link href="#"> */}
                {/* <a className="p-2"> */}
                  {/* <div>aaa</div> */}
                  {/* <div>記事タイトル</div> */}
                {/* </a> */}
              {/* </Link> */}
            {/* </li> */}
          {/* </ul> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Sidemenu;