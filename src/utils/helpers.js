const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;
const getItemByKey = (data, key, compare) => data.find(item => item[key] === compare);
const getIndexByKey = (data, key, compare) => data.findIndex(item => item[key] === compare);

export {
  getTitle,
  getItemByKey,
  getIndexByKey,
}
