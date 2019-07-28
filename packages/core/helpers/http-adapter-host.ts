import { AbstractHttpAdapter } from '../adapters/http-adapter';

/**
 * Defines the `HttpAdapterHost` object.  This object wraps the underlying
 * platform-specific `HttpAdapter`.  The `HttpAdapter` is a wrapper around the underlying
 * native HTTP server library (e.g., Express).  The `HttpAdapterHost` object
 * provides methods to `get` and `set` the underlying HttpAdapter.
 *
 * @see [Http adapter](https://docs.nestjs.com/faq/http-adapter)
 *
 * @publicApi
 */
export class HttpAdapterHost<
  T extends AbstractHttpAdapter = AbstractHttpAdapter
> {
  private _httpAdapter: T;

  /**
   * Setter accessor for the underlying `HttpAdapter`
   *
   * @param httpAdapter reference to the `HttpAdapter` to be set
   */
  set httpAdapter(httpAdapter: T) {
    this._httpAdapter = httpAdapter;
  }

  /**
   * Getter accessor for the underlying `HttpAdapter`
   *
   * @example
   * `const httpAdapter = adapterHost.httpAdapter;`
   */
  get httpAdapter(): T | undefined {
    return this._httpAdapter;
  }
}
