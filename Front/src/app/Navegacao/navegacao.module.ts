import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations:[
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,

    ],
    imports:[
        CommonModule,
        RouterModule, 
        NgbModule

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    
    exports:[]

})
export class NavegacaoModule{}