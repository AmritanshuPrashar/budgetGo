//Some functions :

export const waait = () =>
	new Promise((res) => setTimeout(res, Math.random() * 2000));

const generateRandomColor = () => {
	const existingBudgetLength = fetchData("budgets")?.length ?? 0;
	return `${existingBudgetLength * 34} 65% 50%`;
};

// Local Storage function :
export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

//create Budget :

export const createBudget = ({ name, amount }) => {
	const newItem = {
		id: crypto.randomUUID(),
		name: name,
		createAt: Date.now(),
		amount: +amount,
		color: generateRandomColor(),
	};
	const existingBudgets = fetchData("budgets") ?? [];
	return localStorage.setItem(
		"budgets",
		JSON.stringify([...existingBudgets, newItem])
	);
};

//Create Expense :

export const createExpense = ({ name, amount, budgetId }) => {
	const newItem = {
		id: crypto.randomUUID(),
		name: name,
		createAt: Date.now(),
		amount: +amount,
		budgetId: budgetId,
	};
	const existingExpenses = fetchData("expenses") ?? [];
	return localStorage.setItem(
		"expenses",
		JSON.stringify([...existingExpenses, newItem])
	);
};

//delete item :
export const deleteItem = ({ key }) => {
	return localStorage.removeItem(key);
};

//Total spent by budget :

export const calculateSpentByBudget = (budgetId) => {
	const expenses = fetchData("expenses") ?? [];
	const budgetSpent = expenses.reduce((acc, expense) => {
		if (expense.budgetId !== budgetId) return acc
		return acc += expense.amount
	}, 0);
	return budgetSpent;
};

// Formating :

//Formation Percentages :

export const formatPercentage = (amt) => {
	return amt.toLocaleString(undefined, {
		style: "percent",
		minimumFractionDigits: 0
	})
}

//Formatting currency :

export const formatCurrency = (amt) => {
	return amt.toLocaleString(undefined, {
		style: "currency",
		currency: "INR",
	});
};


//Formating date :

export const formatDateToLocaleString = (epochNumber) =>
	new Date(epochNumber).toLocaleDateString();

