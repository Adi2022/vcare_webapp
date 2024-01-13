import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { motion } from "framer-motion";

import data from "../data.json";
console.log(data);
const StyledCard = styled(Card)(({ theme }) => ({
	// backgroundColor: "#f0f0f0",
	color: "black",
}));

const HomeDiseases = () => {
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const headingVariants = {
		visible: {
			y: [0, -10, 0],
			transition: { repeat: Infinity, duration: 1.5 },
		},
	};
	const navigate = useNavigate();
	const handleData = (idx) => {
		navigate(`/disease/${idx}`);
	};

	return (
		<>
			<Typography
				variant="h4"
				component="h1"
				align="center"
				marginTop={"4rem"}
				fontWeight={"bold"}
				style={{ color: "#ed6c02" }}
			>
				Homeopathic Treatment for Major Chronic diseases
			</Typography>

			<div className="row">
				<div className="card-grid">
					{data.map((item, id) => (
						<div className="card" key={id} variants={cardVariants} onClick={() => handleData(item.id)}>
							<CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "150px",
										cursor: "pointer",
									}}
								>
									<motion.img
										src={item.image}
										whileHover={{
											scale: 1.1,
											transition: { duration: 1 },
										}}
										alt={`disease${id + 1}`}
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
											borderRadius: "0.5rem",
										}}
									/>
								</div>
								<h5 variants={headingVariants} initial="hidden" animate="visible" className="card-content">
									{item.title}
								</h5>
								<Typography variant="body2" color="textSecondary" component="p" textAlign="center">
									{item.content}
								</Typography>
							</CardContent>
						</div>
					))}
				</div>
			</div>

			<style>
				{`
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
		.card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
            gap: 4rem;
          }
        a{
          color:black;
        }
        .card-content h2{
          color:black;
        }

        .card {
			display: flex;
            flex-direction: column; /* Display content in a column */
            align-items: center; /* Center content horizontally */
            justify-content: center; /* Center content vertically */
            background-color: #f2f2f2;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 1rem; /* Add padding for better spacing */
            text-align: center; /* Center text content */
         
    
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .card-content {
          margin-top: 1rem;
          text-align: center;
        }

        .card h5 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color:black
        }

        .card p {
          font-size: 0.9rem;
          color: black;
        }

        @media (max-width: 768px) {
			.card-grid {
			  grid-template-columns: repeat(1, 1fr);
			}
		  
			.card h5 {
			  font-size: 0.8rem;
			}
		  
			.card p {
			  font-size: 0.8rem;
			}
		  }
		  
		  @media (min-width:1000px) {
			.card-grid {
			  grid-template-columns: repeat(3, 1fr);
			}
		  
			.card h5 {
			  font-size: 1rem; /* Adjust as needed */
			}
		  
			.card p {
			  font-size: 0.9rem; /* Adjust as needed */
			}
		  }
		  
        `}
			</style>
		</>
	);
};

export default HomeDiseases;
