
import React from 'react'
import Select from 'react-select'

import ari from '../../images/icons/arizona_cardinals.png'
import atl from '../../images/icons/atlanta_falcons.png'
import car from '../../images/icons/carolina_panthers.png'
import chi from '../../images/icons/chicago_bears.png'
import dal from '../../images/icons/dallas_cowboys.png'
import det from '../../images/icons/detroit_lions.png'
import gb from '../../images/icons/greenbay_packers.png'
import la from '../../images/icons/la_rams.png'
import min from '../../images/icons/minnesota_vikings.png'
import no from '../../images/icons/neworleans_saints.png'
import nyg from '../../images/icons/ny_giants.png'
import phi from '../../images/icons/phil_eagles.png'
import sf from '../../images/icons/sanfrancisco.png'
import sea from '../../images/icons/seattle_seahawks.png'
import tb from '../../images/icons/tampabay.png'
import was from '../../images/icons/washington.png'
import bal from '../../images/icons/baltimore_ravens.png'
import buf from '../../images/icons/buffalo_bills.png'
import cin from '../../images/icons/cincinnati_bengals.png'
import cle from '../../images/icons/cleveland_browns.png'
import den from '../../images/icons/denver_broncos.png'
import hou from '../../images/icons/houston_texans.png'
import ind from '../../images/icons/indianapolis_colts.png'
import jax from '../../images/icons/jacksonville_jaguars.png'
import kc from '../../images/icons/kansascity_chiefs.png'
import oak from '../../images/icons/oakland_raiders.png'
import lac from '../../images/icons/losangeles_chargers.png'
import mia from '../../images/icons/miami_dolphins.png'
import ne from '../../images/icons/newengland_patriots.png'
import nyj from '../../images/icons/newyork_jets.png'
import pit from '../../images/icons/pittsburgh_steelers.png'
import ten from '../../images/icons/tennessee_titans.png'

const CustomSelect = (props) => {
    const homeOptions = [
        { value: 'ARI', label: 'Arizona Cardinals', color: "#A43E55", icon: ari },
        { value: 'ATL', label: 'Atlanta Falcons', color: "#B53E52", icon: atl },
        { value: 'CAR', label: 'Carolina Panthers', color: '#0185CA', icon: car },        
        { value: 'CHI', label: 'Chicago Bears', color: '#0B1629', icon: chi },
        { value: 'DAL', label: 'Dallas Cowboys', color: '#012244', icon: dal },
        { value: 'DET', label: 'Detroit Lions', color: '#0076B4', icon: det },
        { value: 'GB', label: 'Green Bay Packers', color: '#3B4E4A', icon: gb },
        { value: 'LA', label: 'Los Angeles Rams', color: '#1E4EA2', icon: la },
        { value: 'MIN', label: 'Minnesota Vikings', color: '#532A86', icon: min },
        { value: 'NO', label: 'New Orleans Saints', color: '#DCC9A4', icon: no },
        { value: 'NYG', label: 'New York Giants', color: '#0B2265', icon: nyg },
        { value: 'PHI', label: 'Philadelphia Eagles', color: '#1F6269', icon: phi },
        { value: 'SF', label: 'San Francisco 49ers', color: '#AB0002', icon: sf },
        { value: 'SEA', label: 'Seattle Seahawks', color: '#1E3E5C', icon: sea },
        { value: 'TB', label: 'Tampa Bay Buccaneers', color: '#B2344A', icon: tb },
        { value: 'WAS', label: 'Washington Football Team', color: '#5A1315', icon: was },
		{ value: 'BAL', label: 'Baltimore Ravens', color: '#241774', icon: bal },
		{ value: 'BUF', label: 'Buffalo Bills', color: '#1E4C9C', icon: buf },
		{ value: 'CIN', label: 'Cincinnati Bengals', color: '#FB4F13', icon: cin },
		{ value: 'CLE', label: 'Cleveland Browns', color: '#FF3C01', icon: cle },
		{ value: 'DEN', label: 'Denver Broncos', color: '#1E3E5C', icon: den },
		{ value: 'HOU', label: 'Houston Texans', color: '#223C48', icon: hou },
		{ value: 'IND', label: 'Indianapolis Colts', color: '#1D4671', icon: ind },
		{ value: 'JAX', label: 'Jacksonville Jaguars', color: '#292929', icon: jax },
		{ value: 'KC', label: 'Kansas City Chiefs', color: '#E83D57', icon: kc },
		{ value: 'OAK', label: 'Oakland Raiders', color: '#272727', icon: oak },
		{ value: 'LAC', label: 'Los Angeles Chargers', color: '#0080C7', icon: lac },
		{ value: 'MIA', label: 'Miami Dolphins', color: '#008E97', icon: mia },
		{ value: 'NE', label: 'New England Patriots', color: '#002244', icon: ne },
		{ value: 'NYJ', label: 'New York Jets', color: '#003F2C', icon: nyj },
		{ value: 'PIT', label: 'Pittsburgh Steelers', color: '#292929', icon: pit },
		{ value: 'TEN', label: 'Tennessee Titans', color: '#012244', icon: ten },
      
    ]


    const selectStyles = {
        control: (styles, state) => ({
            ...styles,
            height: '60px',
            backgroundColor: '#A43E55',
            
        }),
        option: (styles, {data, isFocused, isSelected}) => {
            return {
                ...styles,
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                fontSize: '18px',
                color: isFocused || isSelected ? 'white' : 'black',
                backgroundColor: isFocused || isSelected ? data.color : null,
                backgroundImage: `url(${data.icon})`,
                backgroundRepeat: 'no-repeat',
                paddingLeft : '50px'
                
                
            }
        },
        singleValue: (styles, { data }) => ({ 
            ...styles,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Karla',
            fontSize: '20px',
            backgroundImage: `url(${data.icon})`,
            backgroundRepeat: 'no-repeat',
            paddingLeft: '60px',
            height: '60px',
            color: 'white',
            backgroundPosition: 'left',
            
        }),
        valueContainer: (styles, { data }) => ({
            ...styles,
            width: '100%',
            height: '100%',
        })
    }

    const handleChange = (e) => {
        if(props.id === 'homeSelect'){
            document.getElementById('homeSelect').children[1].style.backgroundColor = e.color
        }
        else{
            document.getElementById('awaySelect').children[1].style.backgroundColor = e.color
        }
        console.log(e.value)
        /* document.getElementById('selectBox').children[1].style.backgroundColor = e.color */
        
        
    }

    return (
        <Select
            id={props.id}
            onChange={handleChange}
            defaultValue={homeOptions[0]}
            options={homeOptions}
            menuPlacement='top'
            styles={selectStyles}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null, }}
        />
    )
}

export default CustomSelect
