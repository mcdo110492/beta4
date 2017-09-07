

export class Pos {
    invoiceId       :   number;
    rrNo            :   number;
    dateIssued      :   Date;
    amountPaid      :   number;
    discount        :   number;
    status          :   number;
    user_id         :   number;
    items           :   Items[];
    created_at?     :   Date;
    updated_at?     :   Date;
}


class Items {
    invoiceItemId       :   number;
    invoiceId           :   number;
    itemTypeId          :   number;
    groupId             :   number;
    currentPrice        :   number;
    qty                 :   number;
    created_at?         :   Date;
    updated_at?         :   Date;
}