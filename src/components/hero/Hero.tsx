import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            {/* 主页文字 */}
            <div className="textContainer">
                <h2>KUZEN SCHOLAR</h2>
                <h1>Web developer </h1>
                <h1>UI desiginer</h1>
                {/* 主页按钮 */}
                <div className="buttons">
                    <button>最新作品</button>
                    <button>联系我</button>
                </div>
                <img src="/Scroll.png" alt="" />
             </div>
             <div className="slidingTextContainer">
                Writer Content Creator Influencer
             </div>
        {/* 主页照片 */}
            <div className="imageContainer">
            <img src="/hero.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Hero