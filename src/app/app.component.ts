import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'amit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private commonService: CommonService) {}
  
  ngOnInit(): void {
    this.commonService.cmsSubsCall().subscribe((data: any) => {
      this.commonService.setCmsData(data);
    });
  }
}
