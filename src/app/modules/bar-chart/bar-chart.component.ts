import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {
      data: [10, 17, 39, 50, 40, 75, 80],
      label: "Beverages",
      backgroundColor: "#73bac7",
      hoverBackgroundColor: "#73bac7",
    },
    {
      data: [28, 30, 36, 40, 35, 55, 70],
      label: "Frozen Products",
      backgroundColor: "#94d4b4",
      hoverBackgroundColor: "#94d4b4",
    },
    { data: [15, 23, 35, 40, 38, 55, 67], label: "Pet Bottles" },
  ];

  ngOnInit() {}
}
