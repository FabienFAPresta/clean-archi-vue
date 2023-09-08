import { ref } from "vue";
import { OrderingDomainModel } from "@/modules/order/core/model/Ordering.domain-model";
import { GuestForm } from "@/modules/order/core/form/guest.form";


export const useGuestSection = () => {
    const guests = ref<OrderingDomainModel.Guest[]>([]);
    const guestForm = new GuestForm();

    function addGuest() {
        const newState = guestForm.addGuest(guests.value);
        guests.value = newState;
    }

    function removeGuest(id: string) {
        guests.value = guests.value.filter(guest => guest.id !== id);
    }

    function updateGuest(id: string, key: string, value: any) { 

    }
    function changeOrganizer() { 

    }
    function onNext()
    { 

    }
    function isSubmitable() {
        return false
    }

    return {
        addGuest,
        removeGuest,
        updateGuest,
        changeOrganizer,
        onNext,
        isSubmitable: isSubmitable(),
        guests,
    }
}