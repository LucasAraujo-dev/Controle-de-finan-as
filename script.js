const Modal = {
    open() {
        //abrir modal
        //adicionar classe active ao modal
        document.querySelector(".modal-overlay").classList.add("active");
    },
    close() {
        //remover a classe acttive do modal
        document.querySelector(".modal-overlay").classList.remove("active");
    },
};

const transactions = [{
        description: "Luz",
        amount: -50000,
        date: "21/01/2021",
    },
    {
        description: "Criação de WebSite",
        amount: 500000,
        date: "21/01/2021",
    },
    {
        description: "Internet",
        amount: -20000,
        date: "21/01/2021",
    },
    {
        description: "app",
        amount: 200000,
        date: "21/01/2021",
    },
];

const Transaction = {
    all: transactions,

    add(transactions) {
        Transaction.all.push(transactions);

        App.reload();
    },
    remove(index) {
        Transaction.all.splice(index, 1);
        App.reload();
    },
    incomes() {
        let income = 0;
        Transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        });

        return income;
    },
    expenses() {
        let expense = 0;
        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        });
        return expense;
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
    },
};

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
             <td class="description">${transaction.description}</td>
             <td class="${CSSclass}">${amount}</td>
             <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação" /></td>
        `;
        return html;
    },

    updatBalance() {
        document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
            Transaction.incomes()
        );
        document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
            Transaction.expenses()
        );
        document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
            Transaction.total()
        );
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = "";
    },
};

const Utils = {
    formatAmount(value) {
        value = Number(value) * 100;
    },

    formatDate(date) {
        const splitedDate = date.split("-")
        return `${splitedDate [2]}/${splitedDate[1]}/${splitedDate[0]}`
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });

        return signal + value;
    },
};

const Form = {
    description: document.querySelector("input#description"),
    amount: document.querySelector("input#amount"),
    date: document.querySelector("input#date"),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        };
    },

    validateFields() {
        const { description, amount, date } = Form.getValues();

        if (
            description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() === ""
        ) {
            throw new Error("Deu erro");
        }
    },
    formatData() {
        let { description, amount, date } = Form.getValues();
        amount = Utils.formatAmount(amount);
        date = Utils.formatDate(date);

        return {
            description,
            amount,
            date
        }
    },

    saveTransaction(transaction) {
        transaction.add(transaction)
    },

    clearField() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },
    submit(event) {
        event.preventDefault();
        try {
            Form.validateFields()
            const transaction = Form.formatData();
            Transaction.add(transaction)
            Form.saveTransaction()
            Form.clearField()
            Modal.close()

        } catch (error) {
            alert(error.message);
        }
    },
};

const App = {
    init() {
        transactions.forEach((transactions) => {
            DOM.addTransaction(transactions);
        });

        DOM.updatBalance();
    },

    reload() {
        DOM.clearTransactions();
        App.init();
    },
};

App.init();