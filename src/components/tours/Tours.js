function Tour(props){
   
    return(
        <>
        {
            props.data.map(trv=>{
                return(
                    <>
                    <h1>Name : {trv.name} </h1>
                    <img src={trv.image}/>
                    </>
                );
            })
        }
          
        </>
        
            
    );
}

export default Tour;