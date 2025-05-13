import { lide } from "./lide.js";
import { UserDetail } from "./UserDetail.jsx";
import { Fragment } from "react";

export const UserList = () => {
	return (
		<>
			<h1>List of users</h1>

			{lide.map((clovek, index) => {
				// Značně umělý příklad použití komponenty Fragment místo dosud používaného <></>.
				// Většinou není potřeba, ale je dobré vědět, že taková možnost je.
				// Všimněte si, že na Fragment lze použit prop key. To bohužel u <></> nelze.
				return (
					<Fragment key={clovek.id}>
						<div>
							<span>Člověk číslo: {index + 1}</span>
							<UserDetail firstName={clovek.jmeno} lastName={clovek.prijmeni} age={clovek.vek} />
						</div>
					</Fragment>
				);
			})}
		</>
	);
};
