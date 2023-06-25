import '@styles/global.css';
import { Children } from 'react';
import Navbar from '@components/navbar';
import Footer from '@/components/footer';

export const metadata = {
    title: "David Bushi",
    description: "Portfolio"
}

const RootLayout = ({ children }) => {
  return (
    
    <html lang="en">
        <body className='w-screen'>
                <main className='w-screen snap-y'>
                    <Navbar />
                        { children }
                    <Footer />
                </main>
        </body>
    </html>
  )
}

export default RootLayout;