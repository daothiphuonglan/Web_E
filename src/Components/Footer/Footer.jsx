import React from 'react';

import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="grid grid-cols-4 gap-4 bg-slate-300 p-7 m-7">

<div className="col-span-1 p-4">

“Putting customer satisfaction as the number 1 priority in all our thoughts and actions” is our mission, philosophy, strategy.. always moving forward with YODY
  <div className="flex">
  <FaFacebook className="w-8 h-9 m-3"></FaFacebook> 
 <IoLogoYoutube className="w-8 h-9 m-3"></IoLogoYoutube>
 <FaTwitterSquare className="w-8 h-9 m-3"></FaTwitterSquare>

  </div>
 

</div>

{/* Cột 2 */}
<div className="col-span-1 p-4">
    <h6>Về body</h6>
    <ul>
        <li>Introduction</li>
        <li>Contact</li>
        <li>Hier</li>
        <li>News</li>
        <li>System store</li>
    </ul>
</div>

{/* Cột 3 */}
<div className="col-span-1 p-4">


<ul>
        <li>Introduction</li>
        <li>Contact</li>
        <li>Hier</li>
        <li>News</li>
        <li>System store</li>
    </ul>
</div>

{/* Cột 4 */}
<div className="col-span-1">
    
    <h4>Fashion Company</h4>
    <ul>
        <li>Công ty cổ phần Thời trang YODY
Mã số thuế: 0801206940
Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương - Hải Dương</li>
        <li>Tìm cửa hàng gần nhất </li>
        <li>Thắc mắc đơn hàng: 024 999 86 999. Góp ý khiếu nại: 1800 2086.</li>
        <li>News</li>
        <li>System store</li>

    </ul>
    
    </div> 


      
        </div>
    );
};

export default Footer;