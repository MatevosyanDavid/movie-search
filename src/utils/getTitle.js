const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;

export default getTitle;
