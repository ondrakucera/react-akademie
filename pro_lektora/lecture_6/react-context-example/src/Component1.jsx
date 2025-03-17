import { Component2 } from "./Component2";
import "./Component1.css";

export const Component1 = () => (
	<div className="Component1">
		<p>Začátek komponenty Component1.</p>
		<Component2 />
		<p>Konec komponenty Component1.</p>
	</div>
);
