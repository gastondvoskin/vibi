import { FormProperty } from "./forms/property"
import { FormPropertyInformation } from "./forms/property_information"
import { FormPublication } from "./forms/publication"

export interface PublicationReducer {
    publications: object[],
    totalPages:number,
    form: {
        publication: FormPublication,
        propertyInformation: FormPropertyInformation
        property: FormProperty
       }
}

export interface FilterReducer {
    propertyType: string | null;
    rooms: number | null;
    maxPrice: number | null;
    city: string | null;
  }