// Orçamento e total de despesas
let budgetValue = 0;
let totalExpensesValue = 0;

// Lista de despesas: cada item é [categoria, valor]
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// Cor do indicador de saldo: "green", "orange" ou "red"
let balanceColor = "green";

// Soma o total de despesas, mostrando o total parcial a cada iteração
for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
  console.log(`Despesas totais: ${totalExpensesValue}`);
}

// Média por despesa (0 se não houver despesas)
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

// Saldo = orçamento - despesas totais
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// Define a cor do saldo: vermelho se negativo, laranja se abaixo de 25% do orçamento, verde nos demais casos
function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// Soma os valores de uma categoria específica
function calculateCategoryExpenses(category) {
  let total = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      total += expense[1];
    }
  }
  return total;
}

// Retorna a categoria com o maior total de despesas
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = categories.map((category) => [
    category,
    calculateCategoryExpenses(category),
  ]);

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (const [category, total] of categoriesTotals) {
    if (total > largestTotal) {
      largestTotal = total;
      largestCategory = category;
    }
  }

  return largestCategory;
}

// Adiciona uma nova despesa ao array e atualiza o total
function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}
