import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Headers } from '@angular/http';
import { GoogleCharts } from 'google-charts';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  providers: [Service]
})
export class PiechartComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.service.getService().subscribe(json => {
console.log(json);
this.getPieChart1(json);
this.getPieChart2(json);
this.getPieChart3(json);

    });
  }

  getPieChart1(json) {
    let result = [];


          result.push(['Author', 'Points']);
          for (let i in json) {
            result.push([json[i].authorNick, json[i].points]);
          }


    GoogleCharts.load(drawChart);
    function drawChart() {
      const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
      const options = {
        pieHole: 0.6,
        pieSliceTextStyle: {
          color: 'black',
        },
        slices: {
          0: { color: '#7ec252' },
          1: { color: '#a4ce57' },
          2: { color: '#cfe4ad' }
        },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
        legend: 'none',

        title: 'Author vs. Amount',
        titleTextStyle: {
          color: 'black',
          fontSize: 13,
          fontName: 'EncodeSans'
        },
        chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
        //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
        pieSliceText: 'none'
      };
      const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
      pie_1_chart.draw(pieChart, options);
    }
  }

  getPieChart2(json) {
    let result = [];

      result.push(['Author', 'Rating']);

      for (let i in json) {
        result.push([json[i].authorNick, json[i].rating]);
      }

    GoogleCharts.load(drawChart);
    function drawChart() {
      const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
      const options = {
        pieHole: 0.6,
        pieSliceTextStyle: {
          color: 'black',
        },
        slices: {
          0: { color: '#7ec252' },
          1: { color: '#a4ce57' },
          2: { color: '#cfe4ad' }
        },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
        legend: 'none',

        title: 'Author vs. Amount',
        titleTextStyle: {
          color: 'black',
          fontSize: 13,
          fontName: 'EncodeSans'
        },
        chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
        //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
        pieSliceText: 'none'
      };
      const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart2'));
      pie_1_chart.draw(pieChart, options);
    }
  }

  getPieChart3(json) {
    let result = [];
      // console.log(json);
      result.push(['Author', 'Amount']);

      for (let i in json) {
        result.push([json[i].authorNick, json[i].amount]);
      }
    GoogleCharts.load(drawChart);
    function drawChart() {
      const pieChart = GoogleCharts.api.visualization.arrayToDataTable(result);
      const options = {
        pieHole: 0.6,
        pieSliceTextStyle: {
          color: 'black',
        },
        slices: {
          0: { color: '#7ec252' },
          1: { color: '#a4ce57' },
          2: { color: '#cfe4ad' }
        },
        // legend: {
        //     position: 'bottom',
        //     textStyle: {
        //         color: 'black',
        //         fontSize: 15,
        //         fontName: 'EncodeSans'
        //     },
        legend: 'none',

        title: 'Author vs. Amount',
        titleTextStyle: {
          color: 'black',
          fontSize: 13,
          fontName: 'EncodeSans'
        },
        chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
        //         chartArea: {left: 0, top: 0, width: '100px', height: '100px'},
        pieSliceText: 'none'
      };
      const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart3'));
      pie_1_chart.draw(pieChart, options);
    }
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
