import { NgModule,} from "@angular/core";
import { NavbarComponent } from "./index";
import { CommonModule } from "@angular/common";




@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavbarComponent,
       
    ]
    

})
export class NavbarModule { }