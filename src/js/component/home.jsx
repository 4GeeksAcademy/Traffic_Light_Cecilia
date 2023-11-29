import React, { useState } from "react";

//create your first component
const Home = () => {
	const [red, setRed] = useState("secondary")
	const [yellow, setYellow] = useState("secondary")
	const [green, setGreen] = useState("secondary")

	// Prende el semaforo en rojo
	function rojo (){
		setRed("danger")
		setGreen("secondary")
		setYellow("secondary")
	}

	// Prende el semaforo en amarillo
	function amarillo (){
		setRed("secondary")
		setGreen("secondary")
		setYellow("warning")
	}

	// Prende el semaforo en verde
	function verde (){
		setRed("secondary")
		setGreen("success")
		setYellow("secondary")
	}

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Semáforo</h1>
			<br />
			<div className="">
				{/* Rojo */}
				<div className={"bg-" + red + " rounded-circle"}
					style={{ height: "100px", width: "100px", marginLeft: "600px", marginBottom: "7px" }}
					onClick={rojo}>
				</div>

				{/* Amarillo */}
				<div className={"bg-" + yellow + " rounded-circle"}
					style={{ height: "100px", width: "100px", marginLeft: "600px", marginBottom: "7px" }}
					onClick={amarillo}>
				</div>

				{/* Verde */}
				<div className={"bg-" + green + " rounded-circle"}
					style={{ height: "100px", width: "100px", marginLeft: "600px", marginBottom: "7px" }}
					onClick={verde}>
				</div>
			</div>

			<div>
				<br />

				Made by 🩷 Cecilia Perdomo, with 💛 love!
			</div>

		</div>
	);
};

export default Home;
