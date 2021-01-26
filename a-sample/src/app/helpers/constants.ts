import { environment } from '../../environments/environment.prod';

const apiSiteBase = environment.API_BASE_URL;
export const apiVitrinaLw: string = apiSiteBase + '/Data/VitrinaWidgetLw';
export const apiVitrinaLPromotions = apiSiteBase + '/Data/VitrinaPromotions';
export const apiVitrinaTabbed = apiSiteBase + '/Data/VitrinaTabbed';
export const apiVitrinaCountries = apiSiteBase + '/Data/VitrinaCountries';
