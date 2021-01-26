export interface IAjaxModel {
  fetching?: boolean;
  fetched?: boolean;
  error?: string | null;
}
export interface IAjaxModelData extends IAjaxModel {
  data?: any[];
}
export interface IAjaxModelTyped<T> extends IAjaxModel {
  items?: T[];
  totalItems?: number;
}
