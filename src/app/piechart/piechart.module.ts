import { PiechartComponent } from "./index";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { HttpClientModule } from "@angular/common/http";





@NgModule({
    declarations: [
        
        PiechartComponent,

    ],
    imports: [
        CommonModule,
        Ng2GoogleChartsModule,
        HttpClientModule,
      
    ],
    exports: [
        PiechartComponent
    ]

})
export class PieChartModule { }