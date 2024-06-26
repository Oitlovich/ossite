import './css/globals.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import StoreProvider from '@/store/store-provider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
        <body>
        <StoreProvider>
            
          <section className='main_sec'>
            <Header/>
          </section>
          
          <main>
            {children}
          </main>
          
          <Footer/>

        </StoreProvider>
      </body>
    </html>
  )
}
