import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import Intro from "../components/Intro";
// Helper functions :
import { createBudget, fetchData, waait } from "../helpers";

// Loader :

export function dashBoardLoader() {
	const userName = fetchData("userName");
	const budgets = fetchData("budgets");
	return { userName, budgets };
}

export async function dashboardAction({ request }) {
	await waait();

	const data = await request.formData();
	const { _action, ...values } = Object.fromEntries(data);

	if (_action === "newUser") {
		try {
			localStorage.setItem("userName", JSON.stringify(values.userName));
			return toast.success(`Welcome ${values.userName}`);
		} catch (err) {
			throw new Error("There was a problem creating your account.");
		}
	}

	if (_action === "createBudget") {
		try {
			createBudget({
				name: values.newBudget,
				amount: values.newBudgetAmount,
			});
			return toast.success("Budget Created");
		} catch (e) {
			throw new Error("There was a problem creating your budget.");
		}
	}
}

const Dashboard = () => {
	const { userName, budgets } = useLoaderData();
	return (
		<>
			{userName ? (
				<div className="dashboard">
					<h1>
						Weclome back, <span className="accent">{userName}</span>
					</h1>
					<div className="grid-sm">
						<div className="grid-lg">
							<div className="flex-lg">
								<AddBudgetForm />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Intro />
			)}
		</>
	);
};

export default Dashboard;
