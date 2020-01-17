const date_picker_element_1 = document.getElementById('input-arrive-date');
const calendar_element_1 = document.getElementById('calendar-1');
const mth_element_1 = document.getElementById('calendar-heading-1');
const next_mth_element_1 = document.getElementById('next-arrow-1');
const prev_mth_element_1 = document.getElementById('prev-arrow-1');
const days_element_1 = document.getElementById('calendar-days-1');

const date_picker_element_2 = document.getElementById('input-departure-date');
const calendar_element_2 = document.getElementById('calendar-2');
const mth_element_2 = document.getElementById('calendar-heading-2');
const next_mth_element_2 = document.getElementById('next-arrow-2');
const prev_mth_element_2 = document.getElementById('prev-arrow-2');
const days_element_2 = document.getElementById('calendar-days-2');

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS_OF_MONTH = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
const CLASS_OF_THE_DAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

let date_1 = new Date();
let day_1 = date_1.getDate();
let month_1 = date_1.getMonth();
let year_1 = date_1.getFullYear();

let date_2 = new Date();
let day_2 = date_2.getDate();
let month_2 = date_2.getMonth();
let year_2 = date_2.getFullYear();

let selectedDate_1 = date_1;
let selectedDay_1 = day_1;
let selectedMonth_1 = month_1;
let selectedYear_1 = year_1;

let selectedDate_2 = date_2;
let selectedDay_2 = day_2;
let selectedMonth_2 = month_2;
let selectedYear_2 = year_2;

//display in html
mth_element_1.textContent = MONTHS[month_1] + ' ' + year_1;
populateDatesPicker1();

mth_element_2.textContent = MONTHS[month_2] + ' ' + year_2;
populateDatesPicker2();

//events listeners
date_picker_element_1.addEventListener('click', toggleDatePicker1);
next_mth_element_1.addEventListener('click', goToNextMonthPicker1);
prev_mth_element_1.addEventListener('click', goToPrevMonthPicker1);

date_picker_element_2.addEventListener('click', toggleDatePicker2);
next_mth_element_2.addEventListener('click', goToNextMonthPicker2);
prev_mth_element_2.addEventListener('click', goToPrevMonthPicker2);

//functions
function toggleDatePicker1() {
    calendar_element_1.classList.toggle('active');
}

function toggleDatePicker2() {
    calendar_element_2.classList.toggle('active');
}

function goToNextMonthPicker1() {
    month_1++;
    if (month_1 > 11) {
        month_1 = 0;
        year_1++;
    }
    mth_element_1.textContent = MONTHS[month_1] + ' ' + year_1;
    calendar_element_1.classList.toggle('active');
    populateDatesPicker1();
}

function goToNextMonthPicker2() {
    month_2++;
    if (month_2 > 11) {
        month_2 = 0;
        year_2++;
    }
    mth_element_2.textContent = MONTHS[month_2] + ' ' + year_2;
    calendar_element_2.classList.toggle('active');
    populateDatesPicker2();
}

function goToPrevMonthPicker1() {
    month_1--;
    if (month_1 < 0) {
        month_1 = 11;
        year_1--;
    }
    mth_element_1.textContent = MONTHS[month_1] + ' ' + year_1;
    calendar_element_1.classList.toggle('active');
    populateDatesPicker1();
}

function goToPrevMonthPicker2() {
    month_2--;
    if (month_2 < 0) {
        month_2 = 11;
        year_2--;
    }
    mth_element_2.textContent = MONTHS[month_2] + ' ' + year_2;
    calendar_element_2.classList.toggle('active');
    populateDatesPicker2();
}

function populateDatesPicker1() {
    days_element_1.innerHTML = '';
    let amount_days = DAYS_OF_MONTH[month_1];

    if (((year_1 % 4 === 0) || (year_1 % 100 === 0) && (year_1 % 400 === 0)) && month_1 == 1) {
        amount_days = 29;
    }

    for (let i=0; i<amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('calendar__days__day');
        day_element.textContent = i+1;

        if (selectedDay_1 == (i+1) && selectedYear_1 == year_1 && selectedMonth_1 == month_1) {
            day_element.classList.add('selected');
        }

        if (i==0) {
            let selectedDateToGetTheDay = new Date(year_1, (month_1), (i+1));
            day_element.classList.add(CLASS_OF_THE_DAY[selectedDateToGetTheDay.getDay()]);
        }

        day_element.addEventListener('click', function (){
            selectedDate_1 = new Date(year_1, (month_1), (i+1));
            selectedDay_1 = (i+1);
            selectedMonth_1 = month_1;
            selectedYear_1 = year_1;

            date_picker_element_1.value = formatDate(selectedDate_1);
            date_picker_element_1.dataset.value = selectedDate_1;

            populateDatesPicker1();
        });

        days_element_1.appendChild(day_element);
    }
}

function populateDatesPicker2() {
    days_element_2.innerHTML = '';
    let amount_days = DAYS_OF_MONTH[month_2];

    if (((year_2 % 4 === 0) || (year_2 % 100 === 0) && (year_2 % 400 === 0)) && month_2 == 1) {
        amount_days = 29;
    }

    for (let i=0; i<amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('calendar__days__day');
        day_element.textContent = i+1;

        if (selectedDay_2 == (i+1) && selectedYear_2 == year_2 && selectedMonth_2 == month_2) {
            day_element.classList.add('selected');
        }

        if (i==0) {
            let selectedDateToGetTheDay = new Date(year_2, (month_2), (i+1));
            day_element.classList.add(CLASS_OF_THE_DAY[selectedDateToGetTheDay.getDay()]);
        }

        day_element.addEventListener('click', function (){
            selectedDate_2 = new Date(year_2, (month_2), (i+1));
            selectedDay_2 = (i+1);
            selectedMonth_2 = month_2;
            selectedYear_2 = year_2;

            date_picker_element_2.value = formatDate(selectedDate_2);
            date_picker_element_2.dataset.value = selectedDate_2;

            populateDatesPicker2();
        });

        days_element_2.appendChild(day_element);
    }
}

//helper functions
function formatDate(dateToFormat) {
    let day = dateToFormat.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let month = dateToFormat.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }

    let year = dateToFormat.getFullYear();

    return day + ' / ' + month + ' / ' + year;
}