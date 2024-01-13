import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Diseases from "../pages/Diseases";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import MakeAppointment from "../components/MakeAppointment";
import Blogs from "../pages/Blogs";
import Services from "../pages/Services";
import ConsultForm from "../components/ConsultForm";
import SingleDisease from "../components/SingleDisease";
const Routing = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/diseases" element={<Diseases />} />
					<Route path="/about" element={<About />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/appointment" element={<ConsultForm />} />
					<Route path="/disease/:id" element={<SingleDisease />} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default Routing;
