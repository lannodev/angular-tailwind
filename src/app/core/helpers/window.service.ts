import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window-providers';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(@Inject(WINDOW) private window: Window) {}

  /**
   *
   * e.g.: https://www.typescriptlang.org
   * @returns 'www.typescriptlang.org'
   */
  getHostname(): string {
    return this.window.location.hostname;
  }

  /**
   *
   * e.g.: https://www.typescriptlang.org
   * @returns 'https:'
   */
  getProtocol(): string {
    return this.window.location.protocol;
  }

  /**
   *
   * e.g.: https://www.typescriptlang.org
   * @returns 'https://www.typescriptlang.org'
   */
  getProtocolAndHostName(): string {
    return `${this.getProtocol()}//${this.getHostname()}`;
  }

  /**
   *
   * e.g.: https://localhost/eharmony
   * @returns 'eharmony'
   */
  getApplicationName(): string {
    return this.window.location.pathname.substring(1).split('/')[0];
  }

  /**
   *
   * e.g.: https://localhost:56984/eharmony
   * @returns '56984'
   */
  getPort(): string {
    return this.window.location.port;
  }
}
