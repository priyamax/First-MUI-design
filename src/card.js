
import  React from 'react';
import './App.css';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import dubai from './uae.jfif';
import briyani from './Biryani.jpg'
import jam from './jam1.jpg';



export default function BasicCard() {
  return (
      
    <Card sx={{width:'1310px', height:'560px',backgroundImage: 'linear-gradient(to right,#33AEFF,#0062E6 )', padding: '2%', marginLeft:'0%',display:'flex', gap:'25px',overflowX:'none'}}>
     <Card sx={{ width: 350, height: 580, marginLeft:'105px' ,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
         TRAVEL
        </Typography>
        <img className='dubaipic' src={dubai} alt='buj kalifa'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>UNITED ARAB EMIRATES-DUBAI</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span>A city of many faces , <b>Dubai</b> is one of the most popular tourist destinations in the world.</span>
                </li>
                <li>
                    <span><b>Burj Khalifa </b> is the tallest tower in the world and it's one of the top attractions to visit in Dubai.</span>
                </li>
                <li>
                <span>It has abundant opportunities when it comes to adventure activities like <b> Desert Safaris </b>, <b>Skydiving </b>over the beautiful Palm Islands,<b> kite surfing </b>, etc.</span>
                </li>
            </ul>
        </div>
        <Button  class="btn" variant="contained">LEARN MORE</Button>
        </CardContent>
    </Card>
    <Card sx={{ width: 350, height: 580,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
         FOODS
        </Typography>
        <img className='briyanipic' src={briyani} alt='chicken-briyani'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>INDIAN CUISINE-BRIYANI</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span><b>Biryani</b> is an evergreen classic that really needs no introduction.</span>
                </li>
                <li>
                    <span>It is a <b>mixed rice dish</b> originating among the Muslims of the Indian subcontinent.</span>
                </li>
                <li>
                <span>It is made with Indian spices, rice, and meat usually that of <b>chicken</b>,<b>goat</b>,<b> prawn </b>, <b>fish</b>, and sometimes with <b> eggs or vegetables </b>such as potatoes in certain regional varieties.</span>
                </li>
            </ul>
        </div>
        <Button  class="btn" variant="contained">LEARN MORE</Button>
        </CardContent>
    </Card>
    <Card sx={{ width: 350, height: 580,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
         ENTERTAINMENT
        </Typography>
        <img className='jampic' src={jam} alt='Just add magic'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>TV SHOW-JUST ADD MAGIC</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span><b>Just Add Magic</b> is an American live-action family television series, based on the book of the same name by <b>Cindy Callaghan</b>.</span>
                </li>
                <li>
                    <span><i>Kelly Quinn</i> and her two best friends, <b>Darbie </b> and <b> Hannah </b>, find Kelly's grandmother's cookbook in the attic and discover some strange recipes. </span>
                </li>
                <li>
                <span>They soon begin to realise they have a <i>recipe book</i> full of <b>magic recipes</b>.</span>
                </li>
            </ul>
        </div>
        <Button  class="btn" variant="contained">LEARN MORE</Button>
        </CardContent>
    </Card>
    </Card>
  );
}