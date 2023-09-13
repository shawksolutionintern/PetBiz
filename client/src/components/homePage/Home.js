import Calender from "./Calender"
import ApptList from "./ApptList";
import React,{useEffect} from "react";
import { fetchList } from "./apptlistSlice";
import { useSelector, useDispatch } from "react-redux";
// import format from "date-fns/format";


const Home = () => {
      const dispatch = useDispatch();
      const fetchStatus = useSelector((state) => state.apptList.status);
      const apptLists =  useSelector((state)=> state.apptList.list)
      let date = new Date().toJSON().substring(0,10);

    useEffect(() => {
      //  console.log("fetching the list...")
      if (fetchStatus === "idle") {
        dispatch(fetchList(date));
      }
     
    }, [fetchStatus, dispatch]);

    // console.log("applist:", apptLists);

    return(
        <div className="homepage">
            <Calender list={apptLists}/>
            <ApptList />
        </div>
    )
}


export default Home;