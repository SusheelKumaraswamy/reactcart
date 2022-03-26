import * as React from 'react';
import Grid from '@mui/material/Grid';
import  { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem} from '@mui/material';
import Component2 from './component2';
import Heading from './heading';
function MediaCard() {

    const [rating, setRating] = useState(0) // initial rating value

    const [count, setCount] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  var addarr=[];
  var remarr=[];
  for(var i=1;i<=12;i++){
      var a="addCart"+i;
      var b="removeCart"+i;
      addarr.push(a);
      remarr.push(b);
  }

    function handlecount(e){
      var a=e.target.id;
      for(i in addarr){
          if(addarr[i]===a){
            var addcart = document.getElementById(a);
            if(addcart.style.display==="block"){
                setCount(count + 1);
                addcart.style.display="none";
                console.log("Hello");
                var trial="removeCart"+(+i+1);
                document.getElementById(trial).style.display="block";
            }
          }
      }
    }

    function handlereducecount(e){
        var b=e.target.id;
        console.log(b);
        for(i in remarr){
            console.log(remarr[i])
            if(remarr[i]===b){
                console.log(remarr[i])
              var removecart = document.getElementById(b);
              if(removecart.style.display==="block"){
                  setCount(count - 1);
                  removecart.style.display="none";
                  console.log("Hello remove");
                  var trialremove="addCart"+(+i+1);
                  console.log(trialremove);
                  document.getElementById(trialremove).style.display="block";
              }
            }
        }
    }

  return (
    <Container maxWidth="xl" >
        <div className="header">
            <Component2  a={count}/>
            <Heading />
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{padding: 10}}>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart1" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart1" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart2" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart2" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart3" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart3" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart4" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart4" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart5" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart5" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart6" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart6" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart7" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart7" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart8" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart8" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart9" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart9" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart10" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart10" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart11" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart11" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} xl={3} container direction="column" alignItems="center" justify="center">
                <div style={{border:"1px solid grey", width:250, height:400, textAlign:"center",position:"relative"}}>
                    <img style={{textAlign:'center',width:250}} src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image"></img>
                    <div style={{position:'absolute', top:"5px", right:"5px", width:"50px",borderRadius:"5px",background:"black",color:'white',padding:"1px"}}>sale</div>
                    <span>
                        <p style={{textAlign:'center'}}><b>Fancy Product</b></p>
                        <div className='App'>
                            <Rating onClick={handleRating}/* Available Props */ />
                        </div>
                        <p style={{textAlign:'center'}}>$40.00 - $80.00</p>
                    </span>
                    <div style={{margin:"auto"}}>
                    <Button variant="contained" id="addCart12" onClick={(e)=>handlecount(e)} style={{padding:"10px",display:"block",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>Add to Cart</Button>
                    <Button variant="contained" id="removeCart12" onClick={(e)=>handlereducecount(e)} style={{padding:"10px",display:"none",position:"absolute",left:"50%",transform:"translateX(-50%)",background:"red"}}>Remove</Button>
                    </div>
                </div>
            </Grid>
        </Grid>
        <div style={{background: "black", textAlign:'center',padding:"5px", bottom:"0px"}}>
            <p style={{color: "grey"}}>Copyright Reserverd @2022</p>
        </div>
        </Box>
    </Container>
  );
}

export default MediaCard;

