import React, { useState } from 'react';
import NoticeFirstForm from './NoticeFirstStep';
import NoticeSecondForm from './NoticeSecondStep';

const NoticeModal = props => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    dateOfBirth: '',
    breed: '',
    sex: '',
    petImage: '',
    location: '',
    price: '',
    comments: '',
  });

  let Child = undefined;
  if (page === 0) {
    Child = (
      <NoticeFirstForm
        setData={setData}
        closeModal={props.onCloseModal}
        setPage={setPage}
        data={data}
        title="First Page"
      />
    );
  } else {
    Child = (
      <NoticeSecondForm
        setData={setData}
        closeModal={props.onCloseModal}
        setPage={setPage}
        data={data}
        title="Second Page"
      />
    );
  }

  return <>{Child}</>;
};

export default NoticeModal;
