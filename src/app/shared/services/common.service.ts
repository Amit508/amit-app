import { Injectable } from '@angular/core';
import { HTTPServiceParameter } from 'src/app/core/http-service/http-parameter.model';
import { HTTPConfig } from 'src/app/core/http-service/http.model';
import { HttpService } from 'src/app/core/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  param = new HTTPServiceParameter();
  cmsContent: any;
  constructor(private httpService: HttpService) { }

  setProxyHeaders = () => {
    const param = new HTTPServiceParameter();
    param.config = new HTTPConfig();
    param.config.withCredentials = true;
    /** TO-DO
     * param.config.CabinetName = 'omnidocs';
     * param.config.version = '1'; 
    */
    return param;
  }

  cmsSubsCall = () => {
    this.param.url = '/assets/CMS/dashboard.json'; // http://localhost:4200/assets/CMS/dashboard.json
    return this.httpService.get<any>(this.param);
  }

  setCmsData = (data: any) => {
    this.cmsContent = data;
  }

  getCmsData = () => {
    return this.cmsContent;
  }
}
