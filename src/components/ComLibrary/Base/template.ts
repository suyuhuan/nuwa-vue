import Text from './Text/template'
// import LongText from './LongText/template';
// import WhiteTpl from './WhiteTpl/template';
// import Icon from './Icon/template';
// import Image from './Image/template';
// import Header from './Header/template';
// import Footer from './Footer/template';
// import Notice from './Notice/template';
// import Qrcode from './Qrcode/template';
// import Carousel from './Carousel/template';
// import Tab from './Tab/template';
// import List from './List/template';
// import Form from './Form/template';

const basicTemplate = [
  Text,
  //   LongText,
  //   WhiteTpl,
  //   Icon,
  //   Image,
  //   Header,
  //   Footer,
  //   Notice,
  //   Qrcode,
  //   Carousel,
  //   Tab,
  //   List,
  //   Form,
]
const BasicTemplate = basicTemplate.map((v) => {
  return { ...v, category: 'base' }
})

export default BasicTemplate
