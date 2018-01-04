import { Component, OnInit, Input, Output } from '@angular/core';
import { Service } from '../service';
import { Headers } from '@angular/http';
import { GoogleCharts } from 'google-charts';
import { Subscription } from 'rxjs/Subscription';
import { ChartReadyEvent } from 'ng2-google-charts';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Jsonp } from '@angular/http/src/http';



@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  providers: [Service]
})
export class PiechartComponent implements OnInit {

  //   let titles = {
  // bar: []
  //   }

  barChartAmount;
  barChartAmountTitle = ' ';
  barChartPoints;
  barChartPointsTitle = ' ';
  pieChartPoints;
  pieChartPointsTitle = '';
  pieChartRating;
  pieChartRatingTitle = '';
  pieChartAmount;
  pieChartAmountTitle = '';
  pieChartAmount2;
  pieChartAmountTitle2 = '';
  table;

  constructor(private service?: Service, private spinnerService?: Ng4LoadingSpinnerService) { }


  ngOnInit() {
    this.getServiceDefault();
  }

getFilter(linkService: String): void {
  console.log(linkService);
  this.getSelectedService(linkService);
}



  getServiceDefault() {
    // let filter = this.filters.getSelections();
    // console.log(filter);
    this.spinnerService.show();
    let link = 'http://89.67.4.242:11780/dashboard/webapi/resource/message';
   this.service.getService(link).retry(5).subscribe(json => {
      
      console.log(json);
      this.getSnapshotCharts(json);
      // this.getPieChart1(json);
      // this.getPieChart2(json);
      // this.getPieChart3(json);
      //this.getTable(json);
      
      this.spinnerService.hide();
    }, 
    (error: HttpErrorResponse) => {
      console.log(error.status)
    }
  );
  }

  getSelectedService(link) {
    this.spinnerService.show();
    this.service.getService(link).retry(5).subscribe(json => {
      console.log(json);
      this.getSnapshotCharts(json);
      this.spinnerService.hide();

    },
    (error: HttpErrorResponse) => {
      console.log('error status: ' + error.status)
    }
  );
  }

  public ready(event: ChartReadyEvent) { }


  //draw snapshot
  getSnapshotCharts(json) {

    let keys = Object.keys(json);
    console.log(keys[0]);

    //pie
    let resultPiePoints = [];
    let resultPieRating = [];
    let resultPieAmount = [];
    let resultPieAmount2 = [];

    //bar
    let resultBarAmount = [];
    let resultBarPoints = [];

    // resultPiePoints = json.filter(elem => elem.points > 3);

    // const test2 = Object.assign({}, test);
    // const test3 = {
    //   ...test
    // };


    //points pie
    resultPiePoints = json.map(elem => [elem.authorNick, elem.points]);
    resultPiePoints.unshift(['Author', 'Points']);

    this.pieChartPointsTitle = resultPiePoints[0];

    // for (let i in json) {
    //   resultPiePoints.push([json[i].authorNick, json[i].points]);
    // }
    this.pieChartPoints = {
      chartType: 'PieChart',
      dataTable: resultPiePoints,
      options: {
        title: resultPiePoints[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultPiePoints);

    //rating pie
    resultPieRating = json.map(elem => [elem.authorNick, elem.rating]);
    resultPieRating.unshift(['Author', 'Rating']);

    this.pieChartRatingTitle = resultPieRating[0];

    this.pieChartRating = {
      chartType: 'PieChart',
      dataTable: resultPieRating,
      options: {
        title: resultPieRating[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultPieRating);

    //amount pie
    resultPieAmount = json.map(elem => [elem.authorNick, elem.amount]);
    resultPieAmount.unshift(['Author', 'Amount']);

    this.pieChartAmountTitle = resultPieAmount[0];

    this.pieChartAmount = {
      chartType: 'PieChart',
      dataTable: resultPieAmount,
      options: {
        title: resultPieAmount[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultPieAmount);

    //amount pie
    resultPieAmount2.push(['Author', 'Amount']);
    for (let i in json) {
      resultPieAmount2.push([json[i].authorNick, json[i].amount]);
    }

    this.pieChartAmountTitle2 = resultPieAmount2[0];

    this.pieChartAmount2 = {
      chartType: 'PieChart',
      dataTable: resultPieAmount2,
      options: {
        title: resultPieAmount2[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultPieAmount2);

    //bar amount
    resultBarAmount.push(['Author', 'Amount']);

    for (let i in json) {
      resultBarAmount.push([json[i].authorNick, json[i].amount]);
      break;
    }
    this.barChartAmount = {
      chartType: 'BarChart',
      dataTable: resultBarAmount,
      options: {
        title: resultBarAmount[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultBarAmount);

    //bar points
    resultBarPoints.push(['Author', 'Points']);

    for (let i in json) {
      resultBarPoints.push([json[i].authorNick, json[i].points]);
      break;
    }
    this.barChartPoints = {
      chartType: 'BarChart',
      dataTable: resultBarPoints,
      options: {
        title: resultBarPoints[0],
        pieHole: 0.6,
        legend: 'none',
      },
    };
    console.log(resultBarPoints);









  }







  getTable(json) {

    let result = [];
    result.push(['id', 'comment', 'Author', 'rating', 'date', 'amount', 'Points']);
    for (let i in json) {
      result.push([json[i].id, json[i].comment, json[i].authorNick, json[i].rating, json[i].date, json[i].amount, json[i].points]);
    }

    this.table = {
      chartType: 'Table',
      dataTable: result,
      options: {
        title: result[0]
      }
    };
    console.log(result);
  }
}

export interface Messages {
  id?: number;
  comment?: string;
  authorNick?: string;
  rating?: number;
  date?: Date;
  points?: number;
  amount?: number;
}

  // getPieChart1(json) {
  //   let result = [];


  //   result.push(['Author', 'Points']);
  //   for (let i in json) {
  //     result.push([json[i].authorNick, json[i].points]);
  //   }

  //   // console.log(result);

  //   GoogleCharts.load(drawChart);
  //   function drawChart() {
  //     const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
  //     const options = {
  //       pieHole: 0.6,
  //       pieSliceTextStyle: {
  //         color: 'black',
  //       },
  //       slices: {
  //         0: { color: '#7ec252' },
  //         1: { color: '#a4ce57' },
  //         2: { color: '#cfe4ad' }
  //       },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
  //       legend: 'none',

  //       title: 'Author vs. Amount',
  //       titleTextStyle: {
  //         color: 'black',
  //         fontSize: 13,
  //         fontName: 'EncodeSans'
  //       },
  //       chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
  //       //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
  //       pieSliceText: 'none'
  //     };
  //     const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
  //     pie_1_chart.draw(pieChart, options);
  //   }
  // }

  // getPieChart2(json) {
  //   let result = [];

  //   result.push(['Author', 'Rating']);

  //   for (let i in json) {
  //     result.push([json[i].authorNick, json[i].rating]);
  //   }

  //   GoogleCharts.load(drawChart);
  //   function drawChart() {
  //     const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
  //     const options = {
  //       pieHole: 0.6,
  //       pieSliceTextStyle: {
  //         color: 'black',
  //       },
  //       slices: {
  //         0: { color: '#7ec252' },
  //         1: { color: '#a4ce57' },
  //         2: { color: '#cfe4ad' }
  //       },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
  //       legend: 'none',

  //       title: 'Author vs. Amount',
  //       titleTextStyle: {
  //         color: 'black',
  //         fontSize: 13,
  //         fontName: 'EncodeSans'
  //       },
  //       chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
  //       //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
  //       pieSliceText: 'none'
  //     };
  //     const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart2'));
  //     pie_1_chart.draw(pieChart, options);
  //   }
  // }

  // getPieChart3(json) {
  //   let result = [];
  //   // console.log(json);
  //   result.push(['Author', 'Amount']);

  //   for (let i in json) {
  //     result.push([json[i].authorNick, json[i].amount]);
  //   }
  //   GoogleCharts.load(drawChart);
  //   function drawChart() {
  //     const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
  //     const options = {
  //       pieHole: 0.6,
  //       pieSliceTextStyle: {
  //         color: 'black',
  //       },
  //       slices: {
  //         0: { color: '#7ec252' },
  //         1: { color: '#a4ce57' },
  //         2: { color: '#cfe4ad' }
  //       },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
//         legend: 'none',

//         title: 'Author vs. Amount',
//         titleTextStyle: {
//           color: 'black',
//           fontSize: 13,
//           fontName: 'EncodeSans'
//         },
//         chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
//         //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
//         pieSliceText: 'none'
//       };
//       const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart3'));
//       pie_1_chart.draw(pieChart, options);
//     }
//   }


