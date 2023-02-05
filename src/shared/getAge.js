export const getAge = utcDate => {
  const date = new Date(utcDate);
  const day = date.getDay().toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear();
  const convertedDate = [day, month, year].join('.');
  return convertedDate;
};
