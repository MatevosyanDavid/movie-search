import services from 'services';

const getAllData = (data, dispatch, action) => {
  const requestFromId = data.map(({ id }) => services.getDataById(`${id}/videos`));
  Promise.all(requestFromId)
    .then((response) => {
      response.forEach(({ data: { results } }, i) => {
        data[i].videos = results
      });
      dispatch(action({ data }))
    })
  .catch(console.error);
}

export default getAllData;
