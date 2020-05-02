import { Delivery } from 'app/entities/delivery';

export class DeliveryHelper {

    static showServicesList(d: Delivery) {
        if(!d)
            return null;
        return d.services.join(" | ");
    }

}