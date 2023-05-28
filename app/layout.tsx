import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import TheHeader from './components/TheHeader';


export const metadata: Metadata = {
    title: 'KY2',
    description: 'description',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <TheHeader/>
                <main className="max-w-screen">{children}</main>
            </body>
        </html>
    );
}
