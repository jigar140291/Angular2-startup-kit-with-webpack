import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {pageComponent} from "./pages/page.component";
import {dashBoardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: 'analytics/dashboard', pathMatch: 'full' },
    { path: 'analytics', redirectTo: 'analytics/dashboard', pathMatch: 'full' },
    { path: 'analytics',  component: pageComponent, children: [
        { path: 'dashboard', component: dashBoardComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}