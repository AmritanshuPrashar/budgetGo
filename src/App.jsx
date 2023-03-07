import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { logoutAction } from "./actions/logout";
import Main, { mainLoader } from "./layouts/Main";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes :

import Dashboard, { dashboardAction, dashBoardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		loader: mainLoader,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Dashboard />,
				loader: dashBoardLoader,
				action :dashboardAction,
				errorElement: <Error />,
			},
			{
				path: "expenses",
				element: <ExpensesPage />,
				loader: expensesLoader,
				
			},
			{
				path: "logout",
				action: logoutAction,
			},
		],
	},
]);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
			<ToastContainer />
		</div>
	);
}

export default App;
