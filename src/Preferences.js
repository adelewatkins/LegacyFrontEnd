import { Outlet,Navigate } from "react-router-dom";

 function Preferences() {
let auth ={token: false};
return auth.token?<Outlet/>:<Navigate to = "/Login"/>


};
export default Preferences;