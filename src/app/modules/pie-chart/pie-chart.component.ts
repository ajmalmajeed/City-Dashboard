import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public pieChartLabels = ['Pet Bottles', 'Tin Cans', 'Cardboard Boxes'];
  public pieChartData = [26, 19, 15];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
