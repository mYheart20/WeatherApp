import conditions from "./conditions.js";

const apiKey = '6939bd5172fc469face144929230206';



const firstCol = document.querySelector('#firstCol')
const secondCol = document.querySelector('#secondCol')
const thirdCol = document.querySelector('#thirdCol')
const fourthCol = document.querySelector('#fourthCol')
const form = document.querySelector('#formCity')
const input = document.querySelector('#inputCity')



function removeCard(){
    let prevCard = document.querySelector('#firstCard');
    if (prevCard) prevCard.remove();
    let prevCard2 = document.querySelector('#thirdCard')
    if (prevCard2) prevCard2.remove();
    let prevCard3 = document.querySelector('#fourthCard')
    if (prevCard3) prevCard3.remove();

}

function showError(){
    const html = `            <div id="firstCard" class="card">
                <div class="card-header">
                    Погода в городе сегодня
                </div>
                <div class="card-body">
                    <p class="card-text">Вы ввели неккоректные данные.</p>
                </div>
            </div>`
    firstCol.insertAdjacentHTML("afterbegin", html)
}
// Первая карточка
function showCard(data, info){
    const html = `            <div id="firstCard" class="card bg-light">
                <div class="card-header">
                    Погода в городе ${data.location.name} сейчас
                </div>
                <div class="card-body">
                    <p class="card-text"> <h5> ${data.current.temp_c}° <img src="../images/Градусник.png"  alt="ЗА ЧТО??"> ${info.languages[23]['day_text']} <img src="${data.current.condition.icon}"  alt="ЗА ЧТО??"></h5></p> 
                    <p class="card-text"> <h5>${data.current.humidity}% <img src="../images/Влажность.png"  alt="ЗА ЧТО??">
                    ${data.current.wind_kph} КМ/Ч <img src="../images/Ветер.png"  alt="ЗА ЧТО??"></h5></p> 
                    <hr style="border-width: 3px;">
                        <div class="container">
                              <div class="row">
                                <div class="col-sm-4">
                                  <p>Сегодня</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Завтра</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Послезавтра</p>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <p>Cредняя температура ${data.forecast.forecastday[0].day.avgtemp_c}°</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Cредняя температура ${data.forecast.forecastday[1].day.avgtemp_c}°</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Cредняя температура ${data.forecast.forecastday[2].day.avgtemp_c}°</p>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <p>Вероятность осадков ${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Вероятность осадков ${data.forecast.forecastday[1].day.daily_chance_of_rain}%</p>
                                </div>
                                <div class="col-sm-4">
                                  <p>Вероятность осадков ${data.forecast.forecastday[2].day.daily_chance_of_rain}%</p>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>`
    firstCol.insertAdjacentHTML("afterbegin", html)
}
// Вторая карточка
function showAnotherWeather(dataMSC, infoMSC,dataSPB,infoSPB, dataVRN, infoVRN, dataKAZ, infoKAZ) {
    const html = `
                                        <div class="card bg-light">
                                        <div class="card-header">
                                            Погода в городах
                                        </div>
                                        <div class="card-body">
                                            <div class="container">
                          <div class="row">
                            <div class="col-sm-4">
                              <p>${dataMSC.location.name}</p>
                            </div>
                            <div class="col-sm-4">
                              <p>${dataMSC.current.temp_c}° <img src="../images/Градусник.png"  alt="ЗА ЧТО??"></p>
                            </div>
                            <div class="col-sm-4">
                              <p>${infoMSC.languages[23]['day_text']} <img src="${dataMSC.current.condition.icon}"  alt="ЗА ЧТО??"></p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-4">
                              <p>${dataSPB.location.name}</p>
                            </div>
                            <div class="col-sm-4">
                              <p>${dataSPB.current.temp_c}° <img src="../images/Градусник.png"  alt="ЗА ЧТО??"></p>
                            </div>
                            <div class="col-sm-4">
                              <p>${infoSPB.languages[23]['day_text']} <img src="${dataSPB.current.condition.icon}"  alt="ЗА ЧТО??"></p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-4">
                              <p>${dataVRN.location.name}</p>
                            </div>
                            <div class="col-sm-4">
                              <p>${dataVRN.current.temp_c}° <img src="../images/Градусник.png"  alt="ЗА ЧТО??"></p>
                            </div>
                            <div class="col-sm-4">
                              <p>${infoVRN.languages[23]['day_text']} <img src="${dataVRN.current.condition.icon}"  alt="ЗА ЧТО??"></p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-4">
                              <p>${dataKAZ.location.name}</p>
                            </div>
                            <div class="col-sm-4">
                              <p>${dataKAZ.current.temp_c}° <img src="../images/Градусник.png"  alt="ЗА ЧТО??"></p>
                            </div>
                            <div class="col-sm-4">
                              <p>${infoKAZ.languages[23]['day_text']} <img src="${dataKAZ.current.condition.icon}"  alt="ЗА ЧТО??"></p>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
    `
    fourthCol.insertAdjacentHTML("afterbegin", html)
}
//Третья карточка
function showThirdCard(data){
    const html = `
                                                <div id="thirdCard" class="card bg-light">
                                        <div class="card-header">
                                            Почасовая погода в городе ${data.location.name}
                                        </div>
                                        <div class="card-body">
    <div class="container">
  <div class="row">
    <div class="col-sm-2">
       <p>00:00</p>
      <p>${data.forecast.forecastday[0].hour[0].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[0].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
      <p>01:00</p>
      <p>${data.forecast.forecastday[0].hour[1].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[1].hour[0].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
      <p>02:00</p>
      <p>${data.forecast.forecastday[0].hour[2].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[2].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>03:00</p>
      <p>${data.forecast.forecastday[0].hour[3].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[3].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>04:00</p>
      <p>${data.forecast.forecastday[0].hour[4].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[4].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>05:00</p>
      <p>${data.forecast.forecastday[0].hour[5].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[5].condition.icon}"></p>
    </div>
                        <hr style="border-width: 3px;">
  </div>
  <div class="row">
    <div class="col-sm-2">
            <p>06:00</p>
      <p>${data.forecast.forecastday[0].hour[6].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[6].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>07:00</p>
      <p>${data.forecast.forecastday[0].hour[7].temp_c}° </p></p>
      <p><img src="${data.forecast.forecastday[0].hour[7].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>08:00</p>
      <p>${data.forecast.forecastday[0].hour[8].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[8].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>09:00</p>
      <p>${data.forecast.forecastday[0].hour[9].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[9].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>10:00</p>
      <p>${data.forecast.forecastday[0].hour[10].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[10].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
            <p>11:00</p>
      <p>${data.forecast.forecastday[0].hour[11].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[11].condition.icon}"></p>
    </div>
                        <hr style="border-width: 3px;">
  </div>
  <div class="row">
    <div class="col-sm-2">
            <p>12:00</p>
      <p>${data.forecast.forecastday[0].hour[12].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[12].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>13:00</p>
      <p>${data.forecast.forecastday[0].hour[13].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[13].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>14:00</p>
      <p>${data.forecast.forecastday[0].hour[14].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[14].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>15:00</p>
      <p>${data.forecast.forecastday[0].hour[15].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[15].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>16:00</p>
      <p>${data.forecast.forecastday[0].hour[16].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[16].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>17:00</p>
      <p>${data.forecast.forecastday[0].hour[17].temp_c}°</p></p>
      <p><img src="${data.forecast.forecastday[0].hour[17].condition.icon}"></p>
    </div>
                        <hr style="border-width: 3px;">
  </div>
    <div class="row">
    <div class="col-sm-2">
                 <p>18:00</p>
      <p>${data.forecast.forecastday[0].hour[18].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[18].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>19:00</p>
      <p>${data.forecast.forecastday[0].hour[19].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[19].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>20:00</p>
      <p>${data.forecast.forecastday[0].hour[20].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[20].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>21:00</p>
                  <p>${data.forecast.forecastday[0].hour[21].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[21].condition.icon}"></p>
    </div>
    <div class="col-sm-2">
                  <p>22:00</p>
      <p>${data.forecast.forecastday[0].hour[22].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[22].condition.icon}"></p>
    </div>
        <div class="col-sm-2">
                  <p>23:00</p>
      <p>${data.forecast.forecastday[1].hour[23].temp_c}°</p>
      <p><img src="${data.forecast.forecastday[0].hour[23].condition.icon}"></p>
  </div>
</div>
</div>
</div>
    `
    thirdCol.insertAdjacentHTML("afterbegin", html)
}

function showFourthCard(data){
    const html = `
    <div class="card bg-light">
  <div class="card-header">
    Гороскоп
  </div>
  <div class="card-body">
    <h5 class="card-title">Что таит в себе судьба?</h5>
    <p class="card-text">Узнайте. Ведь вы можете воспользоваться нашим гороскопом.</p>
    <a href="horoscope.html" class="btn btn-primary">К  гороскопу</a>
  </div>
</div>                              
  `;
    secondCol.insertAdjacentHTML("afterbegin",html)
}
async function getWeather(city){
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;
    const response = await fetch(url);
    return await response.json();
}
async function logicCard(city) {
    const data = await getWeather(city);

    if (data.error){
        removeCard();
        showError();
    }
    else {
        const info = conditions.find(
            (obj) => obj.code === data.current.condition.code
        );
        removeCard();
        showCard(data, info);
        showThirdCard(data);
        showFourthCard(data)
    }
}

async function logicSecondCard(){
    let city = 'Москва';
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`
    let response = await fetch(url);
    const dataMSC = await response.json();
    const infoMSC = conditions.find(
        (obj) => obj.code === dataMSC.current.condition.code
    );
    city = 'Санкт Петербург';
    url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`
    response = await fetch(url);
    const dataSPB = await response.json();
    const infoSPB = conditions.find(
        (obj) => obj.code === dataSPB.current.condition.code
    );
    city = 'Воронеж';
    url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`
    response = await fetch(url);
    const dataVRN = await response.json();
    const infoVRN = conditions.find(
        (obj) => obj.code === dataVRN.current.condition.code
    );
    city = 'Казань';
    url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`
    response = await fetch(url);
    const dataKAZ = await response.json();
    const infoKAZ = conditions.find(
        (obj) => obj.code === dataKAZ.current.condition.code
    );
    showAnotherWeather(dataMSC, infoMSC,dataSPB,infoSPB, dataVRN, infoVRN, dataKAZ,infoKAZ);
}



form.onsubmit = async function (e) {
    e.preventDefault();
    // Создание объекта с данными для отправки

    let city = input.value.trim();
    await logicCard(city);
    const formData = { inputText: city };

    // Отправка POST-запроса с использованием Fetch API
    const response = await fetch('/saveInput', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    // Обработка ответа сервера
    const data = await response.json();
    console.log(data);


}

window.onload = async function weatherNow(e) {
    e.preventDefault();
    let city = 'Воронеж';
    await logicCard(city);
    await logicSecondCard()
}
