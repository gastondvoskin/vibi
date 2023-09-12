import { FormProperty } from "./forms/property"
import { FormPropertyInformation } from "./forms/property_information"
import { FormPublication } from "./forms/publication"

export interface PublicationReducer {
    publications: object[],
    form: {
        publication: FormPublication,
        propertyInformation: FormPropertyInformation
        property: FormProperty
       }
}

export interface FilterReducer {
    propertyType: string | null;
    minRooms: number | null;
    maxRooms: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    city: string | null;
  }