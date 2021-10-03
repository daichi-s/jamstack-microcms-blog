import Link from 'next/link';

const Footer = () => {
  // TODO: 共通化
  const textClass = 'text-gray-500 font-bold';

  return (
    <footer className="text-center">
      <div className="pb-5">
        <div className="mb-5">
          <Link href="/"><a className={textClass}>HOME</a></Link>
          <span className="mx-3">|</span>
          <Link href="/policy"><a className={textClass}>プライバシーポリシー</a></Link>
          <span className="mx-3">|</span>
          <Link href="/term"><a className={textClass}>免責事項</a></Link>
        </div>
        <div className={`mb-5 ${textClass}`} >
          © 2021 {process.env.BLOG_TITLE}
        </div>
      </div>
    </footer>
  );
};

export default Footer;