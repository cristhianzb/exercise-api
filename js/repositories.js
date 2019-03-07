function renderRepositories(element){
  let elementHtml = `
  <div class="card">
    <div class="card-body">
      <a href="${element.html_url}" class="card-title" >Ir al repositorio</a>
      <h3 class="card-title">${element.name}</h3>
      <p class="card-text">${element.description}</p>
      <ul>
        <li>Issues: ${element.issues}</li>
        <li>Issues abiertos: ${element.open_issues_count}</li>
        <li>Forks: ${element.forks_count}</li>
      </ul>
    </div>
  </div>
  `;
  let content = document.getElementById('content');
  content.insertAdjacentHTML('beforeEnd',elementHtml);
}

function getIdFromUrl(){
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

function getLoginFromUrl(){
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('login');
}
