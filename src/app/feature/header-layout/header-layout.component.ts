import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amit-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent {
  sections: any = ["Home", "Products", "About" , "Contact Us", "Login"];
  navigationObj: any = {"Home": '/', "Products": 'rama-seed-company/products', "About": '/about' , "Contact Us": 'contact-us', "Login": 'login'}

  constructor(private router: Router) {}

  sectionNavigation = (section: any) => {
    this.router.navigate([this.navigationObj[section]]);
  }

}
