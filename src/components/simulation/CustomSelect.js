
import React from 'react'
import Select from 'react-select'

import ac from '../../images/icons/arizona_cardinals.png'
import af from '../../images/icons/atlanta_falcons.png'
import cp from '../../images/icons/carolina_panthers.png'
import cb from '../../images/icons/chicago_bears.png'
import dc from '../../images/icons/dallas_cowboys.png'
import dl from '../../images/icons/detroit_lions.png'
import gbp from '../../images/icons/greenbay_packers.png'
import lar from '../../images/icons/la_rams.png'
import mv from '../../images/icons/minnesota_vikings.png'
import nos from '../../images/icons/neworleans_saints.png'
import nyg from '../../images/icons/ny_giants.png'
import pe from '../../images/icons/phil_eagles.png'
import sf from '../../images/icons/sanfrancisco.png'
import ss from '../../images/icons/seattle_seahawks.png'
import tbb from '../../images/icons/tampabay.png'
import wft from '../../images/icons/washington.png'
const CustomSelect = () => {
    const homeOptions = [
        { value: 'AC', label: 'Arizona Cardinals', color: "#A43E55", icon: ac },
        { value: 'AF', label: 'Atlanta Falcons', color: "#B53E52", icon: af },
        { value: 'CP', label: 'Carolina Panthers', color: '#0185CA', icon: cp },        
        { value: 'CB', label: 'Chicago Bears', color: '#0B1629', icon: cb },
        { value: 'DC', label: 'Dallas Cowboys', color: '#012244', icon: dc },
        { value: 'DL', label: 'Detroit Lions', color: '#0076B4', icon: dl },
        { value: 'GBP', label: 'Green Bay Packers', color: '#3B4E4A', icon: gbp },
        { value: 'LAR', label: 'Los Angeles Rams', color: '#1E4EA2', icon: lar },
        { value: 'MV', label: 'Minnesota Vikings', color: '#532A86', icon: mv },
        { value: 'NOS', label: 'New Orleans Saints', color: '#DCC9A4', icon: nos },
        { value: 'NYG', label: 'New York Giants', color: '#0B2265', icon: nyg },
        { value: 'PE', label: 'Philadelphia Eagles', color: '#1F6269', icon: pe },
        { value: 'SF', label: 'San Francisco 49ers', color: '#AB0002', icon: sf },
        { value: 'SS', label: 'Seattle Seahawks', color: '#1E3E5C', icon: ss },
        { value: 'TBB', label: 'Tampa Bay Buccaneers', color: '#B2344A', icon: tbb },
        { value: 'WFT', label: 'Washington Football Team', color: '#5A1315', icon: wft },
      
    ]


    const selectStyles = {
        control: styles => ({...styles, height: '60px'}),
        option: (styles, {data, isFocused, isSelected}) => {
            return {
                ...styles,
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                fontSize: '18px',
                color: isFocused || isSelected ? 'white':null,
                backgroundColor: isSelected ? data.color : isFocused ? data.color : null,
                backgroundImage: isFocused || isSelected ? `url(${data.icon})` : null,
                backgroundRepeat: 'no-repeat',
                paddingLeft : isFocused || isSelected ? '50px' : null,
                
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
            width: '100%',
            backgroundPosition: 'left',
        }),
    }


    return (
        <Select
            defaultValue={homeOptions[0]}
            options={homeOptions}
            menuPlacement='top'
            styles={selectStyles}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null, }}
        />
    )
}

export default CustomSelect
