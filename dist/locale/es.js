"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsEs = exports.monthsEs = exports.weeksEs = exports.daysEs = exports.hoursEs = exports.minutesEs = exports.secondsEs = void 0;
exports.secondsEs = (second) => {
    if (+second === 0) {
        return 'justo ahora';
    }
    else if (+second === 1) {
        return 'Hace 1 segundo';
    }
    else {
        return `Hace ${second} segundos`;
    }
};
exports.minutesEs = (minute) => {
    if (minute === 1) {
        return 'Hace 1 minuto';
    }
    else {
        return `Hace ${minute} minutos`;
    }
};
exports.hoursEs = (hour) => {
    if (hour === 1) {
        return 'Hace 1 hora';
    }
    else {
        return `Hace ${hour} horas`;
    }
};
exports.daysEs = (day) => {
    if (day === 1) {
        return 'Hace 1 dia';
    }
    else {
        return `Hace ${day} dias`;
    }
};
exports.weeksEs = (week) => {
    if (week === 1) {
        return 'Hace 1 semana';
    }
    else {
        return `Hace ${week} semanas`;
    }
};
exports.monthsEs = (month) => {
    if (month === 1) {
        return 'Hace 1 mes';
    }
    else {
        return `Hace ${month} meses`;
    }
};
exports.yearsEs = (year) => {
    if (year === 1) {
        return 'Hace 1 año';
    }
    else {
        return `Hace ${year} años`;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9jYWxlL2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsU0FBUyxHQUFHLENBQUUsTUFBYyxFQUFXLEVBQUU7SUFFbEQsSUFBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUc7UUFDakIsT0FBTyxhQUFhLENBQUM7S0FFeEI7U0FDSSxJQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRztRQUN0QixPQUFPLGdCQUFnQixDQUFDO0tBRTNCO1NBQU07UUFDSCxPQUFPLFFBQVMsTUFBTyxXQUFXLENBQUM7S0FFdEM7QUFFTCxDQUFDLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxDQUFFLE1BQWMsRUFBVyxFQUFFO0lBRWxELElBQUssTUFBTSxLQUFLLENBQUMsRUFBRztRQUNoQixPQUFPLGVBQWUsQ0FBQztLQUUxQjtTQUFNO1FBQ0gsT0FBTyxRQUFTLE1BQU8sVUFBVSxDQUFDO0tBRXJDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLGFBQWEsQ0FBQztLQUV4QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssUUFBUSxDQUFDO0tBRWpDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsQ0FBRSxHQUFXLEVBQVcsRUFBRTtJQUU1QyxJQUFLLEdBQUcsS0FBSyxDQUFDLEVBQUc7UUFDYixPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLEdBQUksT0FBTyxDQUFDO0tBRS9CO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLGVBQWUsQ0FBQztLQUUxQjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssVUFBVSxDQUFDO0tBQ25DO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsQ0FBRSxLQUFhLEVBQVcsRUFBRTtJQUVoRCxJQUFLLEtBQUssS0FBSyxDQUFDLEVBQUc7UUFDZixPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLEtBQU0sUUFBUSxDQUFDO0tBQ2xDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssT0FBTyxDQUFDO0tBQ2hDO0FBRUwsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY29uc3Qgc2Vjb25kc0VzID0gKCBzZWNvbmQ6IG51bWJlciApOiBzdHJpbmcgPT4ge1xyXG4gICAgXHJcbiAgICBpZiAoICtzZWNvbmQgPT09IDAgKSB7XHJcbiAgICAgICAgcmV0dXJuICdqdXN0byBhaG9yYSc7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoICtzZWNvbmQgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuICdIYWNlIDEgc2VndW5kbyc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgc2Vjb25kIH0gc2VndW5kb3NgO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWludXRlc0VzID0gKCBtaW51dGU6IG51bWJlciApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggbWludXRlID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIG1pbnV0byc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgbWludXRlIH0gbWludXRvc2A7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG91cnNFcyA9ICggaG91cjogbnVtYmVyICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCBob3VyID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIGhvcmEnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IGhvdXIgfSBob3Jhc2A7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF5c0VzID0gKCBkYXk6IG51bWJlciApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggZGF5ID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIGRpYSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgZGF5IH0gZGlhc2A7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vla3NFcyA9ICggd2VlazogbnVtYmVyICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCB3ZWVrID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIHNlbWFuYSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgd2VlayB9IHNlbWFuYXNgO1xyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW9udGhzRXMgPSAoIG1vbnRoOiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIG1vbnRoID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIG1lcyc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgbW9udGggfSBtZXNlc2A7XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB5ZWFyc0VzID0gKCB5ZWFyOiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIHllYXIgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuICdIYWNlIDEgYcOxbyc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYEhhY2UgJHsgeWVhciB9IGHDsW9zYDtcclxuICAgIH1cclxuICAgIFxyXG59O1xyXG4iXX0=