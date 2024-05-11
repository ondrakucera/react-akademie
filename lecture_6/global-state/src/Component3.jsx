import { Component4 } from "./Component4";
import "./Component3.css";

export const Component3 = ({ user }) => (
	<div className="Component3">
		<p>Začátek komponenty Component3.</p>
		<Component4 user={user} />
		<p>Konec komponenty Component3.</p>
	</div>
);
