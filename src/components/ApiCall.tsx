import React, { useEffect, useState } from 'react';
import {Container,TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Typography,Pagination,CircularProgress,Box} from "@mui/material";
import { apiPost } from '../model/apiPost';
import FetchReq from '../fetchReq/fetchReq';
import { useHistory } from 'react-router-dom';


const ApiCall = () => {
    //loading state
    const [loading, setLoading] = useState(false);
    //api data state 
    const [apiData, setApiData] = useState<apiPost[]>([]);
    //total element state here api data length can be managed 
    const [totalElement,setTotalElement] = useState<number>(0);
    //current page for the page which make the actual page number render
    const [currentPage,setCurrentPage] = useState<number>(1);
    //the number of data of one single table 
    const rowPerPage = 20;
    //page number which state would be changed after 10 sec
    const [page, setPage] = useState<number>(0);
    // history of the page 
    const history = useHistory()
    // this is the main async func 
 const  getApiData = async() =>  {
       try {
           setLoading(true)
           // axios get the data response like ={data: [{}, {}], status:200 .....}
           // so we need to parse it
           const {data} = await FetchReq.fetchReqPost(page) 
           //data.hits is actual data we need and make it merge and setState 
           setApiData([...apiData, ...data.hits])
           //make the total data length
           setTotalElement([...apiData, ...data.hits].length);
           //finally make the loading false now ....
           setLoading(false)


       }
       
       catch(err) {  // something error happen make this catch block
           console.log(err)

       }

       
   }

   // useEffect for api call 
   useEffect(()=> {
       const interval = setInterval(()=> {
           setPage(prev => prev +1)
       },10000)
       return ()=>  clearInterval(interval)
   },[])

   // page count increase and then useEffect run the async func getApiData()

   useEffect(()=> {
       getApiData()
   },[page])

   //for the pagenation 

   

const initData:number = ((currentPage - 1) * rowPerPage) ; // init data is the first data for for page 
const lastData:number = ((currentPage - 1) * rowPerPage + rowPerPage); // last data for the page 

const handleChangePage = ( e:unknown , page:number)=>{
    setCurrentPage(page);
}

const getdetails = ( value:apiPost) =>{
    history.push("/RowDetails",value);
}



    return (
        <div role ='api-test'>
            <Container maxWidth='lg'>
      
                    <div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{background:"blue"}}>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Url</TableCell>
                                        <TableCell>Created_At</TableCell>
                                        <TableCell>Author</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                           
                                    apiData.slice(initData,lastData).map((value,index)=>(
                                        <TableRow data-testid="details" key={index} onClick={()=>getdetails(value)}>
                                            <TableCell>{value?.title}</TableCell>
                                            <TableCell>{value?.url}</TableCell>
                                            <TableCell>{value?.created_at}</TableCell>
                                            <TableCell>{value?.author}</TableCell>
                                        </TableRow>
                                    ))
                                 }
                                </TableBody>
                            </Table>

                        </TableContainer>
                        <Pagination 
                                     count={totalElement/rowPerPage}
                                     page={currentPage}
                                     variant="outlined"
                                     color="primary"      
                                     onChange={handleChangePage} />

                    </div>
                

            </Container>
            
            
        </div>
    );
};

export default ApiCall;