// Timer
const currentTime = () => {
    const time = document.querySelector(".time");

    let date = new Date();
    let dayOfWeek = date.getDay();
    let dayVI;
    let dateOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    dateOfMonth = dateOfMonth < 10 ? `0${dateOfMonth}` : dateOfMonth;
    month = month < 10 ? `0${month}` : month;
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    switch (dayOfWeek) {
        case 0:
            dayVI = "Chủ Nhật";
            break;
        case 1:
            dayVI = "Thứ Hai";
            break;
        case 2:
            dayVI = "Thứ Ba";
            break;
        case 3:
            dayVI = "Thứ Tư";
            break;
        case 4:
            dayVI = "Thứ Năm";
            break;
        case 5:
            dayVI = "Thứ Sáu";
            break;
        case 6:
            dayVI = "Thứ Bảy";
            break;
    }

    time.innerText = `${dayVI}, ${dateOfMonth}/${month}/${year} ${hh}:${mm}:${ss}`;
};

currentTime();
setInterval(currentTime, 1000);
