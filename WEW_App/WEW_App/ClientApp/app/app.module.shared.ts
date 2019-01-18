import { NgModule } from '@angular/core';
import { UserService } from './services/userservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchUserComponent } from './components/fetchuser/fetchuser.component'
import { createuser } from './components/adduser/AddUser.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchUserComponent,
        createuser,
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
            { path: 'user/edit/:id', component: createuser},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [UserService]
})
export class AppModuleShared {
}
