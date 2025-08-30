import "./globals.css";

export const metadata = {
  metadataBase: "http://localhost:3000",
  title: "cousinkode",
  description: "",
  keywords: ["Next.js", "SEO", "Tailwind", "React"],
  openGraph: {
    title: "Mi Sitio Web",
    description: "Diseñamos y Desarrollamos paginas web",
    url: "http://localhost:3000",
    siteName: "cousinkode",
    images: [
      {
        url: "/logotipo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
