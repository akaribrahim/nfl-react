import styled from 'styled-components';


export const Button1 = styled.button`
    color: white;
    $color: #fff;
    $body-color: #fff;
    $color1: #fff;
    $color2: #fff;
    $color3: #fff;
    $color4: #fff;
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    color: $color3;
    width: 180px;
    height:40px;
    white-space: nowrap;
    
    margin-top: 2rem;
    margin-left: 5rem;
    //Effect three
    // Effect one
    &:after,
    &:before{
      content: '';
      padding-left: 6px;
      padding-top: 5px;
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
    &:after{
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: white;
      border-right-color: white;
      color:black;}

    &:before
      {top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: $color3;
      border-left-color: $color3;
        
    }

    &:hover:after,
    &:hover:before{
      border-bottom-color: $color3;
      border-right-color: $color3;
      border-top-color: $color3;
      border-left-color: $color3;
      width: 100%;
      height: 100%;
      color:white;
      padding:0;
    }
`