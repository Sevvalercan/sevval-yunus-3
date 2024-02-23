import Link from 'next/link';

const MyMenu = () => {
  return (
    <div className='h-100' >
      <Link href="/home">
        Home
      </Link>
      <br />
      <Link href="/contact">
        Contact
      </Link>
      
     
    </div>
  );
}

export default MyMenu;
