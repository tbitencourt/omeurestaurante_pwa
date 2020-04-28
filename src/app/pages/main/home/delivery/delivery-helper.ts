export class DeliveryHelper {

    static toServicesFormat(item: any) {
        return Array(item.services).join(" | ");
    }

}