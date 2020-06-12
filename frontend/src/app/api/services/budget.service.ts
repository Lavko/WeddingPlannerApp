/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BudgetModel } from '../models/budget-model';
import { CreateFundDto } from '../models/create-fund-dto';
import { UpdateFundDto } from '../models/update-fund-dto';
import { CreateExpenseDto } from '../models/create-expense-dto';
import { UpdateExpenseDto } from '../models/update-expense-dto';
@Injectable({
  providedIn: 'root',
})
class BudgetService extends __BaseService {
  static readonly BudgetGetSummaryPath = '/Budget';
  static readonly BudgetCreateFundPath = '/Budget/fund';
  static readonly BudgetUpdateFundPath = '/Budget/fund';
  static readonly BudgetCreateExpensePath = '/Budget/expense';
  static readonly BudgetUpdateExpensePath = '/Budget/expense';
  static readonly BudgetDeleteFundPath = '/Budget/fund/{id}';
  static readonly BudgetDeleteExpensePath = '/Budget/expense/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  BudgetGetSummaryResponse(): __Observable<__StrictHttpResponse<BudgetModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Budget`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetModel>;
      })
    );
  }  BudgetGetSummary(): __Observable<BudgetModel> {
    return this.BudgetGetSummaryResponse().pipe(
      __map(_r => _r.body as BudgetModel)
    );
  }

  /**
   * @param createFundDto undefined
   */
  BudgetCreateFundResponse(createFundDto: CreateFundDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = createFundDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Budget/fund`,
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
   * @param createFundDto undefined
   */
  BudgetCreateFund(createFundDto: CreateFundDto): __Observable<null> {
    return this.BudgetCreateFundResponse(createFundDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param updateFundDto undefined
   */
  BudgetUpdateFundResponse(updateFundDto: UpdateFundDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = updateFundDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Budget/fund`,
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
   * @param updateFundDto undefined
   */
  BudgetUpdateFund(updateFundDto: UpdateFundDto): __Observable<null> {
    return this.BudgetUpdateFundResponse(updateFundDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param createExpenseDto undefined
   */
  BudgetCreateExpenseResponse(createExpenseDto: CreateExpenseDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = createExpenseDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Budget/expense`,
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
   * @param createExpenseDto undefined
   */
  BudgetCreateExpense(createExpenseDto: CreateExpenseDto): __Observable<null> {
    return this.BudgetCreateExpenseResponse(createExpenseDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param updateExpenseDto undefined
   */
  BudgetUpdateExpenseResponse(updateExpenseDto: UpdateExpenseDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = updateExpenseDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Budget/expense`,
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
   * @param updateExpenseDto undefined
   */
  BudgetUpdateExpense(updateExpenseDto: UpdateExpenseDto): __Observable<null> {
    return this.BudgetUpdateExpenseResponse(updateExpenseDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  BudgetDeleteFundResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Budget/fund/${encodeURIComponent(id)}`,
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
  BudgetDeleteFund(id: number): __Observable<null> {
    return this.BudgetDeleteFundResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  BudgetDeleteExpenseResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Budget/expense/${encodeURIComponent(id)}`,
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
  BudgetDeleteExpense(id: number): __Observable<null> {
    return this.BudgetDeleteExpenseResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BudgetService {
}

export { BudgetService }
