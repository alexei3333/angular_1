export interface ISimpleUiDto {
  id: number;
  name: string;
  cnt: number;
}

export interface IIdNameExt {
  id: string | number;
  name?: string | number | null;
}

export interface ISimpleUiStringDto {
  id: string;
  name: string;
  cnt: number;
}

export interface ISimpleDtoOrdered extends ISimpleDtoBase {
  ViewOrder: number;
}

export interface ISimpleDtoOrderedLw extends ISimpleDtoBaseLw {
  viewOrder: number;
}
export interface ISimpleDto extends ISimpleDtoOrdered {
  Checked: boolean;
  Cnt: number;
}
export interface ISimpleDtoLw extends ISimpleDtoOrderedLw {
  checked: boolean;
  cnt: number;
}

export interface IReactSimpleDtoStr {
  id: string;
  name: string;
}

export interface ISimpleDtoBase {
  Id: number;
  Title: string;
}

export interface ISimpleDtoBaseLw {
  id: number;
  title: string;
}

export interface ISimpleDtoCntLw extends ISimpleDtoBaseLw {
  cnt: number;
}
export interface ISimpleDtoCnt extends ISimpleDtoBase {
  Cnt: number;
}

export interface ISimpleDtoCheckbox extends ISimpleDto {
  MainItem: boolean;
}

export interface ISimpleDtoCheckboxLw extends ISimpleDtoLw {
  mainItem: boolean;
}
export interface ISimpleDtoCntParent extends ISimpleDtoCnt {
  ParentId: number;
}

export interface ISimpleDtoCntParentLw extends ISimpleDtoCntLw {
  parentId: number;
}
export interface ISimpleUiDtoParent extends ISimpleUiDto {
  parentId: number;
}

export interface IIdNameAllowNumber {
  id: number;
  name: string | number;
}

export interface IIdName {
  parentName?: string;
  id: number;
  name: string;
}

export interface IIdNameSelected extends IIdName {
  selected?: boolean;
}

export interface IApiPhoto {
  url: string;
  thumbnailUrl: string;
  title?: string | null;
  order: number;
}

export interface IIdNameTyped<T> {
  id: T;
  name: string;
}
export interface IIdNameOrder extends IIdNameSelected {
  order: number;
}
export interface IIdTitle {
  Id: number;
  Title: string;
}

export interface IIdTitleLw {
  id: number;
  title: string;
}
