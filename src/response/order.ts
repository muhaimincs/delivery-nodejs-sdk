import { PriceBreakdown } from "../models/priceBreakdown";
import { Stop } from "../models/stop";
import { Measurement } from "../models/measurement";

export interface IOrder {
    id: string;
    quotationId: string;
    priceBreakdown: PriceBreakdown;
    driverId: string;
    shareLink: string;
    status: string;
    distance: Measurement;
    stops: Stop[];
}
