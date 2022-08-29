import React from 'react';
//import Mapui from './components/Mapui'
import Menubar from './components/Menubar'
import Searchbutton from './components/Searchbutton'


// 圖片寫法 <img src="/test-logo.jpg" alt="test img tag"/>
/*
<div class='pic'>
    <img src="/test-logo.jpg" width= '80' alt="test img tag"/>
</div>
*/

const Home = () => {
    return <div class='homepage'>
        <Menubar />
        <Searchbutton />
        {/*----內容頁面----*/}
        <div class='info'>
            <div class='left'>
                <h2> 推薦 </h2>
                <p>以前男人開車英姿因導航便利盡失，現在人太仰賴導航開車，運氣不好走入死胡同就得等人來救。最近一項研究發現可能可以說服駕駛重新相信自己的判斷能力。20 年前研究發現，計程車司機海馬體大於一般人，最近研究進一步證實神經可塑性之外，現在科學家認為，不依賴導航開車可降低罹患阿茲海默症風險。</p>
                <p>要成為倫敦計程車司機不簡單，必須熟悉倫敦數千條街道與公司、地標，還必須通過執照考試，駕駛要證明自己記住整個倫敦地圖，公認為非常艱苦的知識測驗。許多人為了考照，會騎摩托車穿越大街小巷，掌握最短、最快路線，以及讓自己沒有地圖下順利抵達目的地，平均一個人要練習 3~4 年才能考上，有些人要更久時間。</p>
                <p>倫敦大學學院 (UCL) 認知神經科學教授 Eleanor Maguire 20 年前在《美國國家科學院院刊》刊登研究發現，倫敦計程車駕駛大腦與記憶和空間導航相關的海馬體比正常人大。最近同一批科學家後續研究，追蹤司機四年後發現大腦神經的可塑性，駕駛在考試前與拿到執照後確實發生變化。</p>
                <p>科學家發現，通過嚴格考試的人與四年前剛開始練習相比，後側海馬體更大，非計程車司機或未通過執照考試的人，後側海馬體沒有變化，證明空間學習和記憶會促進大腦發育。</p>
            </div>
            <div class='right'>
                <h2> Google Map </h2>
            </div>
        </div>
    </div>
}

export default Home