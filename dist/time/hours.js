"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hours = void 0;
const index_1 = require("../locale/index");
exports.hours = (hours, local) => {
    const hourSplit = String(hours).split('.');
    if (+hourSplit[0] === 1) {
        return (local === 'es')
            ? index_1.hoursEs(1)
            : index_1.hoursEn(1);
    }
    else {
        return (local === 'es')
            ? index_1.hoursEs(+hourSplit[0])
            : index_1.hoursEn(+hourSplit[0]);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91cnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGltZS9ob3Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFHdEMsUUFBQSxLQUFLLEdBQUcsQ0FBRSxLQUFhLEVBQUUsS0FBYSxFQUFXLEVBQUU7SUFFN0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3QyxJQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRztRQUN0QixPQUFPLENBQUUsS0FBSyxLQUFLLElBQUksQ0FBRTtZQUN6QixDQUFDLENBQUMsZUFBTyxDQUFFLENBQUMsQ0FBRTtZQUNkLENBQUMsQ0FBQyxlQUFPLENBQUUsQ0FBQyxDQUFFLENBQUE7S0FDbEI7U0FBTTtRQUNGLE9BQU8sQ0FBRSxLQUFLLEtBQUssSUFBSSxDQUFFO1lBQ3pCLENBQUMsQ0FBQyxlQUFPLENBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDMUIsQ0FBQyxDQUFDLGVBQU8sQ0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO0tBQzlCO0FBRUosQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG91cnNFcywgaG91cnNFbiB9IGZyb20gJy4uL2xvY2FsZS9pbmRleCc7XHJcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gJy4uL3R5cGVzL2xvY2FsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaG91cnMgPSAoIGhvdXJzOiBudW1iZXIsIGxvY2FsOiBsb2NhbGUgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgIGNvbnN0IGhvdXJTcGxpdCA9IFN0cmluZyggaG91cnMgKS5zcGxpdCgnLicpO1xyXG5cclxuICAgaWYgKCAraG91clNwbGl0WzBdID09PSAxICkge1xyXG4gICAgICAgIHJldHVybiAoIGxvY2FsID09PSAnZXMnIClcclxuICAgICAgICA/IGhvdXJzRXMoIDEgKVxyXG4gICAgICAgIDogaG91cnNFbiggMSApXHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICggbG9jYWwgPT09ICdlcycgKVxyXG4gICAgICAgID8gaG91cnNFcyggK2hvdXJTcGxpdFswXSApXHJcbiAgICAgICAgOiBob3Vyc0VuKCAraG91clNwbGl0WzBdIClcclxuICAgfVxyXG5cclxufTtcclxuIl19