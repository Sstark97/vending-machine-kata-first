import {VendingMachine} from "../core/VendingMachine";
import {Coin} from "../core/Coin";

describe("VendingMachine should", () => {
    it("display an initial amount", () => {
        const vendingMachine = new VendingMachine();

        const initialAmount = vendingMachine.totalAmount();

        expect(initialAmount).toBe(0.0)
    });

    it.each([
        {coin: Coin.NICKEL, expectedAmount: 0.05, coinName: "nickels"},
        {coin: Coin.DIME, expectedAmount: 0.1, coinName: "dimes"},
        {coin: Coin.QUARTER, expectedAmount: 0.25, coinName: "quarter" },
    ])("insert a valid coin $coinName", ({ coin, expectedAmount}) => {
        const vendingMachine = new VendingMachine();

        vendingMachine.insertCoin(coin);

        expect(vendingMachine.totalAmount()).toBe(expectedAmount)
    });

})