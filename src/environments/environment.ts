// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  APIHostHeaderName: 'X-RapidAPI-Host',
  APIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  APIKeyHeaderName:'X-RapidAPI-Key',
  APIKeyHeaderValue:'b30ff6c27fmsh1e3385f7a8ae611p1c2fabjsn859055023298',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
