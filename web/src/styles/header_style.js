import { fade } from '@material-ui/core/styles/colorManipulator';
import Logo from '../components/header/logo.png';
import profilePic from '../components/header/profilePicPlaceholder.png';

const styles = theme => ({
    
    mainBar:{
        backgroundColor:"#b20949",
        width: '100%',
        color: theme.palette.common.white,
    },
    formButtonsWrap:{
        width:'40%',
        float:'left',
        display:'inline-box',
        height:'34.4px',
        /*border: '1px solid blue' ,*/
    },
    searchButtonWrap:{
        float:'left',
        height:'34.4px',
        margin:0,
        padding:0,
        marginRight:'5px',
        /*border: '1px solid yellow',*/
        
    },
    addButtonWrap:{
        height:'34.4px',
        margin:0,
        padding:0,
        marginLeft:'5px',
        /* border: '1px solid green',*/
        
    },
    searchButton:{
        height:'34.4px',
        marginLeft: 0,
        marginRight: 0,
        color: "white",
        backgroundColor:"#69052b",
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0,
        margin:'5px',
        marginTop:'0',
        /* border: '1px solid black' ,*/
    },
    addButton:{
        height:'34.4px',
        color: "white",
        backgroundColor:"#69052b",
        margin:'5px',
        marginTop:'0',
        /* border: '1px solid blue' ,*/
    },
    searchForm:{
        width:'50%',
        maxWidth:'500px',
        /*border: '1px solid black' ,*/
    },
    inputWrap:{
        width:'60%',
        float:'left',
        /* border: '1px solid yellow' ,*/

    },
    searchInput:{
        height:'34.4px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    grow: {
        flexGrow: 1,
    },
    logoButton:{
        width:'50px',
        height:'50px',
        margin:"10px",
        padding:0,
    },
    logo: {
        backgroundImage: `url(${Logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height:"50px",
        width: "50px",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: '100%',
        },
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        /* border: '1px solid white' ,*/
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        marginLeft: theme.spacing.unit * .5,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: 200,
        },
        /* border: '1px solid orange' ,*/
    },
    profileButton:{
        width:'40px',
        height:'40px',
        padding:0,
        margin:"10px"
    },
    profileAvatar: {
        backgroundImage: `url(${profilePic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height:"40px",
        width: "40px",
        borderRadius:'80px',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    desktopMenu: {
        position:'fixed',
        marginTop:'55px',
        marginLeft:'30px',
    },
    mobileMenu: {
        position:'fixed',
        marginTop:'55px',
        marginLeft:'20px',
    },
    notificationsModal:{
        marginTop:'55px',
    },
    popMenuIcons:{
        marginRight:'10px',
    },
    notificationsModalText:{
        margin:'10px',
        textAllign:'center',
    },
});

export default styles