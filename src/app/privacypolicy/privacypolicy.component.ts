import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

  constructor() { }
  changeLocation(url: any): void{
  window.location.href = url;
  }
  ngOnInit() {
  }

}
