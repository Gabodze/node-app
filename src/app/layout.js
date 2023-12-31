import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container' >
          <a href='https://www.bing.com/images/search?view=detailV2&ccid=jd1GBgxv&id=B5959900FDC671605CE6DF51B3CC9BADECDA760F&thid=OIP.jd1GBgxvrAe0BrJnn569mQHaF7&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ddd46060c6fac07b406b2679f9ebd99%3Frik%3DD3ba7K2bzLNR3w%26riu%3Dhttp%253a%252f%252fwallpapercave.com%252fwp%252fDkOxtdL.jpg%26ehk%3DhbR3RU%252bp9%252b3bDXp28G63c3fqiO0uXA5Uc%252f8W56DqKUM%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1024&expw=1280&q=snow&simid=607999805837871938&form=IRPRST&ck=A8C954977551A456D56504F34C475D96&selectedindex=4&ajaxhist=0&ajaxserp=0&vt=0&sim=11'></a>
          <Navbar/>
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
