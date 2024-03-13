export type UserAgen = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
};

export type DocumentData = {
  id: string;
  name: string;
  amount: number;
  size: number | null;
  status: 'downloaded' | 'pending';
  type: FILES_TYPE;
};

export enum TABS_POSITION {
  ALL_FILES = "all_files",
  ALL_DOCUMENTS = "all_documents",
  ALL_SOFTWARES = "all_softwares",
  ALL_EXTRAS = "all_extras"
};

export enum FILES_TYPE {
  PDF = ".pdf",
  DOC = ".docx",
  EXE = ".exe",
  PPT = ".ppt",
  TXT = ".txt",
  ZIP = ".zip",
  DWG = ".dwg",
  DXF = ".dxf",
  GEO = ".geo",
  ISO = ".iso",
  DATA = ".data",
  JPG = ".jpeg",
  KML = ".kml"
}