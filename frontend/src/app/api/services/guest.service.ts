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
  static readonly GuestGetAllPath = '/planner/{plannerId}/guests';
  static readonly GuestPostPath = '/planner/{plannerId}/guests';
  static readonly GuestPutPath = '/planner/{plannerId}/guests';
  static readonly GuestDeletePath = '/planner/{plannerId}/guests/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param plannerId undefined
   */
  GuestGetAllResponse(plannerId: number): __Observable<__StrictHttpResponse<Array<GuestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/planner/${encodeURIComponent(plannerId)}/guests`,
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
  }
  /**
   * @param plannerId undefined
   */
  GuestGetAll(plannerId: number): __Observable<Array<GuestDto>> {
    return this.GuestGetAllResponse(plannerId).pipe(
      __map(_r => _r.body as Array<GuestDto>)
    );
  }

  /**
   * @param params The `GuestService.GuestPostParams` containing the following parameters:
   *
   * - `plannerId`:
   *
   * - `createGuestDto`:
   */
  GuestPostResponse(params: GuestService.GuestPostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.createGuestDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/planner/${encodeURIComponent(params.plannerId)}/guests`,
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
   * @param params The `GuestService.GuestPostParams` containing the following parameters:
   *
   * - `plannerId`:
   *
   * - `createGuestDto`:
   */
  GuestPost(params: GuestService.GuestPostParams): __Observable<null> {
    return this.GuestPostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `GuestService.GuestPutParams` containing the following parameters:
   *
   * - `updateGuestDto`:
   *
   * - `plannerId`:
   */
  GuestPutResponse(params: GuestService.GuestPutParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.updateGuestDto;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/planner/${encodeURIComponent(params.plannerId)}/guests`,
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
   * @param params The `GuestService.GuestPutParams` containing the following parameters:
   *
   * - `updateGuestDto`:
   *
   * - `plannerId`:
   */
  GuestPut(params: GuestService.GuestPutParams): __Observable<null> {
    return this.GuestPutResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `GuestService.GuestDeleteParams` containing the following parameters:
   *
   * - `plannerId`:
   *
   * - `id`:
   */
  GuestDeleteResponse(params: GuestService.GuestDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/planner/${encodeURIComponent(params.plannerId)}/guests/${encodeURIComponent(params.id)}`,
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
   * @param params The `GuestService.GuestDeleteParams` containing the following parameters:
   *
   * - `plannerId`:
   *
   * - `id`:
   */
  GuestDelete(params: GuestService.GuestDeleteParams): __Observable<null> {
    return this.GuestDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module GuestService {

  /**
   * Parameters for GuestPost
   */
  export interface GuestPostParams {
    plannerId: number;
    createGuestDto: CreateGuestDto;
  }

  /**
   * Parameters for GuestPut
   */
  export interface GuestPutParams {
    updateGuestDto: UpdateGuestDto;
    plannerId: string;
  }

  /**
   * Parameters for GuestDelete
   */
  export interface GuestDeleteParams {
    plannerId: string;
    id: number;
  }
}

export { GuestService }
