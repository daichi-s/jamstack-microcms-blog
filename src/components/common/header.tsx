import Link from 'next/link';

const Header = () => {
    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <a>
              <div className="text-3xl font-bold inline">{process.env.PROJECT_NAME}</div>
            </a>
          </Link>
        </div>
      </header>
    );
  };
  
  export default Header;