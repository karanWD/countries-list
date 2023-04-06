import React, {FC} from "react";

type Props = {
  title: string,
  targetKey?: string
  value: any,
}
const InfoItem: FC<Props> = ({title, value, targetKey}) => {
  return (
      <div className="text-sm">
        <span className="font-regular">{title} :</span>
        {
          value?.length ?
              value?.map((item:string, index:number) => (
                  <span key={"LIST_INFO_ITEM" + index} className="opacity-70 px-1 font-light  border-r border-gray-400 inline-block last:border-none">
                    {item}
                  </span>
              ))
              :
              Object.keys(value).map((item:string, index:number) => (
                  <span key={"LIST_INFO_ITEM" + index} className="opacity-70 px-1 font-light border-r border-gray-400 inline-block last:border-none">
                    {targetKey ? value[item][targetKey] : value[item]}
                  </span>
              ))
        }
      </div>
  )
}

export default InfoItem