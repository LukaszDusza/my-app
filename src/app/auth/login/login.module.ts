import { CommonModule } from "@angular/common";
import { LoginComponent } from "./index";
import { NgModule, } from "@angular/core";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
    CommonModule,
    FormsModule
 
    ],
    

})
export class LoginModule {}