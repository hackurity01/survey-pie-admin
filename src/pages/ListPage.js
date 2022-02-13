import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

const PAGE_SIZE = 20;

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => {
      const time = new Date(createdAt);

      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      return (
        <button
          onClick={() => {
            console.log(id, '삭제');
          }}
        >
          삭제
        </button>
      );
    },
  },
];

function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  if (error) {
    return 'error';
  }

  if (!data) {
    return 'loading...';
  }

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log('onClick', record.id);
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </MainLayout>
  );
}

export default ListPage;
