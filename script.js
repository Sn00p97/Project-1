async function getData() {
  const response = await fetch('https://api.kanye.rest/');
  const data = await response.json();
  console.log(data.quote);
  document.querySelector("h2").textContent = data.quote
}
const button = document.querySelector('button');


button.addEventListener('click', function() {
  getData()
  console.log('Button clicked!');
});