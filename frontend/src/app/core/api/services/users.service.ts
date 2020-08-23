/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoginUserDto } from '../models/login-user-dto';
import { RegisterUserDto } from '../models/register-user-dto';
import { GetUserDto } from '../models/get-user-dto';
import { UpdateUserDto } from '../models/update-user-dto';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly UsersAuthenticatePath = '/Users/authenticate';
  static readonly UsersRegisterPath = '/Users/register';
  static readonly UsersGetByIdPath = '/Users/{id}';
  static readonly UsersUpdatePath = '/Users/{id}';
  static readonly UsersDeletePath = '/Users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
  UsersAuthenticateResponse(model: LoginUserDto): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Users/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param model undefined
   */
  UsersAuthenticate(model: LoginUserDto): __Observable<string> {
    return this.UsersAuthenticateResponse(model).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param model undefined
   */
  UsersRegisterResponse(model: RegisterUserDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Users/register`,
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
   * @param model undefined
   */
  UsersRegister(model: RegisterUserDto): __Observable<null> {
    return this.UsersRegisterResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  UsersGetByIdResponse(id: number): __Observable<__StrictHttpResponse<GetUserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetUserDto>;
      })
    );
  }
  /**
   * @param id undefined
   */
  UsersGetById(id: number): __Observable<GetUserDto> {
    return this.UsersGetByIdResponse(id).pipe(
      __map(_r => _r.body as GetUserDto)
    );
  }

  /**
   * @param params The `UsersService.UsersUpdateParams` containing the following parameters:
   *
   * - `model`:
   *
   * - `id`:
   */
  UsersUpdateResponse(params: UsersService.UsersUpdateParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.model;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Users/${encodeURIComponent(params.id)}`,
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
   * @param params The `UsersService.UsersUpdateParams` containing the following parameters:
   *
   * - `model`:
   *
   * - `id`:
   */
  UsersUpdate(params: UsersService.UsersUpdateParams): __Observable<null> {
    return this.UsersUpdateResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  UsersDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Users/${encodeURIComponent(id)}`,
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
  UsersDelete(id: number): __Observable<null> {
    return this.UsersDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersService {

  /**
   * Parameters for UsersUpdate
   */
  export interface UsersUpdateParams {
    model: UpdateUserDto;
    id: number;
  }
}

export { UsersService }
