import { CenterFocusStrong } from "material-ui-icons";

const styles = theme => ({
    add_post:{
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:' 20px',
        marginBottom:' 20px',
        border:' 0px',
        /*border:' 1px solid black',*/
        borderRadius:' 20px',
    },
    
    add_post_button:{    
        backgroundColor:' white',
        border:' 0px',
        /*border:' 1px solid blue',*/
        borderRadius:' 20px',
    },
    
   add_post_input:{
        width:'95%',
        backgroundColor:' white',
        border:' 0px',
        borderRadius:' 40px',
    },
     
     add_post_popup:{
        width:'600px',
        minHeight:' 300px',
        borderRadius:' 40px', 
    },

    add_post_title:{
        textAlign:'center',
        fontSize:'20px',
    },

    post_popup_camera:{
        cursor: 'pointer',
        margin:'10px',
        width:'30px',
        height:'30px',
    },

    post_button:{
        height:'34.4px',
        width:'60px',
        color: "white",
        backgroundColor:"#69052b",
        margin:'5px',
        padding:'5px',
        marginTop:'0',
        textAlign:'center',
        /* border:'1px solid green'*/
    },

    post_cancel_button:{
        height:'34.4px',
        width:'60px',
        color: "white",
        backgroundColor:"grey",
        margin:'5px',
        padding:'1px',
        marginTop:'0',
        textAlign:'center',
        /* border:'1px solid ytellow' */
    },
 });

export default styles