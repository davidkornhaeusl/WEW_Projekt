import { NgModule } from '@angular/core';
import { UserService } from './services/userservice.service'
import { CarService } from './services/carservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchUserComponent } from './components/fetchuser/fetchuser.component';
import { createuser } from './components/adduser/AddUser.component';
import { FetchCarComponent } from './components/fetchcar/fetchcar.component';
import { createcar } from './components/addcar/AddCar.component';
import { showCarChild } from './components/viewcar_child/ViewCarChild.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchUserComponent,
        createuser,
        FetchCarComponent,
        createcar,
        showCarChild,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-user', component: FetchUserComponent },
            { path: 'register-user', component: createuser },
            { path: 'user/edit/:id', component: createuser },
            { path: 'fetch-car', component: FetchCarComponent },
            { path: 'register-car', component: createcar },
            { path: 'car/edit/:id', component: createcar },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [UserService, CarService]
})
export class AppModuleShared {
}
