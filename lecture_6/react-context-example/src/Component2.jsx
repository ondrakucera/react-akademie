import { Component3 } from "./Component3";
import "./Component2.css";

export const Component2 = () => (
	<div className="Component2">
		<p>Začátek komponenty Component2.</p>
		<Component3 />
		<p>Konec komponenty Component2.</p>
	</div>
);
