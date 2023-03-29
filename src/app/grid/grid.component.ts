import { Component } from '@angular/core';
import {GridHeading, GridResponse} from "angular-material-data-grid";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: [
  ]
})
export class GridComponent {

  url = '/api/data.json';

  headings: GridHeading[] = [
    {fieldName: 'id', display: 'ID', type: 'number', width: '100px', disableSorting: true, textAlign: 'right'},
    {
      "fieldName": "id",
      "display": "Works with ID",
      "type": "string",
      "clickable": "url",
      "other": {
        "urlTemplate": "/other/:id"
      }
    },
    {
      "fieldName": "computed",
      "display": "Not with computed",
      "type": "string",
      "clickable": "url",
      "other": {
        "urlTemplate": "/other/:computed"
      }
    }
  ];

  onResponse(response: GridResponse): void {
    for(let i = 0; i < response.gridData.length; i++) {
      response.gridData[i].computed = "computed"
    }
  }

}
