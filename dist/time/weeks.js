"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeks = void 0;
const index_1 = require("../locale/index");
exports.weeks = (week, local) => {
    const weeksSplit = String(week).split('.');
    if (+weeksSplit[0] === 1) {
        switch (local) {
            case 'es':
                return index_1.weeksEs(1);
            case 'en':
                return index_1.weeksEn(1);
            case 'pt':
                return index_1.weeksPt(1);
            default: return index_1.weeksEn(1);
        }
    }
    else {
        switch (local) {
            case 'es':
                return index_1.weeksEs(+weeksSplit[0]);
            case 'en':
                return index_1.weeksEn(+weeksSplit[0]);
            case 'pt':
                return index_1.weeksPt(+weeksSplit[0]);
            default: return index_1.weeksEn(+weeksSplit[0]);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGltZS93ZWVrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEQ7QUFHL0MsUUFBQSxLQUFLLEdBQUcsQ0FBRSxJQUFZLEVBQUUsS0FBYSxFQUFXLEVBQUU7SUFFM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFFLElBQUksQ0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3QyxJQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRztRQUVwQixRQUFTLEtBQUssRUFBRztZQUVULEtBQUssSUFBSTtnQkFDTCxPQUFPLGVBQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUV4QixLQUFLLElBQUk7Z0JBQ0wsT0FBTyxlQUFPLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFeEIsS0FBSyxJQUFJO2dCQUNMLE9BQU8sZUFBTyxDQUFFLENBQUMsQ0FBRSxDQUFDO1lBRXhCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sZUFBTyxDQUFFLENBQUMsQ0FBRSxDQUFDO1NBRXBDO0tBRVI7U0FBTTtRQUVGLFFBQVMsS0FBSyxFQUFHO1lBRVYsS0FBSyxJQUFJO2dCQUNMLE9BQU8sZUFBTyxDQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFckMsS0FBSyxJQUFJO2dCQUNMLE9BQU8sZUFBTyxDQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFckMsS0FBSyxJQUFJO2dCQUNMLE9BQU8sZUFBTyxDQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFckMsT0FBTyxDQUFDLENBQUMsT0FBTyxlQUFPLENBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztTQUVqRDtLQUVKO0FBRUwsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2Vla3NFcywgd2Vla3NFbiwgd2Vla3NQdCB9IGZyb20gJy4uL2xvY2FsZS9pbmRleCc7XHJcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gJy4uL3R5cGVzL2xvY2FsZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vla3MgPSAoIHdlZWs6IG51bWJlciwgbG9jYWw6IGxvY2FsZSApOiBzdHJpbmcgPT4ge1xyXG5cclxuICAgIGNvbnN0IHdlZWtzU3BsaXQgPSBTdHJpbmcoIHdlZWsgKS5zcGxpdCgnLicpO1xyXG5cclxuICAgIGlmICggK3dlZWtzU3BsaXRbMF0gPT09IDEgKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKCBsb2NhbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2Vla3NFcyggMSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrc0VuKCAxICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtzUHQoIDEgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHdlZWtzRW4oIDEgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgc3dpdGNoICggbG9jYWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrc0VzKCArd2Vla3NTcGxpdFswXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2Vla3NFbiggK3dlZWtzU3BsaXRbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdwdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtzUHQoICt3ZWVrc1NwbGl0WzBdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHdlZWtzRW4oICt3ZWVrc1NwbGl0WzBdICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59OyJdfQ==