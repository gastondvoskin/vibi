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