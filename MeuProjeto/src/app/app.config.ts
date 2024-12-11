import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = 
{
  providers: [    
    provideHttpClient(),  
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ]
};
