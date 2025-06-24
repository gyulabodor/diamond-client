import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/page-home/page-home.component')
      .then(m => m.PageHomeComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/page-home/page-home.component')
      .then(m => m.PageHomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/page-about-us/page-about-us.component')
      .then(m => m.PageAboutUsComponent)
  },
  {
    path: 'listing',
    loadComponent: () => import('./pages/page-listing/page-listing.component')
      .then(m => m.PageListingComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/page-contact-us/page-contact-us.component')
      .then(m => m.PageContactUsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component')
      .then(m => m.PageNotFoundComponent)
  }
];
