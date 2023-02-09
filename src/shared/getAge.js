export const getAge = utcDate => {
  const date = new Date(utcDate);
  const day = `0${date.getDate()}`.slice(-2); //("0"+date.getDate()).slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const convertedDate = [day, month, year].join('.');
  return convertedDate;
};

// export const getAge = utcDate => {
//   const date = new Date(utcDate);
//   const day = date.getDay().toString().padStart(2, '0');
//   const month = date.getMonth().toString().padStart(2, '0');
//   const year = date.getFullYear();
//   const convertedDate = [day, month, year].join('.');
//   return convertedDate;
// };
