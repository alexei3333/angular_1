export interface IAjaxResponse {
  // [x: string]: any;
  success?: boolean;
  err?: string | null;
}

export interface IAjaxSearchResponse extends IAjaxResponse {
  Items?: any;
  TotalItems?: number;
}
export interface IAjaxSearchResponseLw extends IAjaxResponse {
  items?: any[];
  totalItems?: number;
}
export interface IAjaxResponseTyped<T> extends IAjaxResponse {
  items?: T[];
  totalItems?: number;
}
