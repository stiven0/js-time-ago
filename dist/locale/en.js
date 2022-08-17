"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsEn = exports.monthsEn = exports.weeksEn = exports.daysEn = exports.hoursEn = exports.minutesEn = exports.secondsEn = void 0;
const secondsEn = (second, isPastOrFuture, style) => {
    if (+second === 0) {
        return style === 'mini' ? '0s' : 'right now';
    }
    else if (+second === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1s' : '1 second ago'
            : style === 'mini' ? '1s' : 'in 1 second';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${second}s` : `${second} seconds ago`
            : style === 'mini' ? `${second}s` : `in ${second} seconds`;
    }
};
exports.secondsEn = secondsEn;
const minutesEn = (minute, isPastOrFuture, style) => {
    if (minute === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1m' : '1 minute ago'
            : style === 'mini' ? '1m' : 'in 1 minute';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${minute}m` : `${minute} minutes ago`
            : style === 'mini' ? `${minute}m` : `in ${minute} minutes`;
    }
};
exports.minutesEn = minutesEn;
const hoursEn = (hour, isPastOrFuture, style) => {
    if (hour === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1h' : '1 hour ago'
            : style === 'mini' ? '1h' : 'in 1 hour';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${hour}h` : `${hour} hours ago`
            : style === 'mini' ? `${hour}h` : `in ${hour} hours`;
    }
};
exports.hoursEn = hoursEn;
const daysEn = (day, isPastOrFuture, style) => {
    if (day === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1d' : '1 day ago'
            : style === 'mini' ? '1d' : 'in 1 day';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${day}d` : `${day} days ago`
            : style === 'mini' ? `${day}d` : `in ${day} days`;
    }
};
exports.daysEn = daysEn;
const weeksEn = (week, isPastOrFuture, style) => {
    if (week === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1week' : '1 week ago'
            : style === 'mini' ? '1week' : 'in 1 week';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${week}weeks` : `${week} weeks ago`
            : style === 'mini' ? `${week}weeks` : `in ${week} weeks`;
    }
};
exports.weeksEn = weeksEn;
const monthsEn = (month, isPastOrFuture, style) => {
    if (month === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1month' : '1 month ago'
            : style === 'mini' ? '1month' : 'in 1 month';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${month}months` : `${month} months ago`
            : style === 'mini' ? `${month}months` : `in ${month} months`;
    }
};
exports.monthsEn = monthsEn;
const yearsEn = (year, isPastOrFuture, style) => {
    if (year === 1) {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? '1year' : '1 year ago'
            : style === 'mini' ? '1year' : 'in 1 year';
    }
    else {
        return isPastOrFuture === 'past'
            ? style === 'mini' ? `${year}years` : `${year} years ago`
            : style === 'mini' ? `${year}years` : `in ${year} years`;
    }
};
exports.yearsEn = yearsEn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9jYWxlL2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdPLE1BQU0sU0FBUyxHQUFHLENBQUUsTUFBYyxFQUFFLGNBQThCLEVBQUUsS0FBWSxFQUFXLEVBQUU7SUFFaEcsSUFBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUc7UUFDakIsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztLQUVoRDtTQUNJLElBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFHO1FBQ3RCLE9BQU8sY0FBYyxLQUFLLE1BQU07WUFDaEMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYztZQUMxQyxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7S0FFNUM7U0FBTTtRQUNILE9BQU8sY0FBYyxLQUFLLE1BQU07WUFDaEMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUksTUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUksTUFBTyxjQUFjO1lBQy9ELENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFJLE1BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFPLE1BQU8sVUFBVSxDQUFBO0tBRWpFO0FBRUwsQ0FBQyxDQUFDO0FBbEJXLFFBQUEsU0FBUyxhQWtCcEI7QUFFSyxNQUFNLFNBQVMsR0FBRyxDQUFFLE1BQWMsRUFBRSxjQUE4QixFQUFFLEtBQVksRUFBVyxFQUFFO0lBRWhHLElBQUssTUFBTSxLQUFLLENBQUMsRUFBRztRQUNoQixPQUFPLGNBQWMsS0FBSyxNQUFNO1lBQ2hDLENBQUMsQ0FBQyxLQUFLLEtBQUss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LENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FFOUM7U0FBTTtRQUNILE9BQU8sY0FBYyxLQUFLLE1BQU07WUFDaEMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFBSyxZQUFZO1lBQzdELENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFJLElBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFPLElBQUssUUFBUSxDQUFDO0tBQ2hFO0FBRUwsQ0FBQyxDQUFDO0FBYlcsUUFBQSxPQUFPLFdBYWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQYXN0T3JGdXR1cmUgfSBmcm9tIFwiLi4vdHlwZXMvaXMtcGFzdC1vci1mdXR1cmVcIjtcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiLi4vdHlwZXMvc3R5bGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRzRW4gPSAoIHNlY29uZDogbnVtYmVyLCBpc1Bhc3RPckZ1dHVyZTogaXNQYXN0T3JGdXR1cmUsIHN0eWxlOiBzdHlsZSApOiBzdHJpbmcgPT4ge1xyXG4gICAgXHJcbiAgICBpZiAoICtzZWNvbmQgPT09IDAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlID09PSAnbWluaScgPyAnMHMnIDogJ3JpZ2h0IG5vdyc7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoICtzZWNvbmQgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzdE9yRnV0dXJlID09PSAncGFzdCcgXHJcbiAgICAgICAgPyBzdHlsZSA9PT0gJ21pbmknID8gJzFzJyA6ICcxIHNlY29uZCBhZ28nIFxyXG4gICAgICAgIDogc3R5bGUgPT09ICdtaW5pJyA/ICcxcycgOiAnaW4gMSBzZWNvbmQnXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyBgJHsgc2Vjb25kIH1zYCA6IGAkeyBzZWNvbmQgfSBzZWNvbmRzIGFnb2AgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gYCR7IHNlY29uZCB9c2AgOiBgaW4gJHsgc2Vjb25kIH0gc2Vjb25kc2BcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pbnV0ZXNFbiA9ICggbWludXRlOiBudW1iZXIsIGlzUGFzdE9yRnV0dXJlOiBpc1Bhc3RPckZ1dHVyZSwgc3R5bGU6IHN0eWxlICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCBtaW51dGUgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzdE9yRnV0dXJlID09PSAncGFzdCcgXHJcbiAgICAgICAgPyBzdHlsZSA9PT0gJ21pbmknID8gJzFtJyA6ICcxIG1pbnV0ZSBhZ28nIFxyXG4gICAgICAgIDogc3R5bGUgPT09ICdtaW5pJyA/ICcxbScgOiAnaW4gMSBtaW51dGUnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzdE9yRnV0dXJlID09PSAncGFzdCcgXHJcbiAgICAgICAgPyBzdHlsZSA9PT0gJ21pbmknID8gYCR7IG1pbnV0ZSB9bWAgOiBgJHsgbWludXRlIH0gbWludXRlcyBhZ29gIFxyXG4gICAgICAgIDogc3R5bGUgPT09ICdtaW5pJyA/IGAkeyBtaW51dGUgfW1gIDogYGluICR7IG1pbnV0ZSB9IG1pbnV0ZXNgO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvdXJzRW4gPSAoIGhvdXI6IG51bWJlciwgaXNQYXN0T3JGdXR1cmU6IGlzUGFzdE9yRnV0dXJlLCBzdHlsZTogc3R5bGUgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIGhvdXIgPT09IDEgKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzdE9yRnV0dXJlID09PSAncGFzdCcgXHJcbiAgICAgICAgPyBzdHlsZSA9PT0gJ21pbmknID8gJzFoJyA6ICcxIGhvdXIgYWdvJyBcclxuICAgICAgICA6IHN0eWxlID09PSAnbWluaScgPyAnMWgnIDogJ2luIDEgaG91cic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyBgJHsgaG91ciB9aGAgOiBgJHsgaG91ciB9IGhvdXJzIGFnb2AgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gYCR7IGhvdXIgfWhgIDogYGluICR7IGhvdXIgfSBob3Vyc2A7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF5c0VuID0gKCBkYXk6IG51bWJlciwgaXNQYXN0T3JGdXR1cmU6IGlzUGFzdE9yRnV0dXJlLCBzdHlsZTogc3R5bGUgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBpZiAoIGRheSA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyAnMWQnIDogJzEgZGF5IGFnbycgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gJzFkJyA6ICdpbiAxIGRheSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyBgJHsgZGF5IH1kYCA6IGAkeyBkYXkgfSBkYXlzIGFnb2AgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gYCR7IGRheSB9ZGAgOiBgaW4gJHsgZGF5IH0gZGF5c2A7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vla3NFbiA9ICggd2VlazogbnVtYmVyLCBpc1Bhc3RPckZ1dHVyZTogaXNQYXN0T3JGdXR1cmUsIHN0eWxlOiBzdHlsZSApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggd2VlayA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyAnMXdlZWsnIDogJzEgd2VlayBhZ28nIFxyXG4gICAgICAgIDogc3R5bGUgPT09ICdtaW5pJyA/ICcxd2VlaycgOiAnaW4gMSB3ZWVrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3RPckZ1dHVyZSA9PT0gJ3Bhc3QnIFxyXG4gICAgICAgID8gc3R5bGUgPT09ICdtaW5pJyA/IGAkeyB3ZWVrIH13ZWVrc2AgOiBgJHsgd2VlayB9IHdlZWtzIGFnb2AgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gYCR7IHdlZWsgfXdlZWtzYCA6IGBpbiAkeyB3ZWVrIH0gd2Vla3NgO1xyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW9udGhzRW4gPSAoIG1vbnRoOiBudW1iZXIsIGlzUGFzdE9yRnV0dXJlOiBpc1Bhc3RPckZ1dHVyZSwgc3R5bGU6IHN0eWxlICk6IHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKCBtb250aCA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyAnMW1vbnRoJyA6ICcxIG1vbnRoIGFnbycgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gJzFtb250aCcgOiAnaW4gMSBtb250aCc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyBgJHsgbW9udGggfW1vbnRoc2AgOiBgJHsgbW9udGggfSBtb250aHMgYWdvYCBcclxuICAgICAgICA6IHN0eWxlID09PSAnbWluaScgPyBgJHsgbW9udGggfW1vbnRoc2AgOiBgaW4gJHsgbW9udGggfSBtb250aHNgO1xyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgeWVhcnNFbiA9ICggeWVhcjogbnVtYmVyLCBpc1Bhc3RPckZ1dHVyZTogaXNQYXN0T3JGdXR1cmUsIHN0eWxlOiBzdHlsZSApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGlmICggeWVhciA9PT0gMSApIHtcclxuICAgICAgICByZXR1cm4gaXNQYXN0T3JGdXR1cmUgPT09ICdwYXN0JyBcclxuICAgICAgICA/IHN0eWxlID09PSAnbWluaScgPyAnMXllYXInIDogJzEgeWVhciBhZ28nIFxyXG4gICAgICAgIDogc3R5bGUgPT09ICdtaW5pJyA/ICcxeWVhcicgOiAnaW4gMSB5ZWFyJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3RPckZ1dHVyZSA9PT0gJ3Bhc3QnIFxyXG4gICAgICAgID8gc3R5bGUgPT09ICdtaW5pJyA/IGAkeyB5ZWFyIH15ZWFyc2AgOiBgJHsgeWVhciB9IHllYXJzIGFnb2AgXHJcbiAgICAgICAgOiBzdHlsZSA9PT0gJ21pbmknID8gYCR7IHllYXIgfXllYXJzYCA6IGBpbiAkeyB5ZWFyIH0geWVhcnNgO1xyXG4gICAgfVxyXG5cclxufTsiXX0=