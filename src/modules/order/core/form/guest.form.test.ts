import { describe, it, expect } from '@jest/globals';
import { GuestForm } from './guest.form';
import { OrderingDomainModel } from '../model/Ordering.domain-model';

describe("Add a guest", () => {
    it('should add a guest', () => {
        const form = new GuestForm();
        const initialState: OrderingDomainModel.Guest[] = [];
        const state = form.addGuest(initialState);
        expect(state).toEqual([{
            id: "1",
            firstName: "John",
            lastName: "Doe",
            age: 0
        }])
    })

    it('should add a guest when there\'s already one', () => {
        const form = new GuestForm();
        const initialState: OrderingDomainModel.Guest[] = [{
            id: "1",
            firstName: "John",
            lastName: "Doe",
            age: 0
        }];
        const state = form.addGuest(initialState);
        expect(state).toEqual([{
            id: "1",
            firstName: "John",
            lastName: "Doe",
            age: 0
        },
        {
            id: "2",
            firstName: "John",
            lastName: "Doe",
            age: 0
        }
        ])
    })

    it('should add a guest when there\'s already two', () => {
        const form = new GuestForm();
        const initialState: OrderingDomainModel.Guest[] = [
            {
                id: "1",
                firstName: "John",
                lastName: "Doe",
                age: 0
            },
            {
                id: "2",
                firstName: "John",
                lastName: "Doe",
                age: 0
            }
        ];
        
        const state = form.addGuest(initialState);
        expect(state).toEqual([
            {
                id: "1",
                firstName: "John",
                lastName: "Doe",
                age: 0
            },
            {
                id: "2",
                firstName: "John",
                lastName: "Doe",
                age: 0
            },
            {
                id: "3",
                firstName: "John",
                lastName: "Doe",
                age: 0
            }
        ])
    })
})