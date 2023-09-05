import React from "react";
interface Props{
    text:string,
    color?:string,
    showColor?:boolean
}
export const Text: React.FC<Props> = ({ text,color }) => {
    return <p className={"text-vibiDarkBlue text-lg font-normal pt-3.5 "+color}>{text}</p>;
  };

export const Title: React.FC<Props> = ({ text, color }) => {
    return <p className={"font-semibold text-sm text-vibiDarkGrey pb-3 "+ color} >{text.toUpperCase()}</p>;
  };

  export const SubTitle: React.FC<Props> = ({ text,showColor }) => {
    return <p className={showColor?("font-bold text-5xl text-vibiDarkBlue pb-0.5"):("text-primary font-bold text-5xl pb-0.5")}>{text}</p>;
  };
  export const SubTitle2: React.FC<Props> = ({ text,showColor, color }) => {
    return <p className={showColor?(" font-bold text-3xl text-vibiDarkBlue pb-0.5 " + color):("text-vibiDarkBlue  font-semibold text-2xl pb-0.5 "+color)}>{text}</p>;
  };
  export const SubText: React.FC<Props> = ({text})=>{
    return <p className="text-xs text-vibiDarkBlue">{text}</p>
  }
  export const CardText: React.FC<Props> = ({ text }) => {
    return <p className="text-vibiDarkBlue text-xl font-medium "  >{text}</p>;
  };
  export const FText:React.FC<Props> = ({text,color})=>{
    return <p className={(color)}>{text}</p>
  }