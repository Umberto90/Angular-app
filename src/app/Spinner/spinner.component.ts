import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() message = 'Loading';

  constructor() { }

  ngOnInit() {
  }
}