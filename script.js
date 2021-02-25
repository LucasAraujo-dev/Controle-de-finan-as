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

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "21/01/2021",
  },
  {
    id: 2,
    description: "Criação de WebSite",
    amount: 500000,
    date: "21/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "21/01/2021",
  },
  {
    id: 4,
    description: "app",
    amount: 20000,
    date: "21/01/2021",
  },
];

const Transaction = {
  incomes() {},
  expenses() {},
  total() {},
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

    const Utils = {
        formatCurrency(value) {
            const signal = Number(value) < 0 ? "-" : ""
        }
    }

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
             <td class="description">${transaction.description}</td>
             <td class="${CSSclass}">${transaction.amount}</td>
             <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação" /></td>
        `;
    return html;
  },
};

transactions.forEach(function (transactions) {
  DOM.addTransaction(transactions);
});


