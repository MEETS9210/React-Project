import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Form3 from "./views/allPages/Form3";
import Form2 from "./views/allPages/Form2";
import Table2 from "./views/allPages/Table2";
import Table3 from "./views/allPages/Table3"
import Profile from "./views/allPages/Profile";
import Starter from "./views/Starter";
import Login from "./views/allPages/Login";
import Register from "./views/allPages/Register";
import Error from "./login/Error" 
import About from "./login/About";
import Pricing from "./login/Pricing";
// import Planandprice from "./login/Planandprice";
// import { store } from "./views/redux/store";
import { createContext, useState } from "react";
import ReduxForm from "./views/allPages/Redux/ReduxForm";
import ReduxTable from "./views/allPages/Redux/ReduxTable";

export const context = createContext();

const App = () => {

  const obj = JSON.parse(localStorage.getItem("loginObj")) || {};
  let [log, setLog] = useState(obj);



  return (
    <>
      <main>
{/* <Planandprice/> */}

        <BrowserRouter>
          <context.Provider value={{ log, setLog }}>
            
            <Header />
            <div className="pageWrapper d-lg-flex">
              
              <aside className="sidebarArea shadow" id="sidebarArea">
                <Sidebar />
              </aside>

              <div className="contentArea">
                <Routes>

                {
                  !(localStorage.getItem('loginObj')) ?
                    <>
                      <Route path="*" element={<Error />} />
                      <Route path="/" element={<Navigate to='/login' />} />

                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />

                    </>
                    :
                    <>
                      <Route path="*" element={<Error />} />
                      <Route path="/" element={<Navigate to='/starter' />} />

                      <Route path="/starter" element={<Starter />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/about" element={<About/>} />
                      <Route path="/Pricing" element={<Pricing/>} />




                      <Route path="/form1" element={< ReduxForm/>} >
                          <Route path=":id" element={<ReduxForm/>} />
                        </Route>
                        <Route path="/table1" element={<ReduxTable/>} />



                        <Route path="/form2" element={<Form2 />} >
                          <Route path=":id" element={<Form2 />} />
                        </Route>
                        <Route path="/table2" element={<Table2 />} />

                        <Route path="/form3" element={<Form3 />} >
                          <Route path=":id" element={<Form3/>} />
                        </Route>
                        <Route path="/table3" element={<Table3/>} />



                        {/* <Route path="/profile" element={<Profile />} />

                        <Route path="/*" element={<Error />} /> */}


                      </>
                  }



                </Routes>
              </div>
            </div>
          </context.Provider>
        </BrowserRouter>
      </main>
    </>
  )
};

export default App;
