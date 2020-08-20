/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GuestDto } from '../models/guest-dto';
import { CreateGuestDto } from '../models/create-guest-dto';
import { UpdateGuestDto } from '../models/update-guest-dto';
@Injectable({
  providedIn: 'root',
})
class GuestService extends __BaseService {
  static readonly GuestGetAllPath = '/guests';
  static readonly GuestPostPath = '/guests';
  static readonly GuestPutPath = '/guests';
  static readonly GuestDeletePath = '/guests/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  GuestGetAllResponse(): __Observable<__StrictHttpResponse<Array<GuestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/guests`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GuestDto>>;
      })
    );
  }  GuestGetAll(): __Observable<Array<GuestDto>> {
    return this.GuestGetAllResponse().pipe(
      __map(_r => _r.body as Array<GuestDto>)
    );
  }

  /**
   * @param createGuestDto undefined
   */
  GuestPostResponse(createGuestDto: CreateGuestDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = createGuestDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/guests`,
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
   * @param createGuestDto undefined
   */
  GuestPost(createGuestDto: CreateGuestDto): __Observable<null> {
    return this.GuestPostResponse(createGuestDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param updateGuestDto undefined
   */
  GuestPutResponse(updateGuestDto: UpdateGuestDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = updateGuestDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/guests`,
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
   * @param updateGuestDto undefined
   */
  GuestPut(updateGuestDto: UpdateGuestDto): __Observable<null> {
    return this.GuestPutResponse(updateGuestDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  GuestDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/guests/${encodeURIComponent(id)}`,
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
  GuestDelete(id: number): __Observable<null> {
    return this.GuestDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module GuestService {
}

export { GuestService }
