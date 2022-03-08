import OrderPayloadBuilder from "./orderPayloadBuilder";
import { Sender } from "../models/sender";
import { Recipient } from "../models/recipient";

export default class OrderPayload {
    private quotationId: string | undefined;

    private sender: Sender | undefined;

    private recipients: Recipient[] | undefined;

    private fleetOption?: string;

    private isPODEnabled?: boolean;

    private isRecipientSmsEnabled?: boolean;

    private paymentMethod?: string;

    private partner?: string;

    constructor(opb: OrderPayloadBuilder) {
        if (opb.quotationId === undefined) {
            throw new Error("QuotationID cannot be empty");
        }
        if (opb.sender === undefined) {
            throw new Error("Sender cannot be empty");
        }
        if (opb.recipients === undefined) {
            throw new Error("recipients cannot be empty");
        }
        this.quotationId = opb.quotationId;
        this.sender = opb.sender;
        this.recipients = opb.recipients;
        this.fleetOption = opb.fleetOption;
        this.isPODEnabled = opb.isPODEnabled;
        this.isRecipientSmsEnabled = opb.isRecipientSmsEnabled;
        this.paymentMethod = opb.paymentMethod;
        this.partner = opb.partner;
    }
}
