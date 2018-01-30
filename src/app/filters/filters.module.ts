import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { FiltersComponent } from "./filters.component";



@NgModule({
    declarations: [
        FiltersComponent
    ],

    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    ],
    exports: [
        FiltersComponent
    ]

})
export class FiltersModule {}