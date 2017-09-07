
import { ItemType } from './../item-type/item-type.model';
import { Group } from './../group/group.model';


export class Invoices {
    invoiceId       :   number;
    rrNo            :   number;
    dateIssued      :   Date;
    amountPaid      :   number;
    discount?       :   number;
    status          :   number;
    customer?       :   string;
    user_id?        :   number;
    username?       :   string;
    created_at?     :   Date;
    updated_at?     :   Date;
}


export class InvoiceItems {
    invoiceItemId   :   number;
    invoiceId       :   number;
    itemTypeId      :   number;
    item_type       :   ItemType;
    groupId         :   number;
    group?          :   Group;
    currentPrice    :   number;
    qty             :   number;
    created_at?     :   Date;
    updated_at?     :   Date;
}