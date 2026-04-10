export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin:0, background:"#020617", color:"white", fontFamily:"Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
