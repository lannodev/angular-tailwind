import { Injectable, isDevMode } from '@angular/core';
import { SettingsModel } from './settings.model';
import { HttpResponseStatusCode } from '../configs/http-response-code';

/**
 * Helper to work with settings
 */
@Injectable({ providedIn: 'root' })
export class SettingsHelper {
  /**
   * Predefined settings for the app loaded using json data
   * @see assets\config\config.json
   */
  static settings: SettingsModel;

  /**
   * Loads json settings before platfrom loaded
   */
  static load(): Promise<void> {
    return new Promise((resolve, reject) => {
      const mode = !isDevMode() ? '.prod' : '';
      const URL = `assets/config/config${mode}.json`;
      const xhr = new XMLHttpRequest();
      xhr.overrideMimeType('application/json');
      xhr.open('GET', URL, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === HttpResponseStatusCode.OK) {
            this.settings = JSON.parse(xhr.responseText);
            resolve();
          } else {
            reject(`Could not load file '${URL}': ${xhr.status}`);
          }
        }
      };
      xhr.send(null);
    });
  }
}
