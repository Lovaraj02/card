import React from "react";
const Card = ()=>{


    return(
    
                    <div className="thalli">
    
                        <div className="pilla">
                            <div className="pilla-1">
                                <div className="myimg"><img src="/ram.jpg" alt="logo"/></div>
                                <div>lova raju</div>
                                <div>web developer</div>
                            </div>
                        <div className="pilla-2">

                            <div className="pilla-2_data">
                                    <div>projects</div>
                                    <div className="num">10</div>
                            </div>
                            <div className="pilla-2_data">
                                <div>following</div>
                                <div className="num">100</div>
                            </div>
                            <div className="pilla-2_data">
                                <div>followers</div>
                                <div className="num">10.2k</div>
                            </div>
                        </div>
                        <div className="pilla-3">
                            <div>Code Blooded</div>
                        </div>
                        <div className="pilla-4">
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className="pilla-5">
                            <button>view profile</button>
                        </div>
                        </div>
                </div>   
    
    )
}

export default Card;