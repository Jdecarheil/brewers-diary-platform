import { Button } from "@/components/ui/button";
import { useAuthenticated } from "@nhost/react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
	const navigate = useNavigate();
	const user = useAuthenticated();

	const handleStart = () => {
		console.log("landing page is logged", user);
		if (user) {
			navigate("/app");
		} else {
			navigate("/auth/login");
		}
	};

	return (
		<>
			<Button onClick={handleStart}>Click</Button>
		</>
	);
};
