import { HamburgerMenu } from 'components/HamburgerMenu/HamburgerMenu';
import { Navbar } from 'components/Navbar/Navbar';
import '../WrapperSection/WrapperSection.scss';

export const WrapperSection: React.FC = () => {
  return (
    <div className='container'>
      <Navbar/>
      <HamburgerMenu/>
    </div>
  )}