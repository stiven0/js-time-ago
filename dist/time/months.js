"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.months = void 0;
const index_1 = require("../locale/index");
exports.months = (month, local) => {
    const monthsSplit = String(month).split('.');
    if (+monthsSplit[0] === 1) {
        return (local === 'es')
            ? index_1.monthsEs(1)
            : index_1.monthsEn(1);
    }
    else {
        return (local === 'es')
            ? index_1.monthsEs(+monthsSplit[0])
            : index_1.monthsEn(+monthsSplit[0]);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RpbWUvbW9udGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFxRDtBQUd4QyxRQUFBLE1BQU0sR0FBRyxDQUFFLEtBQWEsRUFBRSxLQUFhLEVBQVcsRUFBRTtJQUU3RCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9DLElBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFHO1FBQ2pCLE9BQU8sQ0FBRSxLQUFLLEtBQUssSUFBSSxDQUFFO1lBQ3pCLENBQUMsQ0FBQyxnQkFBUSxDQUFFLENBQUMsQ0FBRTtZQUNmLENBQUMsQ0FBQyxnQkFBUSxDQUFFLENBQUMsQ0FBRSxDQUFBO0tBQzFCO1NBQU07UUFDSCxPQUFPLENBQUUsS0FBSyxLQUFLLElBQUksQ0FBRTtZQUN6QixDQUFDLENBQUMsZ0JBQVEsQ0FBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRTtZQUM3QixDQUFDLENBQUMsZ0JBQVEsQ0FBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO0tBQ2hDO0FBRUwsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9udGhzRXMsIG1vbnRoc0VuIH0gZnJvbSAnLi4vbG9jYWxlL2luZGV4JztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnLi4vdHlwZXMvbG9jYWxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBtb250aHMgPSAoIG1vbnRoOiBudW1iZXIsIGxvY2FsOiBsb2NhbGUgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBjb25zdCBtb250aHNTcGxpdCA9IFN0cmluZyggbW9udGggKS5zcGxpdCgnLicpO1xyXG5cclxuICAgIGlmICggK21vbnRoc1NwbGl0WzBdID09PSAxICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggbG9jYWwgPT09ICdlcycgKVxyXG4gICAgICAgICAgICAgICAgPyBtb250aHNFcyggMSApXHJcbiAgICAgICAgICAgICAgICA6IG1vbnRoc0VuKCAxIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICggbG9jYWwgPT09ICdlcycgKVxyXG4gICAgICAgID8gbW9udGhzRXMoICttb250aHNTcGxpdFswXSApXHJcbiAgICAgICAgOiBtb250aHNFbiggK21vbnRoc1NwbGl0WzBdIClcclxuICAgIH1cclxuXHJcbn07Il19