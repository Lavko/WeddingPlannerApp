/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { HomeSummaryDto } from '../models/home-summary-dto';
@Injectable({
  providedIn: 'root',
})
class HomeService extends __BaseService {
  static readonly HomeGetPath = '/summary';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  HomeGetResponse(): __Observable<__StrictHttpResponse<HomeSummaryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/summary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HomeSummaryDto>;
      })
    );
  }  HomeGet(): __Observable<HomeSummaryDto> {
    return this.HomeGetResponse().pipe(
      __map(_r => _r.body as HomeSummaryDto)
    );
  }
}

module HomeService {
}

export { HomeService }
