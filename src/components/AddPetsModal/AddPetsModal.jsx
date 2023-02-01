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

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev + 1);

    
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev - 1);
  };

  const steps = [
    <AddPetsFirstForm closeModal={props.onCloseModal} next={handleNextStep} data={data} title='First Page' />,
    <AddPetsSecondForm closeModal={props.onCloseModal} prev={handlePrevStep} next={handleNextStep} data={data} title='Second Page' />
  ];
  // console.log('data', data);
  return <>{steps[page]}</>;
};


 export default ModalAddsPet;