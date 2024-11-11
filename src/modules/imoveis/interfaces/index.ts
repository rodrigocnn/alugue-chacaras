export interface Imovel {
  id?: string;
  name: string;
  description: string;
  location: string;
  googleMapsUrl: string;
  cityId: string;
  imgFeature: string;
  value: string;
}

export interface InputImovel extends Imovel {
  imagemDestaque: File;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  contact: string;
  whatsapp?: string | null;
}
