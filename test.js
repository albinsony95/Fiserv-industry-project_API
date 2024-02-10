const orders = [
    {
        "order_id": 1,
        "menu_item_id": 2,
        "order_quantity": 2,
        "ordering_party": 1,
        "special_instructions": null
    },
    {
        "order_id": 2,
        "menu_item_id": 5,
        "order_quantity": 1,
        "ordering_party": 1,
        "special_instructions": null
    },
    {
        "order_id": 3,
        "menu_item_id": 18,
        "order_quantity": 1,
        "ordering_party": 2,
        "special_instructions": "Sprite"
    },
    {
        "order_id": 4,
        "menu_item_id": 10,
        "order_quantity": 2,
        "ordering_party": 2,
        "special_instructions": "Regular Mayo"
    },
    {
        "order_id": 5,
        "menu_item_id": 18,
        "order_quantity": 1,
        "ordering_party": 2,
        "special_instructions": "Diet Coke"
    },
    {
        "order_id": 6,
        "menu_item_id": 6,
        "order_quantity": 1,
        "ordering_party": 3,
        "special_instructions": null
    },
    {
        "order_id": 7,
        "menu_item_id": 1,
        "order_quantity": 2,
        "ordering_party": 3,
        "special_instructions": "No Avocado"
    },
    {
        "order_id": 8,
        "menu_item_id": 19,
        "order_quantity": 2,
        "ordering_party": 3,
        "special_instructions": "Unsweet"
    },
    {
        "order_id": 9,
        "menu_item_id": 8,
        "order_quantity": 1,
        "ordering_party": 4,
        "special_instructions": null
    },
    {
        "order_id": 10,
        "menu_item_id": 4,
        "order_quantity": 2,
        "ordering_party": 4,
        "special_instructions": null
    },
    {
        "order_id": 11,
        "menu_item_id": 18,
        "order_quantity": 2,
        "ordering_party": 4,
        "special_instructions": "Sprite"
    }
];

// Use a Set to store unique ordering_party values
const uniqueOrderingParties = new Set();

// Iterate over the orders and add each ordering_party to the Set
orders.forEach(order => uniqueOrderingParties.add(order.ordering_party));

// The size of the Set represents the number of unique ordering parties
const numberOfUniqueOrderingParties = uniqueOrderingParties.size;

console.log(`Number of unique ordering parties: ${numberOfUniqueOrderingParties}`);