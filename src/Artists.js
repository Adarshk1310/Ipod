import styled from 'styled-components';
import AdarshPic from './assets/images/AdarshPic.jpg'

const Creator = styled.img`
width:100%;
height:100%;


`;


const Artist =(props)=>{
            return <>
            <Creator alt="CreatorImage" src={AdarshPic}>
            </Creator>
            </>
}





export default Artist;