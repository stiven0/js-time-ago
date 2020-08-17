"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centurysEs = exports.yearsEs = exports.monthsEs = exports.weeksEs = exports.daysEs = exports.hoursEs = exports.minutesEs = exports.secondsEs = void 0;
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
exports.centurysEs = (century) => {
    if (century === 1) {
        return 'Hace 1 siglo';
    }
    else {
        return `Hace ${century} siglos`;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9jYWxlL2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsU0FBUyxHQUFHLENBQUUsTUFBYyxFQUFXLEVBQUU7SUFFbEQsSUFBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUc7UUFDakIsT0FBTyxhQUFhLENBQUM7S0FFeEI7U0FDSSxJQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRztRQUN0QixPQUFPLGdCQUFnQixDQUFDO0tBRTNCO1NBQU07UUFDSCxPQUFPLFFBQVMsTUFBTyxXQUFXLENBQUM7S0FFdEM7QUFFTCxDQUFDLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxDQUFFLE1BQWMsRUFBVyxFQUFFO0lBRWxELElBQUssTUFBTSxLQUFLLENBQUMsRUFBRztRQUNoQixPQUFPLGVBQWUsQ0FBQztLQUUxQjtTQUFNO1FBQ0gsT0FBTyxRQUFTLE1BQU8sVUFBVSxDQUFDO0tBRXJDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLGFBQWEsQ0FBQztLQUV4QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssUUFBUSxDQUFDO0tBRWpDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsQ0FBRSxHQUFXLEVBQVcsRUFBRTtJQUU1QyxJQUFLLEdBQUcsS0FBSyxDQUFDLEVBQUc7UUFDYixPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLEdBQUksT0FBTyxDQUFDO0tBRS9CO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLGVBQWUsQ0FBQztLQUUxQjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssVUFBVSxDQUFDO0tBQ25DO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsQ0FBRSxLQUFhLEVBQVcsRUFBRTtJQUVoRCxJQUFLLEtBQUssS0FBSyxDQUFDLEVBQUc7UUFDZixPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLEtBQU0sUUFBUSxDQUFDO0tBQ2xDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBRSxJQUFZLEVBQVcsRUFBRTtJQUU5QyxJQUFLLElBQUksS0FBSyxDQUFDLEVBQUc7UUFDZCxPQUFPLFlBQVksQ0FBQztLQUV2QjtTQUFNO1FBQ0gsT0FBTyxRQUFTLElBQUssT0FBTyxDQUFDO0tBQ2hDO0FBRUwsQ0FBQyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsQ0FBRSxPQUFlLEVBQVcsRUFBRTtJQUVwRCxJQUFLLE9BQU8sS0FBSyxDQUFDLEVBQUc7UUFDakIsT0FBTyxjQUFjLENBQUM7S0FFekI7U0FBTTtRQUNILE9BQU8sUUFBUyxPQUFRLFNBQVMsQ0FBQztLQUNyQztBQUVMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY29uZHNFcyA9ICggc2Vjb25kOiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuICAgIFxyXG4gICAgaWYgKCArc2Vjb25kID09PSAwICkge1xyXG4gICAgICAgIHJldHVybiAnanVzdG8gYWhvcmEnO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCArc2Vjb25kID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIHNlZ3VuZG8nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IHNlY29uZCB9IHNlZ3VuZG9zYDtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pbnV0ZXNFcyA9ICggbWludXRlOiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIG1pbnV0ZSA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gJ0hhY2UgMSBtaW51dG8nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IG1pbnV0ZSB9IG1pbnV0b3NgO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvdXJzRXMgPSAoIGhvdXI6IG51bWJlciApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggaG91ciA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gJ0hhY2UgMSBob3JhJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgSGFjZSAkeyBob3VyIH0gaG9yYXNgO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRheXNFcyA9ICggZGF5OiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIGRheSA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gJ0hhY2UgMSBkaWEnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IGRheSB9IGRpYXNgO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlZWtzRXMgPSAoIHdlZWs6IG51bWJlciApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggd2VlayA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gJ0hhY2UgMSBzZW1hbmEnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IHdlZWsgfSBzZW1hbmFzYDtcclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vbnRoc0VzID0gKCBtb250aDogbnVtYmVyICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCBtb250aCA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gJ0hhY2UgMSBtZXMnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IG1vbnRoIH0gbWVzZXNgO1xyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgeWVhcnNFcyA9ICggeWVhcjogbnVtYmVyICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCB5ZWFyID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAnSGFjZSAxIGHDsW8nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IHllYXIgfSBhw7Fvc2A7XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjZW50dXJ5c0VzID0gKCBjZW50dXJ5OiBudW1iZXIgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIGNlbnR1cnkgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuICdIYWNlIDEgc2lnbG8nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGBIYWNlICR7IGNlbnR1cnkgfSBzaWdsb3NgO1xyXG4gICAgfVxyXG4gICAgXHJcbn07Il19