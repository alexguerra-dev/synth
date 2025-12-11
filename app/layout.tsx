import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Synth - 4d4.live',
    description: 'Your body is an audio wonderland.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
