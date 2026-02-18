import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addOutline, arrowBackOutline, closeCircleOutline, createOutline } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { customNavAnimation } from './app/animations/custom-nav.animation';

// Register specific Ionicons used by name (e.g. "add-outline").
addIcons(
  { 'add-outline': addOutline,
    'arrow-back-outline': arrowBackOutline,
    'close-circle-outline': closeCircleOutline,
    'create-outline': createOutline
  }
);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ navAnimation: customNavAnimation }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
