// import { ContaRoutingModule } from './conta.route';
import { RouterModule, Routes } from '@angular/router';
import { ContaAppComponent } from './conta.app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
// import { ContaGuard } from './services/conta.guard';


const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            // { path: 'cadastro', component: CadastroComponent, canActivate: [ContaGuard], canDeactivate: [ContaGuard] },
            // { path: 'login', component: LoginComponent, canActivate: [ContaGuard] }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    exports: [RouterModule]
})
export class ContaRoutingModule { }