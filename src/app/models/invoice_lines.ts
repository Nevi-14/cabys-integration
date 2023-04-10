export class InvoiceLines {
    constructor(
        public id: number,
        public iD_INVOICE: number,
        public iD_PRODUCT: number,
        public description: string,
        public price: number,
        public units: number,
        public tax_id: number,
        public taX_DESCRIPTION: string,
        public taX_AMOUNT: number,
        public suB_TOTAL: number,
        public total: number
    ) { }
}