export const styles = {
    bgContainer:{
        backgroundColor:'#3b3b98',
        height:'100vh',
        color:'#fff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:3
    },
    heading:{
        fontSize:{xs:'20px', sm:'25px', md:'30px', lg:'50px'},
    },
    generatedBox:{
        backgroundColor:'#fff',
        padding:'10px',
        borderRadius:'15px',
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        width:{xs:'70%', md:"400px"},
        color:'#000',
        paddingLeft:'30px',
    },
    copyBtn:{
        backgroundColor:'#3b3b98',
        color:'#fff',
        padding:'3px 0px',
        width:'5px',
        textTransform:'capitalize',
        alignSelf: 'flex-end',
    },
    infoContainer:{
        backgroundColor:'#23235b',
        boxShadow: '0px 4px 16px 0px #fff',
        listStyleType:'none',
        padding:'15px',
        width:{xs:'70%', md:"400px"},
        borderRadius:'20px',
        display:'flex',
        flexDirection:'column',
        gap:3,
    },
    listItem:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    lenInput:{
        width:'40px',
        padding:'8px',
        borderRadius:'10px',   
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
        },
        outline:'none',
    },
    checkbox:{
        height:'20px',
        width:'20px',
    },
    generateBtn:{
        backgroundColor:'#3b3b98',
        color:'#fff',
        marginTop:'15px',
        textTransform:'capitalize',
    },
}