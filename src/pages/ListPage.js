import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);

  console.log('data', data);

  if (error) {
    return 'error';
  }

  return <MainLayout selectedKeys={['list']}>ListPage</MainLayout>;
}

export default ListPage;
