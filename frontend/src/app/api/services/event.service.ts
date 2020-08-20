/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventDto } from '../models/event-dto';
import { CreateEventDto } from '../models/create-event-dto';
import { UpdateEventDto } from '../models/update-event-dto';
@Injectable({
  providedIn: 'root',
})
class EventService extends __BaseService {
  static readonly EventGetAllPath = '/events';
  static readonly EventPostPath = '/events';
  static readonly EventPutPath = '/events';
  static readonly EventDeletePath = '/events/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param plannerId undefined
   */
  EventGetAllResponse(plannerId?: number): __Observable<__StrictHttpResponse<Array<EventDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (plannerId != null) __params = __params.set('plannerId', plannerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EventDto>>;
      })
    );
  }
  /**
   * @param plannerId undefined
   */
  EventGetAll(plannerId?: number): __Observable<Array<EventDto>> {
    return this.EventGetAllResponse(plannerId).pipe(
      __map(_r => _r.body as Array<EventDto>)
    );
  }

  /**
   * @param createEventDto undefined
   */
  EventPostResponse(createEventDto: CreateEventDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = createEventDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events`,
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
   * @param createEventDto undefined
   */
  EventPost(createEventDto: CreateEventDto): __Observable<null> {
    return this.EventPostResponse(createEventDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param updateEventDto undefined
   */
  EventPutResponse(updateEventDto: UpdateEventDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = updateEventDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/events`,
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
   * @param updateEventDto undefined
   */
  EventPut(updateEventDto: UpdateEventDto): __Observable<null> {
    return this.EventPutResponse(updateEventDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  EventDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/events/${encodeURIComponent(id)}`,
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
  EventDelete(id: number): __Observable<null> {
    return this.EventDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EventService {
}

export { EventService }
