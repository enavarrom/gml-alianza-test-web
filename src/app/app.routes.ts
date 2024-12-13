import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClienthistoryComponent } from './client/clienthistory/clienthistory.component';
import { EmergencypinComponent } from './emergencypin/emergencypin.component';
import { EmergencypinhistoryComponent } from './emergencypin/emergencypinhistory/emergencypinhistory.component';

export const routes: Routes = [
    { path: 'clients', component: ClientComponent },
    { path: 'clients/history', component: ClienthistoryComponent }, 
    { path: 'emergencypin', component: EmergencypinComponent }, 
    { path: 'emergencypin/history', component: EmergencypinhistoryComponent }, 
    { path: '', redirectTo: '/emergencypin', pathMatch: 'full' }
];
