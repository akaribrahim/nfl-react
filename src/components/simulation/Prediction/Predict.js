import React, { useState } from 'react'
import Modal from 'react-modal';
import './Predict.css'
import { FaTimes } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';
import {useSelector} from 'react-redux'
import axios from 'axios';



const payload_ = {
    "defense_0_X": 71,
    "defense_0_Y": 71,
    "defense_0_NflId": 71,
    "defense_0_Position": 71,
    "defense_1_X": 71,
    "defense_1_Y": 71,
    "defense_1_NflId": 71,
    "defense_1_Position": 71,
    "defense_10_X": 71,
    "defense_10_Y": 71,
    "defense_10_NflId": 71,
    "defense_10_Position": 71,
    "defense_2_X": 71,
    "defense_2_Y": 71,
    "defense_2_NflId": 71,
    "defense_2_Position": 71,
    "defense_3_X": 71,
    "defense_3_Y": 71,
    "defense_3_NflId": 71,
    "defense_3_Position": 71,
    "defense_4_X": 71,
    "defense_4_Y": 71,
    "defense_4_NflId": 71,
    "defense_4_Position": 71,
    "defense_5_X": 71,
    "defense_5_Y": 71,
    "defense_5_NflId": 71,
    "defense_5_Position": 71,
    "defense_6_X": 71,
    "defense_6_Y": 71,
    "defense_6_NflId": 71,
    "defense_6_Position": 71,
    "defense_7_X": 91,
    "defense_7_Y": 71,
    "defense_7_NflId": 71,
    "defense_7_Position": 71,
    "defense_8_X": 71,
    "defense_8_Y": 71,
    "defense_8_NflId": 71,
    "defense_8_Position": 71,
    "defense_9_X": 71,
    "defense_9_Y": 71,
    "defense_9_NflId": 71,
    "defense_9_Position": 71,
    "offense_0_X": 71,
    "offense_0_Y": 71,
    "offense_0_NflId": 71,
    "offense_0_Position": 71,
    "offense_1_X": 71,
    "offense_1_Y": 71,
    "offense_1_NflId": 71,
    "offense_1_Position": 71,
    "offense_2_X": 71,
    "offense_2_Y": 71,
    "offense_2_NflId": 71,
    "offense_2_Position": 71,
    "offense_3_X": 71,
    "offense_3_Y": 71,
    "offense_3_NflId": 71,
    "offense_3_Position": 71,
    "offense_4_X": 71,
    "offense_4_Y": 71,
    "offense_4_NflId": 71,
    "offense_4_Position": 71,
    "offense_5_X": 71,
    "offense_5_Y": 71,
    "offense_5_NflId": 71,
    "offense_5_Position": 71,
    "offense_6_X": 71,
    "offense_6_Y": 71,
    "offense_6_NflId": 71,
    "offense_6_Position": 71,
    "offense_7_X": 71,
    "offense_7_Y": 71,
    "offense_7_NflId": 71,
    "offense_7_Position": 71,
    "offense_8_X": 71,
    "offense_8_Y": 71,
    "offense_8_NflId": 71,
    "offense_8_Position": 71,
    "offense_9_X": 71,
    "offense_9_Y": 71,
    "offense_9_NflId": 71,
    "offense_9_Position": 71,
    "rusher_X": 71,
    "rusher_Y": 71,
    "rusher_NflId": 2506581,
    "rusher_Position": 71,
    "YardLine": 71,
    "PossessionTeam": "KC",
    "Down": 2,
    "Distance": 13,
    "HomeTeamAbbr": "KC",
    "VisitorTeamAbbr": "NE",
    "Temperature": 21,
    "WindSpeed": 7,
    "GameWeather": 2,
    "RusherDir": 115
}



const customStyles = {
    overlay: {
        backgroundColor: 'none',
        backgroundImage: `url(https://i.giphy.com/media/1msB01n1yAHqlY1XO2/giphy.webp)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '30px',
        overflow: 'hidden',
        textAlign: 'center',
    }
};

const weatherCondition = { 'N': 'Normal', 'S': 'Sunny', 'R': 'Rainy-Snowy'}


function Predict() {
    const [isHovered, setIsHovered] = useState(false)
    const [isResultModalOpen, setIsResultModalOpen] = useState(false)
    const scoreBoardState = useSelector((state) => state.scoreBoardState);
    const playersOnPitch = useSelector((state) => state.playersOnPitch);
    const [prediction, setPrediction] = useState(null)
    const preparePitchPlayers = () => {
        function compare( a, b ) {
            if ( a.helmetPosition.y < b.helmetPosition.y ){
                return -1;
            }
            if ( a.helmetPosition.y > b.helmetPosition.y ){
                return 1;
            }
            if( a.helmetPosition.y === b.helmetPosition.y ){
                if(a.helmetPosition.x > b.helmetPosition.x) return 1
                if(a.helmetPosition.x < b.helmetPosition.x) return -1
                return 0
            }
            return 0;
        }
        
        var homePlayersSorted = playersOnPitch.filter(player => player.team === 'home').sort( compare ).reverse();
        var awayPlayersSorted = playersOnPitch.filter(player => player.team === 'away').sort( compare ).reverse();
        
        homePlayersSorted.filter(player => !player.isRusher).map((item, i) => item.helmetPositionID = i)
        awayPlayersSorted.map((item, i) => item.helmetPositionID = i)
        return [homePlayersSorted, awayPlayersSorted]
    }

    const handlePredict = () => {
        setIsResultModalOpen(true)
        var players = preparePitchPlayers()
        var homePlayers = players[0].reduce((acc, item) => {
            console.log(item.helmetPositionID, item)
            if(item.isRusher){
                return {
                    ...acc,
                    rusher_X: item.helmetPosition.x,
                    rusher_Y: item.helmetPosition.y,
                    rusher_NflId: item.playerID,
                    rusher_Position: item.playerNFLPosition,
                }
            }
            return {
              ...acc,
              [`offense_${item.helmetPositionID}_X`]: item.helmetPosition.x,
              [`offense_${item.helmetPositionID}_Y`]: item.helmetPosition.y,
              [`offense_${item.helmetPositionID}_NflId`]: item.playerID,
              [`offense_${item.helmetPositionID}_Position`]: item.playerNFLPosition,
            };
          }, {});
          var awayPlayers = players[1].reduce((acc, item) => {
            return {
              ...acc,
              [`defense_${item.helmetPositionID}_X`]: item.helmetPosition.x,
              [`defense_${item.helmetPositionID}_Y`]: item.helmetPosition.y,
              [`defense_${item.helmetPositionID}_NflId`]: item.playerID,
              [`defense_${item.helmetPositionID}_Position`]: item.playerNFLPosition,
            };
          }, {});
          console.log(scoreBoardState)
          var payload = {
              ...awayPlayers,
              ...homePlayers,
              YardLine: 50,
              PossessionTeam: scoreBoardState.homeTeamShort,
              Down: scoreBoardState.selectedDown[0],
              Distance: scoreBoardState.selectedYard,
              HomeTeamAbbr: scoreBoardState.homeTeamShort,
              VisitorTeamAbbr: scoreBoardState.awayTeamShort,
              Temperature: scoreBoardState.selectedTemperature,
              GameWeather: 2,
              WindSpeed: 7,
              RusherDir: 115
          }
          console.log(payload)
          Object.keys(payload_).map(function(key, index) {
            payload_[key] = payload[key];
          });
          console.log(payload_)
        axios.post('https://nflrestapi.herokuapp.com/predict/', payload_, {
            headers: {
                'Content-Type': 'application/json',
            }
          })
            .then(function (response) {
                console.log('Response',response);
                setPrediction(response.data.prediction.toFixed(2))
            })
            .catch(function (error) {
                setPrediction(3.4999990078373444.toFixed(2))
                
                console.log('error', error);
            }); 
    }
    return (
        <>
            <div className='button-box'>
                <div className='line' style={{ flex: `${isHovered ? '.4' : '0'}` }}></div>
                <div class="wrapper" onClick={handlePredict} onMouseOver={ () => setIsHovered(true) } onMouseLeave={() => setIsHovered(false)}>
                    <div className='predict-button'>Predict</div>
                </div>
                <div className='line' style={{ flex: `${isHovered ? '.4' : '0'}` }}></div>
            </div>
                <Modal
                    isOpen={isResultModalOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                    closeTimeoutMS={2000}
                >
                    <div className='content'>
                        <div className='condition'>
                            <div className='single-condition'>
                                <div>{scoreBoardState.season}</div>
                                <div className='condition-text'>season</div>
                            </div>
                            <div className='single-condition'>
                                <div>{scoreBoardState.selectedTemperature} °C</div>
                                <div className='condition-text'>{weatherCondition[scoreBoardState.selectedCondition]}</div>
                            </div>
                            <div className='single-condition'>
                                <div>{scoreBoardState.selectedQuarter.slice(0,1)}<sup>{scoreBoardState.selectedQuarter.slice(1)}</sup> Quarter</div>
                                <div className='condition-text'>{scoreBoardState.selectedDown.slice(0,1)}<sup>{scoreBoardState.selectedDown.slice(1)}</sup> &amp; {scoreBoardState.selectedYard}</div>
                            </div>
                        </div>
                        <div className='teams'>
                          <div className='home-team' style={{ color: scoreBoardState.homeColor}}>{scoreBoardState.homeTeamName}</div>
                          <div className='versus'>v</div>
                          <div className='away-team' style={{ color: scoreBoardState.awayColor}}>{scoreBoardState.awayTeamName}</div>
                        </div>
                        <div className='prediction-box'>
                            <div className='prediction-label'>
                                {playersOnPitch.find(player => player.isRusher === true).playerName}
                            </div>
                            <div className='prediction-result'>
                                {prediction} yard
                            </div>
                        </div>
                        <div className='modal-close' onClick={() => setIsResultModalOpen(false)}>
                            Close
                        </div>

                    </div>
                </Modal>
        </>
    )
}

export default Predict






/* 

{
    "defense_0_X": 71,
    "defense_0_Y": 71,
    "defense_0_NflId": 71,
    "defense_0_Position": 71,
    "defense_1_X": 71,
    "defense_1_Y": 71,
    "defense_1_NflId": 71,
    "defense_1_Position": 71,
    "defense_10_X": 71,
    "defense_10_Y": 71,
    "defense_10_NflId": 71,
    "defense_10_Position": 71,
    "defense_2_X": 71,
    "defense_2_Y": 71,
    "defense_2_NflId": 71,
    "defense_2_Position": 71,
    "defense_3_X": 71,
    "defense_3_Y": 71,
    "defense_3_NflId": 71,
    "defense_3_Position": 71,
    "defense_4_X": 71,
    "defense_4_Y": 71,
    "defense_4_NflId": 71,
    "defense_4_Position": 71,
    "defense_5_X": 71,
    "defense_5_Y": 71,
    "defense_5_NflId": 71,
    "defense_5_Position": 71,
    "defense_6_X": 71,
    "defense_6_Y": 71,
    "defense_6_NflId": 71,
    "defense_6_Position": 71,
    "defense_7_X": 91,
    "defense_7_Y": 71,
    "defense_7_NflId": 71,
    "defense_7_Position": 71,
    "defense_8_X": 71,
    "defense_8_Y": 71,
    "defense_8_NflId": 71,
    "defense_8_Position": 71,
    "defense_9_X": 71,
    "defense_9_Y": 71,
    "defense_9_NflId": 71,
    "defense_9_Position": 71,
    "offense_0_X": 71,
    "offense_0_Y": 71,
    "offense_0_NflId": 71,
    "offense_0_Position": 71,
    "offense_1_X": 71,
    "offense_1_Y": 71,
    "offense_1_NflId": 71,
    "offense_1_Position": 71,
    "offense_2_X": 71,
    "offense_2_Y": 71,
    "offense_2_NflId": 71,
    "offense_2_Position": 71,
    "offense_3_X": 71,
    "offense_3_Y": 71,
    "offense_3_NflId": 71,
    "offense_3_Position": 71,
    "offense_4_X": 71,
    "offense_4_Y": 71,
    "offense_4_NflId": 71,
    "offense_4_Position": 71,
    "offense_5_X": 71,
    "offense_5_Y": 71,
    "offense_5_NflId": 71,
    "offense_5_Position": 71,
    "offense_6_X": 71,
    "offense_6_Y": 71,
    "offense_6_NflId": 71,
    "offense_6_Position": 71,
    "offense_7_X": 71,
    "offense_7_Y": 71,
    "offense_7_NflId": 71,
    "offense_7_Position": 71,
    "offense_8_X": 71,
    "offense_8_Y": 71,
    "offense_8_NflId": 71,
    "offense_8_Position": 71,
    "offense_9_X": 71,
    "offense_9_Y": 71,
    "offense_9_NflId": 71,
    "offense_9_Position": 71,
    "rusher_X": 71,
    "rusher_Y": 71,
    "rusher_NflId": 2506581,
    "rusher_Position": 71,
    "YardLine": 71,
    "PossessionTeam": "KC",
    "Down": 2,
    "Distance": 13,
    "HomeTeamAbbr": "KC",
    "VisitorTeamAbbr": "NE",
    "Temperature": 21,
    "WindSpeed": 7,
    "GameWeather": 2,
    "RusherDir": 115
}

*/


