import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import classes from "./category.module.css";

const checkBoxList: any[] = [
  {
    id: 1,
    title: "Almost Funded",
  }
];



const SideFilter = (props:any) => {
  const [checkList, setCheckList] = useState<any[]>([]);

  const handleToggle = (title:string) => {



    const Checkindex:any = checkList.indexOf(title) ;
    const newCheckList = [...checkList];

    if(Checkindex === -1){
        newCheckList.push(title)
    }else{
        newCheckList.splice(Checkindex, 1);
    }

    setCheckList(newCheckList);
    props.handleSideSort(newCheckList);

  };

  const List = () => {
    return checkBoxList.map((item: any) => {
      return <li style={{ listStyleType: "none" }} className="mt-1" key={item.id}>
        <label className={classes.ctmcheckbox}>
          <p>{item.title}</p>
          <Form.Check
            aria-label="option 1"
            onChange={()=> handleToggle(item.title)}
            checked = {checkList.indexOf(item.title) === -1 ? false : true}
          />
        </label>
      </li>;
    });
  };

  return (
    <div>
      <h6>SORT</h6>
      <ul className="mt-4">
        {List()}
      </ul>
    </div>
  );
};

export default SideFilter;
