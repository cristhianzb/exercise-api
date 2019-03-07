function renderUser(element){
  let elementHtml = `
  <div class="card">
    <img class="card-img-top" src="${element.avatar_url}"
        alt="avatar del usuario">
    <div class= "card-body">
      <h3 class="card-title" >${element.login}</h3>
      <a href="${element.html_url}" class="card-link" target="_blank">
        P&aacute;gina del usuario
      </a>
      <form action="repositorios.html" method="get">
        <input type="text" name="id" hidden="hidden" value="${element.id}">
        <input type="text" name="login" hidden="hidden" value="${element.login}">
        <button type="submit" class="btn btn-primary" >Repositorios</button>
      </form>
    </div>
  </div>
  `;
  let content = document.getElementById('content');
  content.insertAdjacentHTML('beforeEnd',elementHtml);
}
