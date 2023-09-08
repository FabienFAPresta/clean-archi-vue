import { ref } from "vue";

type Guest = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
}

export const useGuestSection = () => {
    const guests = ref<Guest[]>([]);

    function addGuest() {
        guests.value.push({
            id: Math.random().toString(),
            firstName: "",
            lastName: "",
            age: 0
        });
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