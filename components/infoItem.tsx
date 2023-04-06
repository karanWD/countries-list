import React, {FC} from "react";
type Props={
  title:string,
  value:string
}
const InfoItem:FC<Props> = ({title, value}) => {
  return (
      <div className="text-sm">
        <span className="font-regular">{title} :</span>
        <span className="opacity-70 px-1 font-light">{value}</span>
      </div>
  )
}

export default InfoItem