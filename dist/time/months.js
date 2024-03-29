"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.months = void 0;
const index_1 = require("../locale/index");
const months = (month, local, isPastOrFuture, style) => {
    month = Math.round(month);
    switch (local) {
        case 'es': return (0, index_1.monthsEs)(month, isPastOrFuture, style);
        case 'en': return (0, index_1.monthsEn)(month, isPastOrFuture, style);
        case 'pt': return (0, index_1.monthsPt)(month, isPastOrFuture, style);
        default: return (0, index_1.monthsEn)(month, isPastOrFuture, style);
    }
};
exports.months = months;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RpbWUvbW9udGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUErRDtBQUt4RCxNQUFNLE1BQU0sR0FBRyxDQUFFLEtBQWEsRUFBRSxLQUFhLEVBQUUsY0FBOEIsRUFBRSxLQUFZLEVBQVcsRUFBRTtJQUUzRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUU1QixRQUFTLEtBQUssRUFBRztRQUNiLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFBLGdCQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUUsQ0FBQztRQUMzRCxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBQSxnQkFBUSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDM0QsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUEsZ0JBQVEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFHLE9BQU8sSUFBQSxnQkFBUSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFFLENBQUM7S0FDOUQ7QUFFTCxDQUFDLENBQUM7QUFYVyxRQUFBLE1BQU0sVUFXakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb250aHNFcywgbW9udGhzRW4sIG1vbnRoc1B0IH0gZnJvbSAnLi4vbG9jYWxlL2luZGV4JztcclxuaW1wb3J0IHsgaXNQYXN0T3JGdXR1cmUgfSBmcm9tICcuLi90eXBlcy9pcy1wYXN0LW9yLWZ1dHVyZSc7XHJcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gJy4uL3R5cGVzL2xvY2FsZSc7XHJcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi4vdHlwZXMvc3R5bGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vbnRocyA9ICggbW9udGg6IG51bWJlciwgbG9jYWw6IGxvY2FsZSwgaXNQYXN0T3JGdXR1cmU6IGlzUGFzdE9yRnV0dXJlLCBzdHlsZTogc3R5bGUgKTogc3RyaW5nID0+IHtcclxuXHJcbiAgICBtb250aCA9IE1hdGgucm91bmQoIG1vbnRoICk7XHJcbiAgICBcclxuICAgIHN3aXRjaCAoIGxvY2FsICkge1xyXG4gICAgICAgIGNhc2UgJ2VzJzogcmV0dXJuIG1vbnRoc0VzKCBtb250aCwgaXNQYXN0T3JGdXR1cmUsIHN0eWxlICk7XHJcbiAgICAgICAgY2FzZSAnZW4nOiByZXR1cm4gbW9udGhzRW4oIG1vbnRoLCBpc1Bhc3RPckZ1dHVyZSwgc3R5bGUgKTtcclxuICAgICAgICBjYXNlICdwdCc6IHJldHVybiBtb250aHNQdCggbW9udGgsIGlzUGFzdE9yRnV0dXJlLCBzdHlsZSApO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgcmV0dXJuIG1vbnRoc0VuKCBtb250aCwgaXNQYXN0T3JGdXR1cmUsIHN0eWxlICk7XHJcbiAgICB9XHJcblxyXG59OyJdfQ==