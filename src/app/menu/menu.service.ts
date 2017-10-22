import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {}

GetMenuJSON():any {
return this.menuJSON;
}

  private menuJSON :any[] = [

  {
      'Name': "Apps",
      'ImageURL': "/assets/image1.jpg",
      'ItemURL': "Gallery",
      'Value': 2,
      'Description': "Apps"
  },

  {
      'Name': "Bitbucket",
      'ImageURL': "/assets/image2.jpg",
      'ItemURL': "https://bitbucket.org/naox/profile/repositories?visibility=public",
      'Value': 3,
      'Description': "Bitbucket"
  },
  {
      'Name': "About",
      'ImageURL': "/assets/image3.jpg",
      'ItemURL': "About",
      'Value': 5,
      'Description': "About"
  }
  ];

}
