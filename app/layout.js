import './globals.css'
import { Raleway, Merriweather_Sans } from "@next/font/google";
const raleway = Raleway({
  variable: "--display-font",
  subsets:['cyrillic']
});

const merriweather = Merriweather_Sans({
  variable: "--body-font",
  subsets:['latin']
});

export const metadata = {
  title: 'Dipen Kalsi',
  description: 'This is my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${merriweather.variable} bg-gray-200`}>
      <body >
        <div>
        {children}
        </div>
        </body>
    </html>
  )
}
