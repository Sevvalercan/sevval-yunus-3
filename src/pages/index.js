import Link from 'next/link';
import { Route } from 'react-router-dom';
import Posts from '../../component/posts';

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
      <Switch>
        <Route path='/:posts_id' Component={Posts}></Route>
      </Switch>
     
    </div>
  );
}

export default MyMenu;
