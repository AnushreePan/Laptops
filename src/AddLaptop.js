import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddLaptop() {
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        if (param.id > 0) {
          fetch(
            "https://62dba3fee56f6d82a77507de.mockapi.io/Laptops/" + param.id,{method: "GET"}
          )
            .then((Laptop) => {
              return Laptop.json();
            })
            .then((Laptop) => {
              setData(Laptop);
            });
        }
      }, []);

    const [Data, setData] = useState({});

  return (
    <>
      <div class="container" id="containeradd">
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Book Name" id="font">Laptop Name :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Laptop Name" placeholder="Enter Laptop Name"
                    value={Data.LaptopName}
                    onChange={(e) => {
                      setData({ ...Data, LaptopName: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Author Name" id="font">Laptop RAM :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Laptop RAM" placeholder="Laptop RAM"
                    value={Data.LaptopRAM}
                    onChange={(e) => {
                      setData({ ...Data, LaptopRAM: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Author Name" id="font">Laptop HD :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Laptop HD" placeholder="Hard Disk"
                    value={Data.LaptopHD}
                    onChange={(e) => {
                      setData({ ...Data, LaptopHD: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Author Name" id="font">Laptop Processor :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Laptop Processor" placeholder="Laptop Processor"
                    value={Data.LaptopProcessor}
                    onChange={(e) => {
                      setData({ ...Data, LaptopProcessor: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Author Name" id="font">Laptop Graphics Card :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Graphics Card" placeholder="Laptop Graphics Card"
                    value={Data.LaptopGraphicsCard}
                    onChange={(e) => {
                      setData({ ...Data, LaptopGraphicsCard: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="price" id="font">Laptop Price :</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Laptop Price" placeholder="It should be in Rupees ₹"
                    value={Data.LaptopPrice}
                    onChange={(e) => {
                      setData({ ...Data, LaptopPrice: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Description" id="font">Laptop Description :</label>
                </div>
                <div class="col-90">
                    <textarea name="Description" id="Description" cols="30" row Adds="10" 
                     value={Data.LaptopDescription}
                     onChange={(e) => {
                       setData({ ...Data, LaptopDescription: e.target.value });
                     }}></textarea>
                </div>
            </div>
            <div class="row" id="rowadd">
                <div class="col-10">
                    <label for="Book Image" id="font">Laptop Image:</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="lAPTOP Image" placeholder="Only Image url"
                    value={Data.LaptopImage}
                    onChange={(e) => {
                      setData({ ...Data, LaptopImage: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row" id="butaddwidth">
                <button className="button button_addToCart"
                onClick={() => {
                    if (param.id > 0) {
                      fetch(
                        "https://62dba3fee56f6d82a77507de.mockapi.io/Laptops/" +
                          param.id,
                        {
                          method: "PUT",
                          body: JSON.stringify(Data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/Laptops_id/" + param.id );
                      });
                    } else {
                      fetch(
                        "https://62dba3fee56f6d82a77507de.mockapi.io/Laptops/",
                        {
                          method: "POST",
                          body: JSON.stringify(Data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/Laptops");
                      });
                    }
                  }}>
                    {param.id > 0 && "UPDATE LAPTOP "} {!(param.id > 0) && "ADD LAPTOP"}
                </button>
            </div>  
        </div>
    </>
  );
}

export default AddLaptop;