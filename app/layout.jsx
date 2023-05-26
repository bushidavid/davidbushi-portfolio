import '@styles/global.css';
import { Children } from 'react';
import Navbar from '@components/navbar';


export const metadata = {
    title: "David Bushi",
    description: "Portfolio"
}

const RootLayout = ({ children }) => {
  return (
    
    <html lang="en">
        <body className='w-screen'>
                <div className="main">
                    
                </div>

                <main className='w-full'>
                    <Navbar>
                        { children }

                    </Navbar>
                </main>
        </body>
    </html>
  )
}

export default RootLayout;