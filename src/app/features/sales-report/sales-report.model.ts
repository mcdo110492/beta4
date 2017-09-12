
import { ServicesType } from './../services-type/services-type.model';
import { ServicesCategories } from './../services-categories/services-categories.model';

export class SalesIndividual {
    items       :   ServicesType;
    totalCost   :   number;
}

export class SalesByCategory {
    items       :   ServicesCategories;
    totalCost   :   number;
}