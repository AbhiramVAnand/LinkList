import { useNavigate, Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import './List_component.css'

export default function Link_component(){
    return(
        // <div className="main">
            <div className="containerr">
                <div className="container_top">
                    <div className="data_left">
                        <div className="icon">
                            <FaCircle />
                        </div>
                        <div className="title">
                            <h1>Testing the development</h1>
                        </div>
                        
                    </div>
                    <div className="data_right">
                        <div className="link_info">
                            <p>Front End Development</p>
                        </div>
                        <div className="link_date">
                            <p>18/02/2922</p>
                        </div>
                    </div>
                </div>
                <div className="container_bottom">
                        <p>www.htmerghu4htgiu5hiuthiu35htl.com</p>
                </div>
            </div>
        // </div>    
    )
}