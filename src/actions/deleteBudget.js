import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";

export default function deleteBudget({ params }) {
    try {
        deleteItem({ key: "budgets", id: params.id })
        const associatedExpense = getAllMatchingItems({
            category: "expenses",
            key: "budgetId",
            value: params.id
        })
        associatedExpense.forEach((expense) => {
            deleteItem({
                key: "expenses",
                id: expense.id
            });
        });
        toast.success("Budget deleted successfully.")
    }
    catch (e) {
        throw new Error("There was a problem deleting your budget.")
    }
    return redirect("/");
}