import { Route } from '@angular/router';

import { SidebarComponent } from './sidebar.component';

export const sideRoute: Route = {
  path: '',
  component: SidebarComponent,
  outlet: 'sidebar',
};
