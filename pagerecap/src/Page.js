const pagination = (person) => {
  const itemsCountPerPage = 9;
  const pageNumber = Math.ceil(person.length / itemsCountPerPage);
  const newPageArray = Array.from({length: pageNumber}, (nothing, index) => {
    const startPoint = index * itemsCountPerPage;
    return person.slice(startPoint, startPoint + itemsCountPerPage);
  });
  return newPageArray;
};

export default pagination;
