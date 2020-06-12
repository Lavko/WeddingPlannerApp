/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceProviderDto } from '../models/service-provider-dto';
import { CreateServiceProviderDto } from '../models/create-service-provider-dto';
import { UpdateServiceProviderDto } from '../models/update-service-provider-dto';
@Injectable({
  providedIn: 'root',
})
class ServiceProviderService extends __BaseService {
  static readonly ServiceProviderGetAllPath = '/ServiceProvider/all';
  static readonly ServiceProviderPostPath = '/ServiceProvider';
  static readonly ServiceProviderPutPath = '/ServiceProvider';
  static readonly ServiceProviderDeletePath = '/ServiceProvider/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  ServiceProviderGetAllResponse(): __Observable<__StrictHttpResponse<Array<ServiceProviderDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ServiceProvider/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceProviderDto>>;
      })
    );
  }  ServiceProviderGetAll(): __Observable<Array<ServiceProviderDto>> {
    return this.ServiceProviderGetAllResponse().pipe(
      __map(_r => _r.body as Array<ServiceProviderDto>)
    );
  }

  /**
   * @param provider undefined
   */
  ServiceProviderPostResponse(provider: CreateServiceProviderDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = provider;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceProvider`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param provider undefined
   */
  ServiceProviderPost(provider: CreateServiceProviderDto): __Observable<null> {
    return this.ServiceProviderPostResponse(provider).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param provider undefined
   */
  ServiceProviderPutResponse(provider: UpdateServiceProviderDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = provider;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/ServiceProvider`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param provider undefined
   */
  ServiceProviderPut(provider: UpdateServiceProviderDto): __Observable<null> {
    return this.ServiceProviderPutResponse(provider).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  ServiceProviderDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/ServiceProvider/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  ServiceProviderDelete(id: number): __Observable<null> {
    return this.ServiceProviderDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ServiceProviderService {
}

export { ServiceProviderService }
