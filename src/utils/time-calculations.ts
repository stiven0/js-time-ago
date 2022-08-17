const formulaCalculateSeconds = 1000;
const formulaCalculateMinutes = 1000 * 60 ;
const formulaCalculateHours   = 1000 * 60 * 60;
const formulaCalculateDays    = 1000 * 60 * 60 * 24;
const formulaCalculateWeeks   = 1000 * 60 * 60 * 24 * 7; 
const formulaCalculateMonths  = 1000 * 60 * 60 * 24 * 7 * 4; 
const formulaCalculateYears   = 1000 * 60 * 60 * 24; 

export const calculateSeconds = ( difference: number ): number => Math.abs( difference / formulaCalculateSeconds ); 
export const calculateMinutes = ( difference: number ): number => Math.abs( difference / formulaCalculateMinutes ); 
export const calculateHours   = ( difference: number ): number => Math.abs( difference / formulaCalculateHours );  
export const calculateDays    = ( difference: number ): number => Math.abs( difference / formulaCalculateDays );  
export const calculateWeeks   = ( difference: number ): number => Math.abs( difference / formulaCalculateWeeks ); 
export const calculateMonths  = ( difference: number ): number => Math.abs( difference / formulaCalculateMonths );  
export const calculateYears   = ( difference: number ): number => Math.abs( (difference / formulaCalculateYears) / 365 ); 