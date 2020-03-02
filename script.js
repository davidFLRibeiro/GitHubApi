//get api info
function getUserHandle(user) {
  fetch(`https://api.github.com/users/${user}/orgs`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => alert('something whent wrong'));
}

//display results
function displayResults(responseJson) {
  console.log(responseJson);
  $('.user-list').html(generateHTMLItem(responseJson.repos_url));
}

//generatehtml
function generateHTMLItem(userInfo) {
  return `<li>${userInfo}</li>`;
  console.log(responseJson.login);
}

function watchForm() {
  $('#randomUser').on('submit', function(event) {
    event.preventDefault();
    const user = $(this)
      .find('#text')
      .val();
    getUserHandle(user);
  });
}

$(watchForm());
