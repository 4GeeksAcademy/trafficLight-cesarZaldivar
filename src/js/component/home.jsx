import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[selectColor, setSelectColor] = useState("bg-warning");
	

	return (
		<div className="container traffic-light mt-5 bg-dark p-1">
				<div onClick = {() => setSelectColor("bg-danger")}
				className={"bg-danger red " + (selectColor === "bg-danger" ? " glow ": " ")}></div>
				<div onClick = {() => setSelectColor("bg-warning")}
				className={"bg-warning yellow " + (selectColor === "bg-warning" ? " glow ": " ")}></div>
				<div onClick = {() => setSelectColor("bg-success")}
				className={"bg-success green " + (selectColor === "bg-success" ? " glow ": " ")}></div>
		</div>
	);
};

export default Home;
