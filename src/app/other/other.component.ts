import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles: [
  ]
})
export class OtherComponent {

  param: string | null;

  constructor(route: ActivatedRoute) {
    this.param = route.snapshot.paramMap.get("param")
  }

}
