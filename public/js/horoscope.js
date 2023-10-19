document.getElementById('horoscopeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('/save?zodiac=' + formData.get('zodiac'))
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed.');
        })
        .then(function(data) {
            if (data.success) {
                fetch('/api/horoscope/' + formData.get('zodiac'))
                    .then(function(response) {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error('Request failed.');
                    })
                    .then(function(data) {
                        if (data.horoscope) {
                            document.getElementById('horoscopeContainer').innerHTML = `
                                <div class="row row-cols 1 row-cols-md-1 row-cols-lg-2 g-5">
                                    <div class="col">
                                     <div class="card">
                                      <div class="card-header">
                                        Гороскоп вчера
                                      </div>
                                      <div class="card-body">
                                        <p class="card-text">${data.horoscope.yesterday}</p>
                                      </div>
                                    </div>
                                    </div>
                                    <div id ="secondCol" class="col">
                                    <div class="col">
                                     <div class="card">
                                      <div class="card-header">
                                        Гороскоп сегодня
                                      </div>
                                      <div class="card-body">
                                        <p class="card-text">${data.horoscope.today}</p>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div id ="thirdCol" class="col">
                                    <div class="col">
                                     <div class="card">
                                      <div class="card-header">
                                        Гороскоп завтра
                                      </div>
                                      <div class="card-body">
                                        <p class="card-text">${data.horoscope.tomorrow}</p>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col">
                                    <div class="col">
                                     <div class="card">
                                      <div class="card-header">
                                        Гороскоп послезавтра
                                      </div>
                                      <div class="card-body">
                                        <p class="card-text">${data.horoscope.tomorrow02}</p>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>

                                `;
                        } else {
                            document.getElementById('horoscopeContainer').innerHTML = '<h2>No horoscope available.</h2>';
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                alert('Failed to save horoscope.');
            }
        })
        .catch(function(error) {
            console.log(error);
        });
});