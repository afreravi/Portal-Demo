import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
//import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { Color, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [257, 325, 467, 679, 556, 432, 678], label: 'Boys' },
    { data: [113, 432, 237, 326, 458, 679, 379], label: 'Girls' },
    { data: [370, 757, 704, 1005, 1014, 1111, 1057], label: 'Total Students', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['September', 'October', 'November', 'December', 'January', 'February', 'March'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        gridLines: {
          color: '#fff',
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          // gridLines: {
          //   color: '#fff',
          // }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: '#fff',
          },
          ticks: {
            fontColor: '#0ad2df',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // theme header color
      backgroundColor: 'rgba(33,186,253,0.3)',
      borderColor: '#0ad2df',
      pointBackgroundColor: '#0ad2df',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#0ad2df'
    },
    { // orange grey
      backgroundColor: 'rgba(255,145,3,0.2)',
      borderColor: '#ff9103',
      pointBackgroundColor: '#ff9103',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff9103'
    },
    { // magenta
      backgroundColor: 'rgba(208,54,236,0.2)',
      borderColor: '#d036ec',
      pointBackgroundColor: '#d036ec',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#d036ec'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  chart: any;

  //@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

}
