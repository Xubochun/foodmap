import React from 'react'
import Menubar from './components/Menubar'
//import Searchbutton from './components/Searchbutton'

//import Mapui from './components/Mapui'
import Googlemaps from './components/Googlemaps'


// 圖片寫法 <img src="/test-logo.jpg" alt="test img tag"/>
/*
<div class='pic'>
    <img src="/test-logo.jpg" width= '80' alt="test img tag"/>
</div>
*/

const Home = () => {


    return <div className='homepage'>
        <Menubar />
        {/*----內容頁面----*/}
        <div className='info'>
            <div className='left'>
                <h2> 推薦 </h2>
                <h3>1. Hearty哈媞手作三明治</h3>
                <p>這次10小時10景點的第一站一樣是吃早餐，這次的內湖一日遊就從Hearty哈媞手作三明治開始吧。哈媞手作三明治是韓式慢煎吐司，更是網友評價出是內湖最好吃三明治。</p>
                <h3>2. 大湖公園</h3>
                <p>第二站景編來到了被法國世界報選為世界最美公園之一的「大湖公園」，這裡擁有超大片湖岸草皮供大家野餐，假日更是成為許多大朋友小朋友最愛的地方。</p>
                <h3>3. 內湖樂活公園(東湖櫻花林)</h3>
                <p>第三站景編來到內湖樂活公園，沿著步道走有滿滿的櫻花樹，因為拍攝的時間是一月中，還不是櫻花盛開的時間，建議大家一月底或是二月份再前來欣賞、拍照。</p>
                <h3>4. 萊樂檬</h3>
                <p>接下來景編來到內湖限定的手搖專賣店「萊樂檬」，這次點的飲料是：芭樂萊樂，使用了天然的芭樂和檸檬搭配而成，整杯都是真材實料的。</p>>
            </div>
            <div className='right'>
                <Googlemaps />
            </div>
        </div>
    </div>
}

export default Home