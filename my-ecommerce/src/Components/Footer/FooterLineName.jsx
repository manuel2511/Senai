import './FooterLine.css';

const FooterLineName = (props) => {
  return (
    <div className='lineFooter'>
    <hr className="lineFooterLine" />
    <span className="lineFooterText">{props.name}</span>
    </div>
  )
}

export default FooterLineName
