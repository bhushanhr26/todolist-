import React, { useState, useEffect } from "react";
import { FormGroup, FormControlLabel, Checkbox, Radio } from "@mui/material";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FirstPageRounded } from "@mui/icons-material";

export default function Todo() {
  const arr = ["Badminton", "react", "fresh"];
  const [first, setFirst] = useState(arr);
  const [checked, setChecked] = useState([]);
  const [pop, setPop] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [inp, setInp] = useState("");
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState(first);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    let newArray = [];
    setFilteredArray(() => {
      newArray = first.filter((x) => {
        return x.toLowerCase().includes(search.toLocaleLowerCase());
      });

      return newArray;
    });
    setInp(newArray);
  }, [first, search]);

  const addItem = (first) => {
    let x = first.unshift(inp);
    setInp(x);
    console.log(inp);
  };

  const handleRemove = (first,i) => {
    const newList = first.filter((x)=> x.i !== i);
    setFirst(newList);
  };

  return (
    <div className="main">
      <div className="todo">
        <span>TO-DO List</span>
      </div>
      <div>
        {pop ? (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="inp1"
              type="text"
              value={inp}
              onChange={(e) => {
                let x = e.target.value;
                setInp(x.trim());
              }}
              placeholder="Add Items"
            />
            <button
              className="popbtn"
              onClick={() => {
                addItem(first);
              }}
            >
              <span style={{ color: "green" }}>+</span>
            </button>
          </div>
        ) : (
          <input
            className="inp"
            type="text"
            placeholder="Search.."
            value={search}
            onChange={(e) => {
              let x = e.target.value;
              setSearch(x);
              setFilter(true);
            }}
          />
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormGroup>
          {first.filter((x)=>{
            if(search === ''){
              return x
            } else if(x.toLowerCase().includes(search.toLowerCase())){
              return x
            }
          }).map((x, i) => {
            return (
              <div key={i}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className="MuiFormControlLabel-label css-ahj2mt-MuiTypography-root css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root"
                      value={x}
                      checked={checked.indexOf(x) > -1}
                      onChange={(event) => {
                        let temp = [...checked];
                        if (checked.indexOf(x) > -1)
                          temp = temp.filter((value) => value !== x);
                        else temp.push(x);
                        setChecked(temp);
                      }}
                    />
                  }
                  label={x}
                />
              </div>
            );
          })}
        </FormGroup>
        <div className="delete">
          {first.map((x, i) => {
            return (
              <div
                onClick={() => {
                  handleRemove();
                }}
              >
                <DeleteIcon color="success" key={i} />
              </div>
            );
          })}
        </div>
      </div>

      <footer className="footer">
        <div>
          {pop1 ? (
            <button
              className="btn"
              onClick={() => {
                setPop(false);
                setPop1(false);
              }}
            >
              x
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => {
                setPop(true);
                setPop1(true);
              }}
            >
              +
            </button>
          )}
        </div>
        <div style={{ display: "flex", marginRight: "36%" }}>
          <div>
            <span> {`${first.length}`} Items</span>
          </div>{" "}
        </div>
      </footer>
    </div>
  );
}
