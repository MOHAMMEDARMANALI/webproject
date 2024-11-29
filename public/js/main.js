const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");

const submitbtn = document.getElementById("submitbtn");
const getinfo = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;

  if (cityval == 0) {
    city_name.innerText = `Plz write something bfre you search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=666cbc009e73c08b0c0b8f0e08c23158`;

      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      // console.log(data);
      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
      temp.innerText = arrdata[0].main.temp;
      const tempmood = arrdata[0].weather[0].main;
      if (tempmood == "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color: #eccc68;"></i>';
      } else if (tempmood == "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color: #dfe4ea;"></i>';
      } else if (tempmood == "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color: #dfe4ea;"></i>';
      }
    } catch {
      city_name.innerText = `Plz write something before you search`;
    }
  }
};
submitbtn.addEventListener("click", getinfo);
