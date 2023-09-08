<script setup lang="ts">
import { useGuestSection } from './use-guest-section';

const presenter = useGuestSection();
</script>

<template>
    <div class="guestSection">
        <h5>Invités</h5>
        <div class="guestSection-grid">

            <div class="guestSection-guest__row" v-for="guest in presenter.guests.value">
                <form :key="guest.id">
                    <label for="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" :value="guest.firstName"/>
                </form>
                <form>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" :value="guest.lastName"/>
                </form>
                <form>
                    <label for="age">Age</label>
                    <input type="text" name="age" id="age" :value="guest.age"/>
                </form>
                <button @click="() => presenter.removeGuest(guest.id)">Supprimer</button>
            </div>

            <div class="guestSection-guest__row">
                <button @click="presenter.addGuest">Ajouter</button>
                <button @click="presenter.onNext">Suivant</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.guestSection {
    margin-top: 2px;
}

.guestSection-grid {
    display: grid;
    padding-top: 2px;
    gap: 4px;
}

.guestSection-guest__row {
    display: flex;
    gap: 10px;
}
</style>