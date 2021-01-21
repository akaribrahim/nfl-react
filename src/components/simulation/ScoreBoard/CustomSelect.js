import React, {useEffect} from "react";
import Select, {components} from "react-select";
import { changeHome, changeAway, fetchTeams, changeLoadingStatus } from "../../../redux/actions/ActionCreators";
import { useDispatch } from "react-redux";
import './ScoreBoard.css'

import ari from "../../../shared/images/icons/arizona_cardinals.png";
import atl from "../../../shared/images/icons/atlanta_falcons.png";
import car from "../../../shared/images/icons/carolina_panthers.png";
import chi from "../../../shared/images/icons/chicago_bears.png";
import dal from "../../../shared/images/icons/dallas_cowboys.png";
import det from "../../../shared/images/icons/detroit_lions.png";
import gb from "../../../shared/images/icons/greenbay_packers.png";
import la from "../../../shared/images/icons/la_rams.png";
import min from "../../../shared/images/icons/minnesota_vikings.png";
import no from "../../../shared/images/icons/neworleans_saints.png";
import nyg from "../../../shared/images/icons/ny_giants.png";
import phi from "../../../shared/images/icons/phil_eagles.png";
import sf from "../../../shared/images/icons/sanfrancisco.png";
import sea from "../../../shared/images/icons/seattle_seahawks.png";
import tb from "../../../shared/images/icons/tampabay.png";
import was from "../../../shared/images/icons/washington.png";
import bal from "../../../shared/images/icons/baltimore_ravens.png";
import buf from "../../../shared/images/icons/buffalo_bills.png";
import cin from "../../../shared/images/icons/cincinnati_bengals.png";
import cle from "../../../shared/images/icons/cleveland_browns.png";
import den from "../../../shared/images/icons/denver_broncos.png";
import hou from "../../../shared/images/icons/houston_texans.png";
import ind from "../../../shared/images/icons/indianapolis_colts.png";
import jax from "../../../shared/images/icons/jacksonville_jaguars.png";
import kc from "../../../shared/images/icons/kansascity_chiefs.png";
import oak from "../../../shared/images/icons/oakland_raiders.png";
import lac from "../../../shared/images/icons/losangeles_chargers.png";
import mia from "../../../shared/images/icons/miami_dolphins.png";
import ne from "../../../shared/images/icons/newengland_patriots.png";
import nyj from "../../../shared/images/icons/newyork_jets.png";
import pit from "../../../shared/images/icons/pittsburgh_steelers.png";
import ten from "../../../shared/images/icons/tennessee_titans.png";

const CustomSelect = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTeams())
	}, [dispatch])

	const homeOptions = [
		{ value: "ARI", label: "Arizona Cardinals", color: "#A43E55", icon: ari },
		{ value: "ATL", label: "Atlanta Falcons", color: "#B53E52", icon: atl },
		{ value: "CAR", label: "Carolina Panthers", color: "#0185CA", icon: car },
		{ value: "CHI", label: "Chicago Bears", color: "#0B1629", icon: chi },
		{ value: "DAL", label: "Dallas Cowboys", color: "#012244", icon: dal },
		{ value: "DET", label: "Detroit Lions", color: "#0076B4", icon: det },
		{ value: "GB", label: "Green Bay Packers", color: "#3B4E4A", icon: gb },
		{ value: "LA", label: "Los Angeles Rams", color: "#1E4EA2", icon: la },
		{ value: "MIN", label: "Minnesota Vikings", color: "#532A86", icon: min },
		{ value: "NO", label: "New Orleans Saints", color: "#DCC9A4", icon: no },
		{ value: "NYG", label: "New York Giants", color: "#0B2265", icon: nyg },
		{ value: "PHI", label: "Philadelphia Eagles", color: "#1F6269", icon: phi },
		{ value: "SF", label: "San Francisco 49ers", color: "#AB0002", icon: sf },
		{ value: "SEA", label: "Seattle Seahawks", color: "#1E3E5C", icon: sea },
		{ value: "TB", label: "Tampa Bay Buccaneers", color: "#B2344A", icon: tb },
		{ value: "WAS", label: "Washington Football Team", color: "#5A1315", icon: was },
		{ value: "BAL", label: "Baltimore Ravens", color: "#241774", icon: bal },
		{ value: "BUF", label: "Buffalo Bills", color: "#1E4C9C", icon: buf },
		{ value: "CIN", label: "Cincinnati Bengals", color: "#FB4F13", icon: cin },
		{ value: "CLE", label: "Cleveland Browns", color: "#FF3C01", icon: cle },
		{ value: "DEN", label: "Denver Broncos", color: "#1E3E5C", icon: den },
		{ value: "HOU", label: "Houston Texans", color: "#223C48", icon: hou },
		{ value: "IND", label: "Indianapolis Colts", color: "#1D4671", icon: ind },
		{ value: "JAX", label: "Jacksonville Jaguars", color: "#292929", icon: jax },
		{ value: "KC", label: "Kansas City Chiefs", color: "#E83D57", icon: kc },
		{ value: "OAK", label: "Oakland Raiders", color: "#272727", icon: oak },
		{ value: "LAC", label: "Los Angeles Chargers", color: "#0080C7", icon: lac },
		{ value: "MIA", label: "Miami Dolphins", color: "#008E97", icon: mia },
		{ value: "NE", label: "New England Patriots", color: "#002244", icon: ne },
		{ value: "NYJ", label: "New York Jets", color: "#003F2C", icon: nyj },
		{ value: "PIT", label: "Pittsburgh Steelers", color: "#292929", icon: pit },
		{ value: "TEN", label: "Tennessee Titans", color: "#012244", icon: ten },
	];

	const selectStyles = {
		control: (styles, state) => ({
			...styles,
			height: "60px",
			backgroundColor: homeOptions.find((initial) => initial.value === props.default).color,
		}),
		option: (styles, { data, isFocused, isSelected }) => {
			return {
				...styles,
				display: "flex",
				alignItems: "center",
				height: "60px",
				fontSize: "18px",
				color: isFocused || isSelected ? "white" : "black",
				backgroundColor: isFocused || isSelected ? data.color : null,
				backgroundImage: `url(${data.icon})`,
				backgroundRepeat: "no-repeat",
				paddingLeft: "50px",
			};
		},
		singleValue: (styles, { data }) => ({
			...styles,
			display: "flex",
			alignItems: "center",
			fontFamily: "Karla",
			fontSize: "18px",
			backgroundImage: `url(${data.icon})`,
			backgroundRepeat: "no-repeat",
			paddingLeft: "60px",
			height: "60px",
			width: "100%",
			color: data.value === "NO" ? "black" : "white",
			backgroundPosition: "left",
		}),
		valueContainer: (styles, { data }) => ({
			...styles,
			width: "100%",
			height: "100%",
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			transform: "rotate(180deg)",
			color: "white",
		}),
	};

	const handleChange = (e) => {
		if (props.id === "homeSelect") {
			dispatch(changeHome(e.value));
			document.getElementById("homeSelect").children[1].style.backgroundColor = e.color;
		} else {
			dispatch(changeAway(e.value));
			document.getElementById("awaySelect").children[1].style.backgroundColor = e.color;
		}
	};

	return (
		<Select
			id={props.id}
			onChange={handleChange}
			defaultValue={homeOptions.find((initial) => initial.value === props.default)}
			options={homeOptions}
			menuPlacement="top"
            styles={selectStyles}
			components={{
				Menu: (props) => <components.Menu {...props} className="menu" />,
			}}
		/>
	);
};

export default CustomSelect;
