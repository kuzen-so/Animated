

const Links = () => {


    const items = ["主页",  "博客","项目","留言", "关于"];
  return (
    <div className="links">{items.map((item)=>(<a href={`#${item}`} key={item}>{item}</a>))}</div>
  )
}

export default Links