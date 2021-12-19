import React from "react";
import ResponsiveAppBar from '../../components/navbar';
import "./css/style.css"
// import SimplePaper from "../../components/Cards";
import Logo from "../../Assets/Logo.png";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function VerifyTab() {
    return (
        <div>
            <ResponsiveAppBar />
            <h1 className="heading">WellCome To Saylani</h1>
            <div className="imgDiv">
                <img src={Logo} alt="Logo" style={{ width: 400, height: 350 }} />
            </div>
            {/* <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    '& > :not(style)': {
                        m: 1,
                        width: 300,
                        height: 280,

                    },
                }}
            >
                <Paper  elevation={3} >
                    hellco aljhfacnwjecoiawenkcweklcnawejn kan jcawe najkdc  awefoc iowe asjj akfsdjcn sdcnasciacnsj
                </Paper>
                <Paper elevation={3} />
                <Paper elevation={3} />

            </Box> */}
        </div>
    )
}
