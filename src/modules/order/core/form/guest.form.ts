import { OrderingDomainModel } from "@/modules/order/core/model/Ordering.domain-model";

export class GuestForm {
    addGuest(state: OrderingDomainModel.Guest[]) {
        return [
            ...state,
            {
                id: (state.length + 1).toString(),
                firstName: "John",
                lastName: "Doe",
                age: 0
            }
        ];
    }
}