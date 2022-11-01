import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Laptopsid() {
    let param = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        fetch(
        "https://62dba3fee56f6d82a77507de.mockapi.io/Laptops/" + param.id,{method:"GET"}
        )
        .then((Laptop) => {
            return Laptop.json();
        })
        .then((Laptop) => {
            SetLaptop(Laptop);
        });
    }, []);

    const [Laptop, SetLaptop] = useState([]);

    return (
      <>
        <main class="main">
        <div class="mainWrapper" id="mainWrapper">
                <div class="col">
                <div class="productCard_block">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="productCard_leftSide clearfix">
                        <div class="sliderBlock">
                            <ul class="sliderBlock_items">
                            <li class="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                                <img id="img" src={Laptop.LaptopImage} alt="headphones"/>
                            </li>
                            <li class="sliderBlock_items__itemPhoto">
                                <img id="img" src={Laptop.LaptopImage} alt="headphones"/>
                            </li>
                            <li class="sliderBlock_items__itemPhoto">
                                <img id="img" src={Laptop.LaptopImage} alt="headphones"/>
                            </li>
                            <li class="sliderBlock_items__itemPhoto">
                                <img id="img" src={Laptop.LaptopImage} alt="headphones"/>
                            </li>
                            <li class="sliderBlock_items__itemPhoto">
                                <img id="img" src={Laptop.LaptopImage} alt="headphones"/>
                            </li>
                            </ul>

                            <div class="sliderBlock_controls">
                            <div class="sliderBlock_controls__navigatin">
                                <div class="sliderBlock_controls__wrapper">
                                <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                                </div>
                            </div>

                            <ul class="sliderBlock_positionControls">
                                <li class="sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active"></li>
                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                                <li class="sliderBlock_positionControls__paginatorItem"></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="block_rating clearfix">
                                <fieldset class="block_rating__stars">
                                <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Good - 4 stars"></label>
                                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Above average - 3.5 stars"></label>
                                <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Average - 3 stars"></label>
                                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                                <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                </fieldset>

                                <span class="block_rating__avarage">4.25</span>
                                <span class="block_rating__reviews">(153 reviews)</span>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                <div class="block_price">
                                    <p class="block_price__currency">₹{Laptop.LaptopPrice}</p>
                                    <p class="block_price__shipping">Shipping and taxes extra</p>
                                </div>
                                <div class="block_quantity clearfix">
                                    <span class="text_specification">Quantity</span>
                                    <div class="block_quantity__chooseBlock">
                                    <input class="block_quantity__number" name="quantityNumber" type="text" min="1" value="1"/>
                                    <button class="block_quantity__button block_quantity__up"></button>
                                    <button class="block_quantity__button block_quantity__down"></button>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="block_goodColor">
                                    <span class="text_specification">Choose your colors:</span>
                                    <div class="block_goodColor__allColors">
                                    <input type="radio" name="colorOfItem" class="radio_button" id="radioColor" checked />
                                    <label for="radioColor" class="block_goodColor__radio block_goodColor__black"></label>
                                    <input type="radio" name="colorOfItem" class="radio_button" id="radioColor2" />
                                    <label for="radioColor2" class="block_goodColor__radio block_goodColor__silver"></label>
                                    </div>
                                </div>
                                <Link to={"/Payment/" + param.id }>
                                    <button class="button button_addToCard">
                                        Add to Cart
                                    </button>
                                </Link>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-6">
                        <div class="productCard_rightSide">
                        <div class="block_specification">
                            <div class="block_specification__specificationShow">
                            <i class="fa fa-cog block_specification__button block_specification__button__rotate" aria-hidden="true"></i>
                            <span onClick={(e)=>{
                                var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
                                var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];
                                
                                var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
                                var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");

                                buttonSpecification.classList.toggle("hide");
                                buttonInformation.classList.toggle("hide");


                                blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");
                            
                            
                            }} class="block_specification__text">spec</span>
                            </div>
                            <div class="block_specification__informationShow hide">
                            <i class="fa fa-info-circle block_specification__button block_specification__button__jump" aria-hidden="true"></i>
                            <span class="block_specification__text">inform</span>
                            </div>
                        </div>

                        <p class="block_model">
                            <span class="block_model__text">Model: </span>
                            <span class="block_model__number">505795</span>
                        </p>

                        <div class="block_product">
                            <h2 class="block_name block_name__mainName">{Laptop.LaptopName}<sup>&reg; </sup></h2>
                            <h2 class="block_name block_name__addName">{Laptop.LaptopRAM}/{Laptop.LaptopHD}/{Laptop.LaptopProcessor}/{Laptop.LaptopGraphicsCard}</h2>

                            <div class="block_informationAboutDevice">

                            <div class="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                                <table class="block_specificationInformation_table">
                                <tr>
                                    <th>Characteristic</th>
                                    <th>Value</th>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{Laptop.LaptopRAM}</td>
                                </tr>
                                <tr>
                                    <td>HD</td>
                                    <td>{Laptop.LaptopHD}</td>
                                </tr>
                                <tr>
                                    <td>Processor</td>
                                    <td>{Laptop.LaptopProcessor}</td>
                                </tr>
                                <tr>
                                    <td>Graphics Card</td>
                                    <td>{Laptop.LaptopGraphicsCard}</td>
                                </tr>
                                <tr>
                                    <td>Total Harmonic Distortion (THD)</td>
                                    <td>&lt;0.5% (1 kHz, 100 dB SPL)</td>
                                </tr>
                                <tr>
                                    <td>Volume Control</td>
                                    <td>Earcup control when Bluetooth connected</td>
                                </tr>
                                <tr>
                                    <td>Microphone Type</td>
                                    <td>Dual omni-directional microphone <br/>(2 mic beam forming
                                    array)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cable / Connector</td>
                                    <td>1.4m (Detachable) / 3.5mm Angled</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>260g (9.17 oz)</td>
                                </tr>
                                </table>
                            </div>

                            <div class="block_descriptionInformation">
                                <span>{Laptop.LaptopDescription}</span>
                            </div>
                            <div className="row" id="addedit">
                                <div className="col">
                                    <Link to={"/Update/" + param.id }>
                                        <button class="button button_addToCard" onClick={()=>{ Navigate("/AddLaptop/"+param.id);}} id="update">
                                            UPDATE
                                        </button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to={""}>
                                        <button class="button button_addToCard" onClick={()=>{
                                            fetch(
                                                "https://62dba3fee56f6d82a77507de.mockapi.io/Laptops/" + param.id,{method:"DELETE"}
                                                )
                                                .then(() => {
                                                    Navigate("/Laptops");
                                                });
                                        }} id="delete">
                                            DELETE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </main>
      </>
    );
  }
  
  export default Laptopsid;
  