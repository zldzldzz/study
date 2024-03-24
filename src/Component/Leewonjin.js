import React from "react";

class Leewonjin extends React.Component{
    render(){
        const data = this.props.data;
    return (
        <div><h1>
            이름: {data.name} <br/><br/>
            나이: {data.age}<br/>
            대학교: {data.university}<br/>
        <img name="이원진" src="../KakaoTalk_20240319_083541757.jpg" alt="이미지 오류" height={400}/>
        </h1>
        
        </div>
        );
    }
}
    
    export default Leewonjin;