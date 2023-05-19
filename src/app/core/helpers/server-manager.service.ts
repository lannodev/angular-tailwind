import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { WindowService } from "./window.service";
import { Observable, map, shareReplay } from "rxjs";
import { SettingsHelper } from "./settings.helper";

Injectable()
export class ServerManagerService{
 
  baseUrl: string;

  constructor(private http: HttpClient, private $window: WindowService) {
    this.baseUrl = this.getBaseUrl(SettingsHelper.settings.endpoint);
  }

  post<T>(
    path: string,
    values?: any,
    headers?: HttpHeaders
  ): Observable<T> {
    //this.ngxUILoader.start();
    const url = this.baseUrl + path;
    return this.http.post<T>(url, values, { headers }).pipe(
      map((res) => {
      //  this.ngxUILoader.stop();
      //  return this.caseChanger.toCamel(res) as T;
      return res as T;
      })
    );
  }

  get<T>(path: string, values?: HttpParams): Observable<T> {
    //this.ngxUILoader.start();
    const url = this.baseUrl + path;
    return this.http.get<T>(url, { params: values }).pipe(
      map((res) => {        
      //  this.ngxUILoader.stop();
      //return this.caseChanger.toCamel(res) as T;
        return res as T;
      }),
      shareReplay(1)
    );
  }

  /**
   *
   * suffix - SettingsHelper.settings.endpoint or SettingsHelper.settings.domain
   */
  public getBaseUrl(suffix: string): string {
    const appName = this.$window.getApplicationName();
    const port = this.$window.getPort();
    let baseUrl = isDevMode()
      ? ''
      : `${this.$window.getProtocolAndHostName()}${port ? ':' + port : ''}${
          appName.length == 0 ? '' : '/' + appName
        }`;
    baseUrl += suffix;
    return baseUrl;
  }
}