export interface PropertyAddress {
  propertyAddress_Id: string;
  street: string;
  district: string;
  city: string;
  urbanization: string;
  floor: number;
  property_type: string;
  property_Id_Reference: string;
}

export interface PropertyDetail {
  propertyDetail_Id: string;
  luxury: boolean;
  terrace: boolean;
  lobby: boolean;
  balcony: boolean;
  air_conditioning: boolean;
  gym: boolean;
  courtyard: boolean;
  barbecue: boolean;
  coworking: boolean;
  natural_gas: boolean;
  property_Id_Reference: string;
}

export interface PropertyInformation {
  propertyInformation_Id: string;
  construction_year: number;
  m2_indoor: number;
  m2_total: number;
  rooms: number;
  baths: number;
  half_bath: number;
  garage: number;
  property_Id_Reference: string;
}

export interface Property {
  property_Id: string;
  condition: string;
  previous_price: number;
  current_price: number;
  description: string;
  urls_photos: string[];
  urls_videos: string[];
  publication_Id_Reference: string;
  propertyAddress: PropertyAddress;
  propertyDetail: PropertyDetail;
  propertyInformation: PropertyInformation;
}

export interface Publication {
  publication_Id: string;
  plan: string;
  pro_photos: boolean;
  pro_video: boolean;
  pro_sign: boolean;
  pro_quoted: boolean;
  pro_analysis: boolean;
  pro_contracts: boolean;
  pro_tour: boolean;
  isActive: boolean;
  user_Id_Reference: string;
  property: Property;
}
