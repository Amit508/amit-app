import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPServiceParameter } from './http-parameter.model';
import { HTTPConfig } from './http.model';

const CONFIG_DEFAULTS: HTTPConfig = {
  dataType: 'json',
  withCredentials: true,
  retryAlloowed: false,
  'X-HTTP-Method-Override': '',
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public delete = (param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    return this.httpClient.delete(url, this.createOptions(param.config));
  }

  public get = <T>(param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    return this.httpClient.get<T>(url, this.createOptions(param.config));
  }

  public post = (param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    const options = this.createOptions(param.config);
    return this.httpClient.post(url, param.body, options);
  }

  public put = (param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    const options = this.createOptions(param.config);
    return this.httpClient.put(url, param.body, options);
  }

  public getDownloadFormat = <T>(param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    return this.httpClient.get<T>(url, this.createResponseTypeText(param.config));
  }

  public postDownloadFormat = <T>(param: HTTPServiceParameter) => {
    const url = this.replaceUrlPlaceholders(param.url, param.urlParameters);
    return this.httpClient.post<T>(url, param.body, this.createResponseTypeText(param.config));
  }

  private createOptions = (httpConfig: HTTPConfig) => {
    const config = Object.assign({}, CONFIG_DEFAULTS, httpConfig);
    const option = {
      headers: this.createHeader(config),
      withCredentials: config.withCredentials,
    };
    return option;
  }

  private createResponseTypeText = (httpConfig: HTTPConfig): any => {
    const config = Object.assign({}, CONFIG_DEFAULTS, httpConfig);
    const option = {
      responseType: 'text',
      headers: this.createHeader(config),
      withCredentials: config.withCredentials,
    };
    return option;
  }

  private createHeader = (httpConfig: HTTPConfig): HttpHeaders => {
    const headersToSet: any = {};
    this.injectDefaultHeader(httpConfig, headersToSet);
    const headers = new HttpHeaders(headersToSet);
    return headers;
  }

  injectDefaultHeader(httpConfig: any, headersToSet: any): any {
    if(httpConfig['X-HTTP-Method-Override']) {
      headersToSet['X-HTTP-Method-Override'] = httpConfig['X-HTTP-Method-Override'];
    }
  }

  private replaceUrlPlaceholders(
    url: string,
    parameters: { [key: string]: any },
    ): string {
      if(!parameters) {
        return  url;
      }

      let parsedUrl = url;
      for(const keys in parameters) {
        if(parameters[keys]) {
          parsedUrl = parsedUrl.replace(`{${keys}}`, parameters[keys]);
        }
      }
      return parsedUrl;
  }
}
