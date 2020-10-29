import React ,{Component} from "react";
export default class FoodItem extends Component{
    render(){
        const {name,handleDelete,handleEdit}=this.props
        return(
        <li className="list-group-item  text-capitalize d-flex justify-content-between ">
            <h6>{name}</h6>
            <div>
                <span onClick={handleEdit} className="mx-3 text-success"><i className="fas fa-edit"></i></span>
                <span onClick={handleDelete} ><i className="fas fa-trash-alt"></i></span>
            </div>
        
        </li>
        )
    }

}