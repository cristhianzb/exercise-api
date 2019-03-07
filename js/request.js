let nextUsersUrl = `https://api.github.com/users`;

function getUsers(){
  return fetch(nextUsersUrl,{cache:"force-cache"}).then(response => {
    let linkHeader = response.headers.get("link");
    nextUsersUrl = parseData(linkHeader).next;
    return response.json();
  });
}

function getNextUsers(){
  getUsers().then(response =>{
    response.forEach(element =>{
      renderUser(element);
    })
  });
}

function getRepositories(user,page){
  var repositories = `https://api.github.com/users/${user}/repos?page=${page}`;
  return fetch(repositories).then(response => response.json());
}

function parseData(data) {
  let arrData = data.split("link:")
  data = arrData.length == 2? arrData[1]: data;
  let parsed_data = {}
  arrData = data.split(",")
  for (d of arrData){
      linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/ig.exec(d)
      parsed_data[linkInfo[2]]=linkInfo[1]
  }
  return parsed_data;
}
