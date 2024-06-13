import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'amit-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {
  sections: any = ["Home", "Products", "About Me" , "Contact Us", "Login"];
  navigationObj: any;
  cmsLables: any;

  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.cmsSubsCall().subscribe((data: any) => {
      this.commonService.setCmsData(data);
      this.cmsLables = this.commonService.getCmsData();
      this.navigationObj = this.cmsLables?.sections?.headers?.sections?.menus.lables;
    });
  }

  sectionNavigation = (section: any) => {
    this.router.navigate([this.navigationObj[section]]);
  }

}
