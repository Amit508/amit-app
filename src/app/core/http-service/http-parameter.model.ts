import { HTTPConfig } from "./http.model";

export class HTTPServiceParameter {
    url: string;
    urlParameters: { [key: string]: any };
    config: HTTPConfig;
    body: any;
    constructor() {
        this.url = '';
        this.urlParameters = {};
        this.config = new HTTPConfig();
    }
}