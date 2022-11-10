const button = document.getElementById('button');
const request = document.getElementById('status');

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .then((data) => display(data)).catch(error => request.innerText = error);
});

function display(data) {
    information = data['results'][0];

    profile = document.createElement('div');
    profile.setAttribute('id', 'profile');

    let image = document.createElement('img');
    image.src= information['picture']['large'];
    profile.appendChild(image);

    let city = document.createElement('p')
    city.innerText = `City: ${information['location']['city']}`;
    profile.appendChild(city);

    let cell = document.createElement('p')
    cell.innerText = `Cell: ${information.cell}`;
    profile.appendChild(cell);

    let country = document.createElement('p')
    country.innerText = `Country: ${information['location']['country']}`;
    profile.appendChild(country);

    let email = document.createElement('p');
    email.innerText = `Email: ${information['email']}`;
    profile.appendChild(email);

    

    document.getElementById('user').appendChild(profile);
    request.innerText = 'Success!'
};