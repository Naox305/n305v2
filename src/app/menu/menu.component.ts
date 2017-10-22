import { Component, OnInit} from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  menuSelection = '';

  changeLocation(url: any): void{
  window.location.href = url;
  }

menuItems : any[];
  ngOnInit() {
  this.menuItems = this.menuService.GetMenuJSON();
  }

}
