import Layout from '../../layouts/layout';
import { fetchCategoryList } from '../../libs/microcms/category';
import { Category } from '../../types/category';

type Props = {
  categories: Category[];
};

const Term = ({ categories }: Props) => {
  const title = process.env.PROJECT_NAME!;
  const description = process.env.PROJECT_DESCRIPTION!;

  // TODO: 共通化
  const linkClass = 'underline text-blue-600 hover:text-blue-800 visited:text-purple-600';

  return (
    <Layout title={title} description={description} categories={categories} >
      <div className="text-center">
        <h1>免責事項</h1>
        <p>{process.env.PROJECT_NAME}(<a href={process.env.PROJECT_URL} className={linkClass}>{process.env.PROJECT_URL}</a>)（以下、「当サイト」とします。）における利用規約は、下記の通りです。</p>
      </div>
      <div>
        <h2>当サイトの情報の正確性について</h2>
        <p>当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。必ずしも正確性を保証するものではありません。また合法性や安全性なども保証しません。</p>

        <h2>損害等の責任について</h2>
        <p>
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。<br />
          <br />
          また当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任も負いません。<br />
          <br />
          当サイトの保守、火災、停電、その他の自然災害、ウィルスや第三者の妨害等行為による不可抗力によって、当サイトによるサービスが停止したことに起因して利用者に生じた損害についても、何ら責任を負うものではありません。<br />
          <br />
          当サイトを利用する場合は、自己責任で行う必要があります。
        </p>

        <h2>当サイトで掲載している画像の著作権や肖像権等について</h2>
        <p>当サイトで掲載している画像の著作権や肖像権等は、各権利所有者に帰属します。万が一問題がある場合は、お問い合わせよりご連絡いただけますよう宜しくお願い致します。</p>

        <h2>無断転載の禁止について</h2>
        <p>当サイトに存在する、文章や画像、動画等の著作物の情報を無断転載することを禁止します。引用の範囲を超えるものについては、法的処置を行います。転載する際には、お問い合わせよりご連絡いただけますよう宜しくお願い致します。</p>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const categories = await fetchCategoryList();

  return { props: { categories } };
};

export default Term;