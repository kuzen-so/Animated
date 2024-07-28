import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <span>Lama Dev</span>
            <div className="social">
                <a href="#"><img src="/github.png" alt="" /></a>
                <a href="#"><img src="/qq.png" alt="" /></a>
                <a href="#"><img src="/WeChat.png" alt="" /></a>

            </div>
        </div>
    </div>
  )
}
 

export default Navbar