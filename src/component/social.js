import React from 'react';

function Social(){
    return(
     <ul className="list-group-item">
        <li className="list-group-item">
             <input type="checkbox" id="facebook" />
             <label for="facebook">Facebook</label>
        </li>
        <li className="list-group-item">
            <input type="checkbox" id="youTube" />
            <label for="youTube">YouTube</label>
        </li>
        <li className="list-group-item">
            <input type="checkbox" id="instagram" />
            <label for="instagram">Instagram</label>
        </li>
    </ul>
    );
}
export default Social;
