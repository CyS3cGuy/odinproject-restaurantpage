const pizzas = [];
const salads = [];
const starters = [];

class Food {
    #name;
    #description;
    #price;
    #priceString;
    #label;
    #color; 

    constructor(name, description, price, label = null, redOrGray = null) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#label = label;
        this.#color = label && (redOrGray.toLowerCase() === "red" || redOrGray.toLowerCase() === "gray") ? redOrGray.toLowerCase() : null;  

        this.#priceString = `\$${price.toString().split(".").at(0)}.${price.toString().split(".").at(-1).padEnd(2, "0")}`;
        
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get priceString() {
        return this.#priceString;
    }

    get label() {
        return this.#label;
    }

    get color() {
        return this.#color; 
    }
}

class Pizza extends Food {
    constructor(name, description, price, label, redOrGray) {
        super(name, description, price, label, redOrGray);
        pizzas.push(this);
    }
}

class Salad extends Food {
    constructor(name, description, price, label, redOrGray) {
        super(name, description, price, label, redOrGray);
        salads.push(this);
    }
}

class Starter extends Food {
    constructor(name, description, price, label, redOrGray) {
        super(name, description, price, label, redOrGray); 
        starters.push(this);
    }
}

// Pizza
new Pizza("Margherita", "Fresh tomatoes, fresh mozzarella, fresh basil", 12.5, "Hot!", "red"); 
new Pizza("Formaggio", "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)", 15.5, "New", "gray"); 
new Pizza("Meat Town", "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken", 20.5);


// Salad
new Salad("Lasagne", "Special sauce, mozzarella, parmesan, ground beef", 13.5, "Popular", "red");
new Salad("Ravioli", "Ravioli filled with cheese", 14.5);

// Starter
new Starter("Today's Soup", "Ask the waiter", 5.5, "Seasonal", "gray");
new Starter("Bruschetta", "Bread with pesto, tomatoes, onion, garlic", 8.5);

export { pizzas, salads, starters }; 
