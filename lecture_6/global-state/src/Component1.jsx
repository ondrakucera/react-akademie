import { Component2 } from "./Component2";
import "./Component1.css";

export const Component1 = ({ user }) => (
	<div className="Component1">
		<p>Začátek komponenty Component1.</p>
		<Component2 user={user} />
		<p>Konec komponenty Component1.</p>
	</div>
);
