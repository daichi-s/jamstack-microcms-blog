import Layout from '../../layouts/layout';
import { fetchCategoryList } from '../../libs/microcms/category';
import { Category } from '../../types/category';

type Props = {
  categories: Category[];
};

const Policy = ({ categories }: Props) => {
  const title = process.env.PROJECT_NAME!;
  const description = process.env.PROJECT_DESCRIPTION!;

  // TODO: 共通化
  const linkClass = 'underline text-blue-600 hover:text-blue-800 visited:text-purple-600';

  return (
    <Layout title={title} description={description} categories={categories}>
      <div className="text-center">
        <h1>プライバシーポリシー</h1>
        <p>
          {process.env.PROJECT_NAME}（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。
        </p>
      </div>
      <div>
        <h2>個人情報の利用目的</h2>
        <p>
          当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br />
          取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
        </p>

        {/* <h2>広告について</h2> */}
        {/* <p> */}
        {/* 当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。 */}
        {/* クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。 */}

        {/* Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。 */}
        {/* </p> */}

        <h2>アクセス解析ツールについて</h2>
        <p>
          当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br />
          このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>

        {/* <h2>コメントについて</h2> */}
        {/* <p> */}
        {/* 当ブログへのコメントを残す際に、IP アドレスを収集しています。 */}
        {/* これはブログの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。 */}
        {/* なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。あらかじめご了承ください。 */}
        {/* </p> */}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const categories = await fetchCategoryList();

  return { props: { categories } };
};

export default Policy;