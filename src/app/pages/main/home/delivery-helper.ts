export class DeliveryHelper {

    toServicesFormat(item: any) {
        return Array(item.services).join(" | ");
    }

}