import React from 'react';

const Demo = (props) => {
    return (
        <div>
         <table>
             <thead>
            <tr>
                <th>
                    name
                </th>
                <th>
                    topic
                </th>
            </tr>
             </thead>
             <tbody>
             {
                 props.d.map((a)=>{
                   return(
                       <tr>
                           <td>
                               {a.name}
                           </td>
                           <td>
                               {a.topic}
                           </td>
                       </tr>
                   )
                 })
             }
             </tbody>
         </table>
        </div>
    );
};

export default Demo;