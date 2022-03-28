import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.product_name}</td>
                    <td>${props.price}</td>
                    <td>{props.product_category}</td>
                    <td>{props.description}</td>
                </tr>
            )
    }
    
        

export default ChartRow;