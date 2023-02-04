import  AddPetsFirstForm  from './AddPetsFirstForm';
import AddPetsSecondForm  from './AddPetsSecondForm';
import React, { useState } from 'react';



const ModalAddsPet = (props) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    petImage: "",
    comments: '',
  });

  let Child = undefined;
  if (page === 0) {
    Child = (
    <AddPetsFirstForm setData={setData} closeModal={props.onCloseModal} setPage={setPage} data={data} title='First Page' />
    );
  } else {
    Child = (
    <AddPetsSecondForm setData={setData} closeModal={props.onCloseModal} setPage={setPage} data={data} title='Second Page' />
    );
  }


  return <>
    {Child}
  </>;
};


 export default ModalAddsPet;