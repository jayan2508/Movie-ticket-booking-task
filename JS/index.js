let url = window.location.href;
let url_segment = url.split('?');

let play_btn = document.getElementById('play');
let video = document.getElementById('video');

play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
});

video.addEventListener('ended', () => {
    video.play();
})

let date = new Date();
let main_date = date.getDate();

Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active');
    }
});

let pvr = [
    {
        pvr: 'PVR',
        movie: 'Jawan',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR',
        movie: 'Gadar2',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/Gadar2.jpg',
        video: 'video/Gadar2 Official Trailer - 11th August - Sunny Deol - Ameesha Patel - Anil Sharma - Zee Studios.mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/jailer.webp',
        video: 'video/Rajini_the_JAILER_-_Official_Showcase__Hindi___Superstar_Rajinikanth___Sun_Pictures__Anirudh__Nelson(1080p).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Antman',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/ant man.jpg',
        video: 'video/Marvel_s_Ant-Man_Trailer__Hindi____In_Cinemas_July_24(1080p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR',
        movie: 'Avengers',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/avengers.jpg',
        video: "video/Marvel's_The_Avengers_-_Official_Trailer_HD_1080_(Hindi_dubbed)_-_In_India_cinemas_April_2012(1080p).mp4",
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR',
        movie: '3Ekka',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/3_Ekka_Poster.jpg',
        video: "video/3 EKKA - TRAILER  18TH AUGUST, 2023  YASH  MALHAR  MITRA  ESHA  KINJAL 720 x 1280.mp4",
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR',
        movie: 'Tiger3',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/Tiger-3.jpg',
        video: 'video/Tiger 3 Trailer  Salman Khan, Katrina Kaif, Emraan Hashmi  Maneesh Sha 720 x 1280.mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Fukrey3',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/Fukrey-3.jpg',
        video: 'video/Fukrey 3 Official Trailer Pulkit Samrat Varun Sharma Manjot Singh Rich 676 x 1280.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/eternals-2.jpg',
        video: 'video/Marvel_Studios__Eternals___Official_Hindi_Trailer___In_Cinemas_November_5(1080p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR',
        movie: 'JohnWick',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/John Wick.jpg',
        video: 'video/John_Wick__Chapter_4_Official_Hindi_Trailer___Keanu_Reeves___Prime_Video_Channels___Lionsgate_Play(1080p).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR',
        movie: 'JurassicWorld',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/jurassic world.jpg',
        video: 'video/Jurassic_World_Dominion_(2022)_Theatrical_Trailer_2(1080p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Khichdi2',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/Khichdi-2.jpg',
        video: 'video/Khichdi 2 Official Trailer  Supriya, JD, Rajeev, Anang, Vandana, Kirti 720 x 1280.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'TotalDhamaal',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/total-dhamaal.jpg',
        video: 'video/Total Dhamaal  Official Trailer  Ajay  Anil  Madhuri  Indra Kumar  Feb 720 x 1280.mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR',
        movie: 'MoonKnight',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/moon knight.jpg',
        video: 'video/moon-knight.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR',
        movie: 'Spiderman',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/spiderman.jpg',
        video: 'video/SPIDER-MAN__NO_WAY_HOME_-_Official_Hindi_Teaser_Trailer__HD____In_Cinemas_December_17(1080p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'TheNun2',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/the-nun-2.jpg',
        video: 'video/THE NUN II  OFFICIAL TRAILER 1440 x 2560.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Leo',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/leo-2.jpg',
        video: 'video/LEO__Hindi__Official_Trailer___Thalapathy_Vijay___Sanjay_Dutt___Lokesh_Kanagaraj___Anirudh(720p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'ThorLoveOfThunder',
        loc: 'Vasu surat , Surat',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/thor love of thunder.jpg',
        video: 'video/Marvel_Studios__Thor__Love_and_Thunder___Official_Hindi_Trailer___In_Cinemas_8_July_2022(1080p).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Topgun',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/topgun.jpg',
        video: 'video/Top_Gun__Maverick___New_Official_Hindi_Trailer__2022_Movie__-_Tom_Cruise(1080p).mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'GulaamChor',
        loc: 'Vasu surat , Surat',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [],
        h: [],
        f: [],
        e: [],
        d: [],
        c: [],
        b: [],
        a: [],
        price: [150, 150, 250, 250, 300, 300, 400, 400],
        date: main_date,
        img: 'img/gulaam.jpg',
        video: 'video/Gulaam Chor - Official Trailer  JioCinema  Malhar Thakar  Gujarati Mov 720 x 1280.mp4',
        background: 'img/gadar_bg.jpg',
    },
]

const pvrDataString = localStorage.getItem('pvrData');
const pvrData = pvrDataString ? JSON.parse(pvrDataString) : [];

// const pvrDataString = JSON.stringify(pvr);

// // Store the JSON string in local storage
// localStorage.setItem('pvrData', pvrDataString);

document.getElementById('book_ticket').addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function () {
    // Additional event listeners for real-time validation on the payment form
    const cardholderInput = document.getElementById('cardholder');
    const cardnumberInput = document.getElementById('cardnumber');
    const expmonthInput = document.getElementById('expmonth');
    const expyearInput = document.getElementById('expyear');
    const cvvInput = document.getElementById('cvv');

    cardholderInput.addEventListener('input', () => {
        document.getElementById("cardholderError").innerHTML = "";
    });

    cardnumberInput.addEventListener('input', () => {
        document.getElementById("cardnumberError").innerHTML = "";
    });

    expmonthInput.addEventListener('input', () => {
        document.getElementById("expmonthError").innerHTML = "";
    });

    expyearInput.addEventListener('input', () => {
        document.getElementById("expyearError").innerHTML = "";
    });

    cvvInput.addEventListener('input', () => {
        document.getElementById("cvvError").innerHTML = "";
    });
});


document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var cardholder = document.getElementById('cardholder').value;
    var cardnumberInput = document.getElementById('cardnumber');
    var expmonth = document.getElementById('expmonth').value;
    var expyear = document.getElementById('expyear').value;
    var cvv = document.getElementById('cvv').value;

    // Reset all error messages
    document.getElementById('cardholderError').innerText = '';
    document.getElementById('cardnumberError').innerText = '';
    document.getElementById('expmonthError').innerText = '';
    document.getElementById('expyearError').innerText = '';
    document.getElementById('cvvError').innerText = '';

    // Validation logic
    var isValid = true;

    if (!cardholder.trim()) {
        document.getElementById('cardholderError').innerText = 'Cardholder\'s name is required';
        isValid = false;
    }

    var cardnumber = cardnumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    cardnumber = cardnumber.substring(0, 16); // Limit to a maximum of 16 digits

    if (!cardnumber.trim() || isNaN(cardnumber) || +cardnumber <= 0 || cardnumber.length !== 16) {
        document.getElementById('cardnumberError').innerText = 'Valid credit card number is required (16 digits)';
        isValid = false;
    }

    if (!expmonth.trim()) {
        document.getElementById('expmonthError').innerText = 'Exp month is required';
        isValid = false;
    }

    if (!expyear.trim() || isNaN(expyear) || +expyear <= 0) {
        document.getElementById('expyearError').innerText = 'Valid exp year is required';
        isValid = false;
    }

    if (!cvv.trim() || isNaN(cvv) || +cvv <= 0) {
        document.getElementById('cvvError').innerText = 'Valid CVV is required';
        isValid = false;
    }

    // If any field is not valid, stop further processing
    if (!isValid) {
        return;
    }

    // Close the modal after handling the form data
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Continue with booking the selected seats and showing the ticket
    bookSelectedSeats();
});

function formatCreditCardNumber(input) {
    // Remove non-numeric characters
    let cardnumber = input.value;

    // Limit to a maximum of 16 digits
    cardnumber = cardnumber.substring(0, 16);

    input.value = cardnumber;

}

document.getElementById('cancle').addEventListener('click', function () {
    // Reset all error messages when the modal is closed
    document.getElementById('cardholderError').innerText = '';
    document.getElementById('cardnumberError').innerText = '';
    document.getElementById('expmonthError').innerText = '';
    document.getElementById('expyearError').innerText = '';
    document.getElementById('cvvError').innerText = '';
});



document.getElementById('close-modal').addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Reset all error messages when the modal is closed
    document.getElementById('cardholderError').innerText = '';
    document.getElementById('cardnumberError').innerText = '';
    document.getElementById('expmonthError').innerText = '';
    document.getElementById('expyearError').innerText = '';
    document.getElementById('cvvError').innerText = '';
});

let addSeats = (arr) => {
    arr.forEach((el) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;
        // create row

        for (let index = 0; index < series.length; index++) {
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            let pvrData = JSON.parse(localStorage.getItem('pvrData'));

            if (pvrData) {
                // Retrieve the booked seats for the current series
                booked_seats = pvrData.find((data) => data.date === main_date && data.movie === url_segment[1])[series[index].toLowerCase()] || [];
            }

            for (let seats = 1; seats <= seat; seats++) {
                if (seats === 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.includes(seats);

                if (filter) {
                    li.className = 'seat booked';
                } else {
                    li.className = 'seat';
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];

                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    document.getElementById('book_ticket').style.display = len > 0 ? 'unset' : 'none'
                    // if (len > 0) {
                    //     document.getElementById('book_ticket').style.display = 'unset';
                    // } else {
                    //     document.getElementById('book_ticket').style.display = 'none';
                    // }
                }

                row.appendChild(li);

                if (seats === seat) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }
            document.getElementById('chair').appendChild(row);
        }
    });
}

let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);

document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;

addSeats(data);


let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    });
}


Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate() - 1) {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            addSeats(data);
        }
    });
});


// Function to update the local storage data


function updateLocalStorage(movie, date, seatSr, seatNo) {
    let storedData = JSON.parse(localStorage.getItem('pvrData')) || [];

    let movieData = storedData.find(obj => obj.movie === movie && obj.date === date);

    if (!movieData) {
        movieData = {
            movie: movie,
            date: date,
        };
        storedData.push(movieData);
    }

    if (!movieData[seatSr.toLowerCase()]) {
        movieData[seatSr.toLowerCase()] = [];
    }

    movieData[seatSr.toLowerCase()].push(+seatNo);

    localStorage.setItem('pvrData', JSON.stringify(storedData));
}


function bookSelectedSeats() {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr');
        let seat_price = el.innerText;

        let obj = {
            movie: url_segment[1],
            date: main_date,
        };

        // Update local storage data
        updateLocalStorage(url_segment[1], main_date, seat_sr, seat_no);

        document.getElementById('chair').innerHTML = '';
        let data = JSON.parse(localStorage.getItem('pvrData')).filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
        addSeats(data);

        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('ticket').style.display = 'block';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';

        let tic = document.createElement('div');
        tic.className = 'tic';
        tic.innerHTML = `
      <div class="barcode">
                      <div class="card">
                          <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                          <h6>${main_date} November 2023</h6>
                      </div>
                      <div class="card">
                          <h6>Seat ${seat_no}</h6>
                          <h6>23:00</h6>
                      </div>

                      <svg id="${seat_sr}${seat_no}barcode"></svg>
                      <h5>INOX DR World</h5>

                  </div>
                  <div class="tic_details">
                      <div class="type">4DX</div>
                      <h5 class="pvr"><span>INOX DR</span> World</h5>
                      <h1>${url_segment[1]}</h1>
                      <div class="seat_det">
                          <div class="seat_cr">
                              <h6>ROW</h6>
                              <h6>${seat_sr.toLocaleUpperCase()}</h6>
                          </div>
                          <div class="seat_cr">
                              <h6>SEAT</h6>
                              <h6>${seat_no}</h6>
                          </div>
                          <div class="seat_cr">
                              <h6>DATE</h6>
                              <h6>${main_date} <sup>nov</sup></h6>
                          </div>
                          <div class="seat_cr">
                              <h6>TIME</h6>
                              <h6>10:00 <sup>pm</sup></h6>
                          </div>
                      </div>
                  </div>`

        document.getElementById('ticket').appendChild(tic);

        JsBarcode(`#${seat_sr}${seat_no}barcode`, `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}`);
    });
}

document.getElementById('back_ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'block';
    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
    document.getElementById('ticket').style.display = 'none';
    document.getElementById('book_ticket').style.display = 'block';
    document.getElementById('back_ticket').style.display = 'none';
});
document.getElementById('back_ticket').addEventListener('click',() => {
    document.getElementById('screen').style.display = 'block';
    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
});


// ------------poster details


function setMovieDetails(movie, director, starring, editedBy, imagePath) {
    // Create an object to hold movie details
    var movieDetails = {
        'movie': movie,
        'director': director,
        'starring': starring,
        'editedBy': editedBy,
        'imagePath': imagePath  // Add imagePath to the movie details
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('movieDetails', JSON.stringify(movieDetails));
}

// Function to retrieve movie details from local storage
function getMovieDetails() {
    // Retrieve the JSON string from local storage
    var movieDetailsString = localStorage.getItem('movieDetails');

    // Parse the JSON string to get the movie details object
    var movieDetails = JSON.parse(movieDetailsString);

    return movieDetails;

}

// Function to display movie details

function displayMovieDetails() {
    // Get the movie details from local storage
    var movieDetails = getMovieDetails();

    // Check if movie details exist
    if (movieDetails) {
        // Access elements in the HTML and set their content
        document.getElementById('poster').src = movieDetails.imagePath;

        var contElement = document.getElementById('movieDetails');
        contElement.innerHTML = `
            <h6>Directed by</h6>
            <p>${movieDetails.director}</p>
            <h6>Starring</h6>
            <p>${movieDetails.starring}</p>
            <h6>Edited by</h6>
            <p>${movieDetails.editedBy}</p>
        `;
    }
}

// Call the function to display movie details when the page loads

displayMovieDetails();

// --------- back to home page 

function homePage() {
    window.location.href = 'home.html';
}