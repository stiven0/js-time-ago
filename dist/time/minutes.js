"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutes = void 0;
const index_1 = require("../locale/index");
const minutes = (minutes, local, isPastOrFuture, style) => {
    minutes = Math.round(minutes);
    switch (local) {
        case 'es': return (0, index_1.minutesEs)(minutes, isPastOrFuture, style);
        case 'en': return (0, index_1.minutesEn)(minutes, isPastOrFuture, style);
        case 'pt': return (0, index_1.minutesPt)(minutes, isPastOrFuture, style);
        default: return (0, index_1.minutesEn)(minutes, isPastOrFuture, style);
    }
};
exports.minutes = minutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lL21pbnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWtFO0FBSzNELE1BQU0sT0FBTyxHQUFHLENBQUUsT0FBZSxFQUFFLEtBQWEsRUFBRSxjQUE4QixFQUFFLEtBQVksRUFBVyxFQUFFO0lBRTNHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBRWhDLFFBQVMsS0FBSyxFQUFHO1FBQ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUEsaUJBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzlELEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFBLGlCQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUUsQ0FBQztRQUM5RCxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBQSxpQkFBUyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDOUQsT0FBTyxDQUFDLENBQUcsT0FBTyxJQUFBLGlCQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUUsQ0FBQztLQUNwRTtBQUVSLENBQUMsQ0FBQztBQVhXLFFBQUEsT0FBTyxXQVdsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pbnV0ZXNFcywgbWludXRlc0VuLCBtaW51dGVzUHQgfSBmcm9tICcuLi9sb2NhbGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBpc1Bhc3RPckZ1dHVyZSB9IGZyb20gJy4uL3R5cGVzL2lzLXBhc3Qtb3ItZnV0dXJlJztcclxuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSAnLi4vdHlwZXMvbG9jYWxlJztcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICcuLi90eXBlcy9zdHlsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbWludXRlcyA9ICggbWludXRlczogbnVtYmVyLCBsb2NhbDogbG9jYWxlLCBpc1Bhc3RPckZ1dHVyZTogaXNQYXN0T3JGdXR1cmUsIHN0eWxlOiBzdHlsZSApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgICAgIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKCBtaW51dGVzICk7XHJcblxyXG4gICAgICAgc3dpdGNoICggbG9jYWwgKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnZXMnOiByZXR1cm4gbWludXRlc0VzKCBtaW51dGVzLCBpc1Bhc3RPckZ1dHVyZSwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICBjYXNlICdlbic6IHJldHVybiBtaW51dGVzRW4oIG1pbnV0ZXMsIGlzUGFzdE9yRnV0dXJlLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ3B0JzogcmV0dXJuIG1pbnV0ZXNQdCggbWludXRlcywgaXNQYXN0T3JGdXR1cmUsIHN0eWxlICk7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogICByZXR1cm4gbWludXRlc0VuKCBtaW51dGVzLCBpc1Bhc3RPckZ1dHVyZSwgc3R5bGUgKTtcclxuICAgICAgIH1cclxuXHJcbn07XHJcbiJdfQ==