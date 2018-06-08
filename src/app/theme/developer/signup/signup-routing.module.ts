import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes: Routes = [
    {
        path: '',
        component: SignupComponent,
        data: {
            title: 'Signup',
            icon: 'icon-user',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - user profile',
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule { }
