import HedaerComponent from './Hedaer'
import FooterComponents from './Footer'
import MenuComponents from './Menu'
function Layout({children}) {
  return (
    <div>
        <HedaerComponent />
        <MenuComponents />
        <main> {children}  </main>
        <FooterComponents />
    </div>
  );
}

export default Layout;
