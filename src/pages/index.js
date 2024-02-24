import Link from 'next/link';

const MyMenu = () => {
  return (
    <div className='h-100 d-flex flex-column justify-content-between' style={{ minHeight: '80vh' }}>
      <div>
        <Link href="/home">
          Home
        </Link>
        <br />
        <Link href="/contact">
          Contact
        </Link>
      </div>
     
    </div>
  );
}

export default MyMenu;
