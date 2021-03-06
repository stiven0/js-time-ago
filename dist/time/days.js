"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.days = void 0;
const index_1 = require("../locale/index");
exports.days = (days, local) => {
    const daysSplit = String(days).split('.');
    if (+daysSplit[0] === 1) {
        switch (local) {
            case 'es':
                return index_1.daysEs(1);
            case 'en':
                return index_1.daysEn(1);
            case 'pt':
                return index_1.daysPt(1);
            default: return index_1.daysEn(1);
        }
    }
    else {
        switch (local) {
            case 'es':
                return index_1.daysEs(+daysSplit[0]);
            case 'en':
                return index_1.daysEn(+daysSplit[0]);
            case 'pt':
                return index_1.daysPt(+daysSplit[0]);
            default: return index_1.daysEn(+daysSplit[0]);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lL2RheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlEO0FBRzVDLFFBQUEsSUFBSSxHQUFHLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBVyxFQUFFO0lBRTFELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUc7UUFFbkIsUUFBUyxLQUFLLEVBQUc7WUFFVCxLQUFLLElBQUk7Z0JBQ0wsT0FBTyxjQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFdkIsS0FBSyxJQUFJO2dCQUNMLE9BQU8sY0FBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1lBRXZCLEtBQUssSUFBSTtnQkFDTCxPQUFPLGNBQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUV2QixPQUFPLENBQUMsQ0FBQyxPQUFPLGNBQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztTQUVuQztLQUVSO1NBQU07UUFFQyxRQUFTLEtBQUssRUFBRztZQUViLEtBQUssSUFBSTtnQkFDTCxPQUFPLGNBQU0sQ0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBRW5DLEtBQUssSUFBSTtnQkFDTCxPQUFPLGNBQU0sQ0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBRW5DLEtBQUssSUFBSTtnQkFDTCxPQUFPLGNBQU0sQ0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBRW5DLE9BQU8sQ0FBQyxDQUFDLE9BQU8sY0FBTSxDQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FFL0M7S0FFSjtBQUVMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRheXNFcywgZGF5c0VuLCBkYXlzUHQgfSBmcm9tICcuLi9sb2NhbGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tICcuLi90eXBlcy9sb2NhbGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRheXMgPSAoIGRheXM6IG51bWJlciwgbG9jYWw6IGxvY2FsZSApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRheXNTcGxpdCA9IFN0cmluZyggZGF5cyApLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgaWYgKCArZGF5c1NwbGl0WzBdID09PSAxICkge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggbG9jYWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXNFcyggMSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzRW4oIDEgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5c1B0KCAxICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBkYXlzRW4oIDEgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggbG9jYWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzRXMoICtkYXlzU3BsaXRbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXNFbiggK2RheXNTcGxpdFswXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3B0JzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5c1B0KCArZGF5c1NwbGl0WzBdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGRheXNFbiggK2RheXNTcGxpdFswXSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufTsiXX0=