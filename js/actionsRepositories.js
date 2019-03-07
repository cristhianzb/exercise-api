getIdFromUrl();
getRepositories(getLoginFromUrl(),1).then(response =>{
  response.forEach(element =>{
    renderRepositories(element);
  })
});
